import Link from 'next/link';
import { SERVICE_CARDS, SECTION_HEADINGS, UI_LABELS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import {
  Thermometer,
  Flame,
  Pipette,
  Container,
  Scissors,
  Droplets,
  ArrowRight,
} from 'lucide-react';

/**
 * ServicesSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/ServicesSection.tsx
 * Per MASTER_SPEC §10.3 #3: Service cards for homepage
 *
 * 6 cards with Lucide icons, hover lift, links to /services/[slug]
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Flame,
  PipetteIcon: Pipette,
  Container,
  Scissors,
  Droplets,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-light-200 py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="services-heading"
            className="text-3xl font-semibold leading-snug text-dark-500 md:text-4xl"
          >
            {SECTION_HEADINGS.services}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <Card className="flex h-full flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  {IconComponent && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                      <IconComponent className="h-6 w-6 text-primary-500" />
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold leading-relaxed text-dark-500">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-base font-normal leading-6 text-dark-500/70">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ocean-500 transition-colors group-hover:text-primary-500">
                    {UI_LABELS.buttons.learnMore}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
