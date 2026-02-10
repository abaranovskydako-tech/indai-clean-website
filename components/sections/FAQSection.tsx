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
    <section id="faq" aria-labelledby="faq-heading" className="container mx-auto px-4 py-8">
      <h2 id="faq-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.faq}
      </h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.id}
            className="border border-light-200 rounded p-4 cursor-pointer"
          >
            <summary className="text-base font-semibold leading-6 text-dark-500 cursor-pointer">
              {item.question}
            </summary>
            <p className="text-base font-normal leading-6 text-dark-500 mt-2 pl-4">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

