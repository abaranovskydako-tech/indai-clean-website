import { TRUST_SIGNALS, SECTION_HEADINGS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import { Shield, CheckCircle, Users, Clock } from 'lucide-react';

/**
 * TrustSection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/TrustSection.tsx
 * Per MASTER_SPEC §10.3 #6: Guarantees & trust signals
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CheckCircle,
  Users,
  Clock,
};

export default function TrustSection() {
  return (
    <section id="trust" aria-labelledby="trust-heading" className="container mx-auto px-4 py-8">
      <h2 id="trust-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.trust}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRUST_SIGNALS.map((signal) => {
          const IconComponent = iconMap[signal.icon];
          return (
            <Card key={signal.id}>
              {IconComponent && (
                <IconComponent className="w-8 h-8 text-primary-500 mb-3" />
              )}
              <h3 className="text-2xl font-semibold leading-relaxed text-dark-500 mb-2">
                {signal.title}
              </h3>
              <p className="text-base font-normal leading-6 text-dark-500">
                {signal.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

