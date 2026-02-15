import Image from 'next/image';
import { TRUST_SIGNALS, SECTION_HEADINGS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Shield, CheckCircle, Users, Clock } from 'lucide-react';

/**
 * TrustSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/TrustSection.tsx
 * Per MASTER_SPEC §10.3 #6: Guarantees & trust signals
 * Per MEDIA_PLACEMENT_PLAN v1.0: Kärcher team photo block
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CheckCircle,
  Users,
  Clock,
};

export default function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="trust-heading"
            className="text-3xl font-semibold leading-snug text-dark-500 md:text-4xl"
          >
            {SECTION_HEADINGS.trust}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_SIGNALS.map((signal) => {
            const IconComponent = iconMap[signal.icon];
            return (
              <Card key={signal.id} className="text-center">
                {IconComponent && (
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10">
                    <IconComponent className="h-6 w-6 text-primary-500" />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold leading-relaxed text-dark-500">
                  {signal.title}
                </h3>
                <p className="text-sm font-normal leading-5 text-dark-500/70">
                  {signal.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Kärcher Partnership — photo proof */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-dark-500">
          <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-2">
            {/* Team photo */}
            <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px]">
              <Image
                src="/photos/karcher_training_03_team.jpg"
                alt="Команда INDAI Clean на площадке Kärcher — 13 сертифицированных инженеров"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text block */}
            <div className="px-8 py-10 md:px-12">
              <Badge variant="accent" className="mb-4">
                Партнёр Kärcher
              </Badge>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Сертифицированные инженеры
              </h3>
              <p className="text-base leading-relaxed text-white/70">
                Наша команда прошла обучение на индустриальной площадке Kärcher
                в Москве. 13 инженеров сертифицированы для работы
                с промышленным оборудованием Kärcher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
