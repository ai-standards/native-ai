import React from 'react';

export interface HelperTextProps {
  /** Helper text content */
  text?: string;
  /** Field ID for accessibility association */
  fieldId?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show helper icon */
  showIcon?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Custom helper icon */
  icon?: React.ReactNode;
  /** Helper text variant */
  variant?: 'default' | 'info' | 'warning' | 'success';
  /** Position relative to field */
  position?: 'below' | 'inline';
}

export const HelperText = React.forwardRef<HTMLDivElement, HelperTextProps>(
  (
    {
      text,
      fieldId,
      size = 'md',
      showIcon = false,
      className = '',
      icon,
      variant = 'default',
      position = 'below',
      ...props
    },
    ref
  ) => {
    if (!text) return null;

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    const iconSizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    };

    const variantClasses = {
      default: 'text-gray-600 dark:text-gray-400',
      info: 'text-blue-600 dark:text-blue-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      success: 'text-green-600 dark:text-green-400',
    };

    const positionClasses = {
      below: 'mt-1',
      inline: 'ml-2',
    };

    const helperId = fieldId ? `${fieldId}-helper` : undefined;

    const getDefaultIcon = () => {
      switch (variant) {
        case 'info':
          return (
            <svg
              className={`${iconSizeClasses[size]} flex-shrink-0`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          );
        case 'warning':
          return (
            <svg
              className={`${iconSizeClasses[size]} flex-shrink-0`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          );
        case 'success':
          return (
            <svg
              className={`${iconSizeClasses[size]} flex-shrink-0`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          );
        default:
          return (
            <svg
              className={`${iconSizeClasses[size]} flex-shrink-0`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          );
      }
    };

    return (
      <div
        ref={ref}
        id={helperId}
        className={`
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${positionClasses[position]}
          ${showIcon ? 'flex items-start gap-1' : ''}
          ${className}
        `}
        {...props}
      >
        {showIcon && (icon || getDefaultIcon())}
        <span className={showIcon ? 'flex-1' : ''}>{text}</span>
      </div>
    );
  }
);

HelperText.displayName = 'HelperText';