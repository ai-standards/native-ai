import React, { forwardRef, useState } from 'react';
import { cn } from '../../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Enable automatic email validation when type="email" */
  validateEmail?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  variant = 'default',
  leftIcon,
  rightIcon,
  validateEmail = true,
  className,
  id,
  type = 'text',
  onChange,
  onBlur,
  value,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const [internalError, setInternalError] = useState<string>('');

  const inputVariants = {
    default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white',
    filled: 'border-0 bg-gray-100 focus:bg-white focus:ring-blue-500'
  };

  // Email validation function
  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes with validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Clear internal error when user starts typing
    if (internalError) {
      setInternalError('');
    }
    
    // Call original onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  // Handle blur with validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Validate email on blur if type is email and validateEmail is true
    if (type === 'email' && validateEmail && inputValue) {
      if (!validateEmailFormat(inputValue)) {
        setInternalError('Please enter a valid email address');
      } else {
        setInternalError('');
      }
    }
    
    // Call original onBlur if provided
    if (onBlur) {
      onBlur(e);
    }
  };

  // Use internal error if no external error is provided
  const displayError = error || internalError;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-gray-400">
              {leftIcon}
            </div>
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            // Base styles
            'block w-full rounded-md shadow-sm',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'placeholder:text-gray-400',
            // Padding adjustments for icons
            leftIcon ? 'pl-10' : 'pl-3',
            rightIcon ? 'pr-10' : 'pr-3',
            'py-2',
            // Variant styles
            inputVariants[variant],
            // Error styles
            displayError && 'border-red-300 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-gray-400">
              {rightIcon}
            </div>
          </div>
        )}
      </div>
      
      {(displayError || helperText) && (
        <p className={cn(
          'mt-2 text-sm',
          displayError ? 'text-red-600' : 'text-gray-500'
        )}>
          {displayError || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';