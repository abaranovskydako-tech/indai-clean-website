import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { QUIZ_CONTENT } from '@/lib/constants';
import { Calculator } from 'lucide-react';

/**
 * QuizSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/QuizSection.tsx
 * Per MASTER_SPEC §10.3 #5: Cost calculator CTA
 *
 * Dark accent block with Badge, heading highlight, CTA button.
 */
export default function QuizSection() {
  return (
    <section
      id="quiz"
      aria-labelledby="quiz-heading"
      className="bg-dark-500 py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Badge variant="accent" className="mb-6 inline-flex items-center gap-2">
          <Calculator className="h-4 w-4" aria-hidden="true" />
          {QUIZ_CONTENT.badge}
        </Badge>

        <h2
          id="quiz-heading"
          className="mb-4 text-3xl font-semibold leading-snug text-white md:text-4xl"
        >
          {QUIZ_CONTENT.heading}{' '}
          <span className="text-accent-500">{QUIZ_CONTENT.headingHighlight}</span>
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-base font-normal leading-6 text-white/70">
          {QUIZ_CONTENT.description}
        </p>

        <Link href="#quiz-form">
          <Button variant="default" className="px-8 py-3 text-lg font-semibold">
            {QUIZ_CONTENT.cta}
          </Button>
        </Link>
      </div>
    </section>
  );
}
