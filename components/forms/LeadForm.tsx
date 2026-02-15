'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormInput } from '@/lib/validation/lead';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { SERVICE_CARDS } from '@/lib/constants';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

interface LeadFormProps {
  source?: 'form' | 'quiz' | 'callback';
  defaultEquipmentType?: string;
  className?: string;
}

function getUtmParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
} {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') ?? undefined,
    utmMedium: params.get('utm_medium') ?? undefined,
    utmCampaign: params.get('utm_campaign') ?? undefined,
  };
}

function LeadForm({ source = 'form', defaultEquipmentType, className }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [leadId, setLeadId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormInput>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      equipmentType: defaultEquipmentType ?? '',
    },
  });

  const onSubmit = async (data: LeadFormInput) => {
    setStatus('submitting');
    setServerError(null);

    try {
      const utm = getUtmParams();
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source, ...utm }),
      });

      if (response.ok) {
        const result = await response.json();
        setLeadId(result.leadId ?? null);
        setStatus('success');
        return;
      }

      if (response.status === 429) {
        setServerError('Заявка уже отправлена. Ожидайте звонка.');
      } else {
        setServerError('Произошла ошибка. Позвоните нам: +7 (495) 123-45-67');
      }
    } catch {
      setServerError('Ошибка сети. Попробуйте позже.');
    }

    setStatus('error');
  };

  if (status === 'success') {
    return (
      <div className={cn('text-center', className)}>
        <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Заявка принята</h3>
        <p className="mt-2 text-white/80">
          Инженер свяжется в течение 2 часов.
          {leadId && (
            <span className="block mt-1 text-sm text-white/60">
              Номер заявки: {leadId}
            </span>
          )}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            reset();
            setStatus('idle');
            setLeadId(null);
            setServerError(null);
          }}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={cn(
        'space-y-4',
        status === 'error' && 'border-2 border-red-400/50 rounded-lg p-4',
        className
      )}
    >
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-white mb-1">
          Ваше имя <span className="text-accent-500">*</span>
        </label>
        <Input
          id="lead-name"
          {...register('name')}
          placeholder="Как к вам обращаться?"
          error={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium text-white mb-1">
          Телефон <span className="text-accent-500">*</span>
        </label>
        <Input
          id="lead-phone"
          {...register('phone')}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+7 (___) ___-__-__"
          error={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-sm text-red-400 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium text-white mb-1">
          Email
        </label>
        <Input
          id="lead-email"
          {...register('email')}
          type="email"
          autoComplete="email"
          placeholder="email@company.ru"
          error={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lead-equipment" className="block text-sm font-medium text-white mb-1">
          Тип оборудования
        </label>
        <select
          id="lead-equipment"
          {...register('equipmentType')}
          className="w-full px-3 py-2 border rounded border-light-200 bg-white text-dark-500 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        >
          <option value="">Выберите тип оборудования</option>
          {SERVICE_CARDS.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-white mb-1">
          Сообщение
        </label>
        <textarea
          id="lead-message"
          {...register('message')}
          rows={3}
          placeholder="Опишите задачу..."
          className="w-full px-3 py-2 border rounded border-light-200 bg-white text-dark-500 focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span className="text-sm font-medium">Не удалось отправить заявку</span>
        </div>
      )}

      {serverError && (
        <p className="text-sm text-red-400">{serverError}</p>
      )}

      <Button
        type="submit"
        variant="default"
        className="w-full py-3 text-lg font-semibold"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin mr-2 h-5 w-5 inline-block" />
            Отправка...
          </>
        ) : (
          'Отправить заявку'
        )}
      </Button>
    </form>
  );
}

export default LeadForm;
