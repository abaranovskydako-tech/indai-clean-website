import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Input component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/ui/Input.tsx
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', error, className, disabled, ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-2 border rounded font-normal text-base leading-6 text-dark-500 bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors';
    
    const stateClasses = {
      default: 'border-light-200 focus:border-ocean-500 focus:ring-ocean-500',
      error: 'border-accent-500 focus:border-accent-500 focus:ring-accent-500',
      disabled: 'opacity-50 cursor-not-allowed bg-light-200',
    };

    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={error}
        className={cn(
          baseClasses,
          error ? stateClasses.error : stateClasses.default,
          disabled && stateClasses.disabled,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;

