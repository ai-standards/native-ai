import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled';
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error,
  helperText,
  size = 'md',
  variant = 'default',
  indeterminate = false,
  className,
  id,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const sizeVariants = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const labelSizeVariants = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const checkboxVariants = {
    default: 'border-gray-300 text-blue-600 focus:ring-blue-500',
    filled: 'border-gray-400 text-blue-600 focus:ring-blue-500 bg-gray-50'
  };

  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              // Base styles
              'rounded border focus:ring-2 focus:ring-offset-2',
              'transition-colors duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              // Size styles
              sizeVariants[size],
              // Variant styles
              checkboxVariants[variant],
              // Error styles
              error && 'border-red-300 text-red-600 focus:ring-red-500',
              className
            )}
            {...props}
          />
        </div>
        
        {label && (
          <div className="ml-3">
            <label
              htmlFor={checkboxId}
              className={cn(
                'font-medium text-gray-700 cursor-pointer',
                labelSizeVariants[size],
                error && 'text-red-700'
              )}
            >
              {label}
            </label>
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p className={cn(
          'mt-2 text-sm',
          error ? 'text-red-600' : 'text-gray-500',
          label ? 'ml-8' : ''
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';