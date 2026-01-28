import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import WorkflowSection from '@/components/workflow/WorkflowSection';
import EffectsSection from '@/components/effects/EffectsSection';
import QuizWidget from '@/components/quiz/QuizWidget';
import AiAssistantWidget from '@/components/ai-widget/AiAssistantWidget';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <EffectsSection />
      <QuizWidget />
      <AiAssistantWidget />
    </>
  );
}
