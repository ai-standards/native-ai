import React, { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  variant = 'default',
  resize = 'vertical',
  className,
  id,
  rows = 3,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const textareaVariants = {
    default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white',
    filled: 'border-0 bg-gray-100 focus:bg-white focus:ring-blue-500'
  };

  const resizeVariants = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={cn(
          // Base styles
          'block w-full rounded-md shadow-sm px-3 py-2',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'placeholder:text-gray-400',
          // Variant styles
          textareaVariants[variant],
          // Resize styles
          resizeVariants[resize],
          // Error styles
          error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      
      <div className="mt-2">
        <ErrorMessage message={error} fieldId={id} />
        <HelperText text={!error ? helperText : undefined} fieldId={id} />
      </div>
    </div>
  );
});

Textarea.displayName = 'Textarea';