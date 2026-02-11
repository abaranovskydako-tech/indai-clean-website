import { RESULTS, SECTION_HEADINGS } from '@/lib/constants';
import Card from '@/components/ui/Card';

/**
 * ResultsSection — metric-based case results
 *
 * Per ADDENDUM P0.3: replaces CasesSection (before/after photos)
 * Engineers evaluate by metrics, not photos.
 *
 * Position: #4 (after ProcessSection)
 * Background: bg-light-200
 */
export default function ResultsSection() {
  return (
    <section className="bg-light-200 py-20" id="results">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-dark-500 sm:text-4xl">
          {SECTION_HEADINGS.results}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-dark-500/70">
          {SECTION_HEADINGS.resultsSubtitle}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {RESULTS.map((result) => (
            <Card
              key={result.id}
              className="bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Object & Service */}
              <div className="mb-6">
                <h3 className="mb-1 text-xl font-bold text-dark-500">
                  {result.object}
                </h3>
                <p className="text-base text-dark-500/60">
                  {result.service}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {result.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-1 text-2xl font-bold text-accent-500 sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="text-sm leading-tight text-dark-500/60">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
