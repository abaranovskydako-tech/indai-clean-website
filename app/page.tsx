import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesSection from '@/components/sections/CasesSection';
import QuizSection from '@/components/sections/QuizSection';
import TrustSection from '@/components/sections/TrustSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

/**
 * Homepage
 * 
 * Per MASTER_SPEC §10.3: Canonical section order
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />        {/* #1 */}
      <ProcessSection />     {/* #2 */}
      <ServicesSection />    {/* #3 */}
      <CasesSection />       {/* #4 */}
      <QuizSection />        {/* #5 */}
      <TrustSection />       {/* #6 */}
      <GallerySection />     {/* #7 */}
      <FAQSection />         {/* #8 */}
      <CTASection />         {/* #9 */}
    </>
  );
}
