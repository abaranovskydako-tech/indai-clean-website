import { CTA_CONTENT } from '@/lib/constants';
import Button from '@/components/ui/Button';

/**
 * CTASection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/CTASection.tsx
 * Per MASTER_SPEC §10.3 #9: Final call-to-action
 * 
 * Status: Placeholder — form submission deferred to Lead System task
 */
export default function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-light-200 py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-4">
          {CTA_CONTENT.heading}
        </h2>
        <p className="text-base font-normal leading-6 text-dark-500 mb-6 max-w-2xl mx-auto">
          {CTA_CONTENT.description}
        </p>
        <Button variant="default">
          {CTA_CONTENT.buttonText}
        </Button>
      </div>
    </section>
  );
}

