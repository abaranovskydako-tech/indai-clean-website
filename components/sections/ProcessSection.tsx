import { PROCESS_STEPS, SECTION_HEADINGS, UI_LABELS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

/**
 * ProcessSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/ProcessSection.tsx
 * Per MASTER_SPEC §10.3 #2: 4 steps (3 free)
 */
export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="container mx-auto px-4 py-8">
      <h2 id="process-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.process}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS_STEPS.map((step) => (
          <Card key={step.number} className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <Badge variant="accent">{step.number}</Badge>
              {step.isFree && <Badge variant="success">{UI_LABELS.badges.free}</Badge>}
            </div>
            <h3 className="text-2xl font-semibold leading-relaxed text-dark-500 mb-2">
              {step.title}
            </h3>
            <p className="text-base font-normal leading-6 text-dark-500">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

