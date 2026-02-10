/**
 * Type definitions for INDAI Clean project
 * 
 * Per MASTER_SPEC §6: types exported from types/index.ts
 */

// Process Section Types
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  isFree: boolean;
}

// Cases Section Types
export interface CaseItem {
  id: string;
  title: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  result: string;
}

// Trust Section Types
export interface TrustSignal {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

// FAQ Section Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Gallery Section Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// CTA Section Types
export interface CTAContent {
  heading: string;
  description: string;
  buttonText: string;
}

