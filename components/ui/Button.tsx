import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Button component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/ui/Button.tsx
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'default',
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded font-normal text-base leading-6 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-accent-500 text-dark-500 hover:opacity-90 active:opacity-80 focus:ring-accent-500',
    secondary: 'bg-ocean-500 text-white hover:opacity-90 active:opacity-80 focus:ring-ocean-500',
    outline: 'border-2 border-ocean-500 text-ocean-500 bg-transparent hover:bg-ocean-500 hover:text-white focus:ring-ocean-500',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        disabled && disabledClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

