import Link from 'next/link';
import { HERO_CONTENT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

/**
 * HeroSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/HeroSection.tsx
 *
 * Full-height dark gradient hero with CTAs and stats.
 * Per HERO_DESIGN_CONCEPT_CANON_v2: restrained, engineering reliability, calm.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-500 via-ocean-500/80 to-dark-500"
        aria-hidden
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:24px_24px]"
        aria-hidden
      />

      {/* Decorative gradient orb - top right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        aria-hidden
      />

      {/* Decorative gradient orb - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <Badge
            variant="default"
            className="bg-white/10 text-light-200 border border-white/20"
          >
            {HERO_CONTENT.badge}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            {HERO_CONTENT.heading.line1}
            {HERO_CONTENT.heading.highlight && (
              <>
                {' '}
                <span className="text-accent-500">{HERO_CONTENT.heading.highlight}</span>
              </>
            )}
            <br />
            {HERO_CONTENT.heading.line2}
          </h1>

          <p className="text-lg md:text-xl text-light-200/80 max-w-2xl leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#quiz">
              <Button
                variant="default"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-500 text-dark-500 hover:opacity-90 px-6 py-3 text-base"
              >
                {HERO_CONTENT.cta.primary}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-light-200/60 text-light-200 hover:bg-white/10 hover:border-white/80 hover:text-white px-6 py-3"
              >
                {HERO_CONTENT.cta.secondary}
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {HERO_CONTENT.stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-3xl font-bold text-accent-500">{stat.value}</p>
                <p className="text-sm text-light-200/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
