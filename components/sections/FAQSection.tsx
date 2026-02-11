import { FAQ_ITEMS, SECTION_HEADINGS } from '@/lib/constants';

/**
 * FAQSection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/FAQSection.tsx
 * Per MASTER_SPEC §10.3 #8: Questions & answers
 *
 * Uses native <details>/<summary> for keyboard accessibility (§16.2)
 */
export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-semibold leading-snug text-dark-500 md:text-4xl"
          >
            {SECTION_HEADINGS.faq}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.id}
              className="group rounded-lg border border-light-200 bg-white p-5 transition-shadow hover:shadow-sm"
            >
              <summary className="cursor-pointer text-base font-semibold leading-6 text-dark-500">
                {item.question}
              </summary>
              <p className="mt-3 text-base font-normal leading-6 text-dark-500/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
