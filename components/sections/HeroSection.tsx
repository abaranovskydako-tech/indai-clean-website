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
 * Full-height hero with background video and CTAs/stats.
 * Per HERO_DESIGN_CONCEPT_CANON_v2: restrained, engineering reliability, calm.
 * Per HERO_VIDEO_CANON v2.0.0: muted, autoplay, loop, background only.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background video + dark overlay */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark-500/60" />
      </div>

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
