'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { SYSTEM_MESSAGES } from '@/lib/constants';

/**
 * Error Boundary Page
 * 
 * Applies Design System tokens:
 * - Typography from Typography Canon v1.0.0
 * - Colors from Color Palette Canon v1.0.0
 * - Button component from Component Library Canon v1.0.0
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    // In production, this would be logged server-side
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500 mb-4">
        {SYSTEM_MESSAGES.error.title}
      </h1>
      <p className="text-base font-normal leading-6 text-dark-500 mb-8">
        {SYSTEM_MESSAGES.error.description}
      </p>
      <Button variant="default" onClick={reset}>
        {SYSTEM_MESSAGES.error.retry}
      </Button>
    </div>
  );
}

