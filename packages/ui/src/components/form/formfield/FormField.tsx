import React from 'react';
import { ErrorMessage } from '../errormessage/ErrorMessage';
import { HelperText } from '../helpertext/HelperText';

export interface FormFieldProps {
  /** Unique identifier for the field */
  id?: string;
  /** Field label text */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Helper text to display below the field */
  helperText?: string;
  /** Additional CSS class names */
  className?: string;
  /** Child form control component */
  children: React.ReactNode;
  /** Label position */
  labelPosition?: 'top' | 'left' | 'floating';
  /** Field size */
  size?: 'sm' | 'md' | 'lg';
  /** Show asterisk for required fields */
  showRequiredIndicator?: boolean;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      id,
      label,
      required = false,
      error,
      helperText,
      className = '',
      children,
      labelPosition = 'top',
      size = 'md',
      showRequiredIndicator = true,
      ...props
    },
    ref
  ) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const labelClasses = `
      block font-medium text-gray-700 dark:text-gray-200
      ${sizeClasses[size]}
      ${labelPosition === 'floating' ? 'absolute -top-2 left-2 bg-white dark:bg-gray-800 px-1 text-xs' : ''}
      ${labelPosition === 'left' ? 'flex-shrink-0 w-32' : ''}
      ${hasError ? 'text-red-600 dark:text-red-400' : ''}
    `;

    const containerClasses = `
      ${labelPosition === 'left' ? 'flex items-start gap-3' : 'space-y-1'}
      ${labelPosition === 'floating' ? 'relative' : ''}
      ${className}
    `;

    const childWrapper = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          id: fieldId,
          'aria-describedby': error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined,
          'aria-invalid': hasError,
        });
      }
      return child;
    });

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {label && labelPosition !== 'floating' && (
          <label htmlFor={fieldId} className={labelClasses}>
            {label}
            {required && showRequiredIndicator && (
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            )}
          </label>
        )}
        
        <div className={labelPosition === 'left' ? 'flex-1' : ''}>
          {labelPosition === 'floating' && label && (
            <label htmlFor={fieldId} className={labelClasses}>
              {label}
              {required && showRequiredIndicator && (
                <span className="text-red-500 ml-1" aria-label="required">*</span>
              )}
            </label>
          )}
          
          {childWrapper}
          
          <div className="mt-1">
            <ErrorMessage message={error} fieldId={fieldId} size={size} />
            <HelperText text={!error ? helperText : undefined} fieldId={fieldId} size={size} />
          </div>
        </div>
      </div>
    );
  }
);

FormField.displayName = 'FormField';