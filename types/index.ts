/**
 * Shared TypeScript types & interfaces
 *
 * Per MASTER_SPEC §6: types in types/index.ts
 * Per ADDENDUM P0.3: CaseItem replaced by ResultItem
 */

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  isFree: boolean;
}

export interface ServiceCard {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface ResultItem {
  id: string;
  object: string;
  service: string;
  metrics: ResultMetric[];
}

/** @deprecated Use ResultItem instead. Per ADDENDUM P0.3. */
export interface CaseItem {
  id: string;
  title: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  result: string;
}

export interface TrustSignal {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface QuizContent {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
  cta: string;
}

export interface CTAContent {
  heading: string;
  description: string;
  buttonText: string;
  secondaryButtonText?: string;
}
