import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Card component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/ui/Card.tsx
 */

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn('border border-light-200 bg-white p-4 rounded', className)}>
      {children}
    </div>
  );
}

