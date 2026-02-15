import Image from 'next/image';
import { TRUST_SIGNALS, SECTION_HEADINGS } from '@/lib/constants';
import Card from '@/components/ui/Card';
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

        {/* Kärcher Partnership — team photos */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Photo 1: Team at Kärcher stand */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/media/trust/karcher-team.webp"
                alt="Команда INDAI Clean на площадке Kärcher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-500 via-dark-500/80 to-transparent p-6">
              <p className="text-sm font-semibold text-white">
                Сертифицированная команда Kärcher
              </p>
            </div>
          </div>

          {/* Photo 2: Training at Kärcher facility */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/media/trust/karcher-training.webp"
                alt="Обучение инженеров на оборудовании Kärcher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-500 via-dark-500/80 to-transparent p-6">
              <p className="text-sm font-semibold text-white">
                Регулярное обучение и аттестация
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
