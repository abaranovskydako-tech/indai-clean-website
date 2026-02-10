import Button from '@/components/ui/Button';
import { SECTION_HEADINGS } from '@/lib/constants';

/**
 * QuizSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/QuizSection.tsx
 * Per MASTER_SPEC §10.3 #5: Cost calculator (placeholder)
 * 
 * Status: Placeholder — full implementation deferred to Lead System task
 */
export default function QuizSection() {
  return (
    <section id="quiz" aria-labelledby="quiz-heading" className="container mx-auto px-4 py-8">
      <h2 id="quiz-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-4">
        {SECTION_HEADINGS.quiz.title}
      </h2>
      <p className="text-base font-normal leading-6 text-dark-500 mb-6">
        {SECTION_HEADINGS.quiz.description}
      </p>
      <Button variant="default" disabled>
        {SECTION_HEADINGS.quiz.buttonPlaceholder}
      </Button>
    </section>
  );
}

