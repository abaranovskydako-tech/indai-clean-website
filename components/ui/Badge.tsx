import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Badge component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/ui/Badge.tsx
 */

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const baseClasses = 'inline-block px-2 py-1 rounded text-sm font-normal';
  
  const variantClasses = {
    default: 'bg-light-200 text-dark-500',
    accent: 'bg-accent-500 text-dark-500',
    success: 'bg-ocean-500 text-white',
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
}

