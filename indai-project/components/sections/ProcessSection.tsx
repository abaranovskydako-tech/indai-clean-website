import { PROCESS_STEPS, SECTION_HEADINGS, UI_LABELS } from '@/lib/constants';
import Badge from '@/components/ui/Badge';

/**
 * ProcessSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/ProcessSection.tsx
 * Per MASTER_SPEC §10.3 #2: 4 steps (3 free)
 *
 * Styled step cards with visual flow between steps.
 */
export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-white py-16 md:py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          id="process-heading"
          className="text-3xl md:text-4xl font-bold text-dark-500 mb-12 md:mb-16 pb-4 border-b-2 border-accent-500 w-fit"
        >
          {SECTION_HEADINGS.process}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-light-200"
            aria-hidden
          />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-start lg:items-center text-center lg:text-left"
            >
              {/* Step number - large background element */}
              <div className="mb-4 w-full lg:w-auto">
                <span
                  className="text-5xl font-bold text-primary-500/20 block"
                  aria-hidden
                >
                  {String(step.number).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3 w-full lg:justify-center">
                <Badge variant="accent">{step.number}</Badge>
                {step.isFree && (
                  <Badge variant="success">{UI_LABELS.badges.free}</Badge>
                )}
              </div>

              <h3 className="text-lg font-semibold text-dark-500 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-dark-500/70 leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow between cards on desktop (except last) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-16 text-primary-500/30"
                  aria-hidden
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
