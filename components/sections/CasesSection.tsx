import Image from 'next/image';
import { CASES, SECTION_HEADINGS } from '@/lib/constants';
import Card from '@/components/ui/Card';

/**
 * CasesSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/CasesSection.tsx
 * Per MASTER_SPEC §10.3 #4: Before/After cases
 */
export default function CasesSection() {
  return (
    <section id="cases" aria-labelledby="cases-heading" className="container mx-auto px-4 py-8">
      <h2 id="cases-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.cases}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CASES.map((caseItem) => (
          <Card key={caseItem.id}>
            <h3 className="text-2xl font-semibold leading-relaxed text-dark-500 mb-4">
              {caseItem.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Image
                  src={caseItem.beforeImage}
                  alt={caseItem.beforeAlt}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
              <div>
                <Image
                  src={caseItem.afterImage}
                  alt={caseItem.afterAlt}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            <p className="text-base font-normal leading-6 text-dark-500">
              {caseItem.result}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

