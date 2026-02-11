import { CTA_CONTENT } from '@/lib/constants';
import Button from '@/components/ui/Button';

/**
 * CTASection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/CTASection.tsx
 * Per MASTER_SPEC §10.3 #9: Final call-to-action
 *
 * Dark block, white text, centered layout.
 */
export default function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-dark-500 py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          id="cta-heading"
          className="mb-4 text-3xl font-semibold leading-snug text-white md:text-4xl"
        >
          {CTA_CONTENT.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base font-normal leading-6 text-white/70">
          {CTA_CONTENT.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="default" className="px-8 py-3 text-lg font-semibold">
            {CTA_CONTENT.buttonText}
          </Button>
          {CTA_CONTENT.secondaryButtonText && (
            <Button
              variant="outline"
              className="border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-dark-500"
            >
              {CTA_CONTENT.secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
