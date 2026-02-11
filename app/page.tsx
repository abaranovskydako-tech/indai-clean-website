import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TrustSection from '@/components/sections/TrustSection';
import QuizSection from '@/components/sections/QuizSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

/**
 * Homepage
 *
 * Per ADDENDUM P0.3: Updated canonical section order
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />        {/* #1 — Value proposition + CTA */}
      <ServicesSection />     {/* #2 — What we do */}
      <ProcessSection />      {/* #3 — How it works */}
      <ResultsSection />      {/* #4 — Proof by metrics */}
      <TrustSection />        {/* #5 — Guarantees */}
      <QuizSection />         {/* #6 — Lead capture */}
      <GallerySection />      {/* #7 — Work photos */}
      <FAQSection />          {/* #8 — Objection handling */}
      <CTASection />          {/* #9 — Final CTA */}
    </>
  );
}
