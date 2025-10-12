import React, { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled';
  placeholder?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  variant = 'default',
  placeholder,
  options,
  className,
  id,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  const selectVariants = {
    default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white',
    filled: 'border-0 bg-gray-100 focus:bg-white focus:ring-blue-500'
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={cn(
            // Base styles
            'block w-full rounded-md shadow-sm px-3 py-2',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'appearance-none cursor-pointer',
            // Variant styles
            selectVariants[variant],
            // Error styles
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-2">
        <ErrorMessage message={error} fieldId={id} />
        <HelperText text={!error ? helperText : undefined} fieldId={id} />
      </div>
    </div>
  );
});

Select.displayName = 'Select';