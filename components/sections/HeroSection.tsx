import Link from 'next/link';
import { UI_LABELS } from '@/lib/constants';

/**
 * HeroSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/HeroSection.tsx
 * 
 * Applies Design System tokens:
 * - Typography from Typography Canon v1.0.0
 * - Colors from Color Palette Canon v1.0.0
 */
export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500 mb-4">
        Hero Section
      </h1>
      <p className="text-base font-normal leading-6 text-dark-500 mb-6">
        Placeholder for Hero content
      </p>
      <Link
        href="/services"
        className="inline-block px-4 py-2 rounded font-normal text-base leading-6 bg-accent-500 text-dark-500 hover:opacity-90 transition-colors"
      >
        {UI_LABELS.buttons.services}
      </Link>
    </section>
  );
}

