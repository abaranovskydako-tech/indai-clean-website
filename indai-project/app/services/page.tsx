import { getAllServices } from '@/lib/services';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PAGE_METADATA, SECTION_HEADINGS } from '@/lib/constants';

export const metadata: Metadata = {
  title: PAGE_METADATA.servicesPage.title,
  description: PAGE_METADATA.servicesPage.description,
};

/**
 * Services Index Page
 * 
 * Applies Design System tokens:
 * - Typography from Typography Canon v1.0.0
 * - Colors from Color Palette Canon v1.0.0
 */
export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500 mb-6">
        {SECTION_HEADINGS.services}
      </h1>
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
    </div>
  );
}
