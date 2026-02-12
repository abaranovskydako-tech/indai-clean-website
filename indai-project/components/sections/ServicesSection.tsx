import { getAllServices } from '@/lib/services';
import { SECTION_HEADINGS } from '@/lib/constants';
import Link from 'next/link';

/**
 * ServicesSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/ServicesSection.tsx
 * 
 * Applies Design System tokens:
 * - Typography from Typography Canon v1.0.0
 * - Colors from Color Palette Canon v1.0.0
 */
export default function ServicesSection() {
  const services = getAllServices();

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.services}
      </h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="text-base font-normal leading-6 text-ocean-500 hover:text-primary-500 transition-colors"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

