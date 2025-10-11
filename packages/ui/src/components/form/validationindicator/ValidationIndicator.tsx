import React from 'react';

export interface ValidationIndicatorProps {
  /** Validation status */
  status?: 'idle' | 'validating' | 'valid' | 'invalid' | 'warning';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show status text */
  showText?: boolean;
  /** Custom status text */
  statusText?: string;
  /** Additional CSS class names */
  className?: string;
  /** Custom icons for each status */
  icons?: {
    idle?: React.ReactNode;
    validating?: React.ReactNode;
    valid?: React.ReactNode;
    invalid?: React.ReactNode;
    warning?: React.ReactNode;
  };
  /** Position of the indicator */
  position?: 'start' | 'end';
  /** Animate transitions */
  animate?: boolean;
}

export const ValidationIndicator = React.forwardRef<HTMLDivElement, ValidationIndicatorProps>(
  (
    {
      status = 'idle',
      size = 'md',
      showText = false,
      statusText,
      className = '',
      icons = {},
      position = 'end',
      animate = true,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: {
        icon: 'w-3 h-3',
        text: 'text-xs',
        container: 'gap-1',
      },
      md: {
        icon: 'w-4 h-4',
        text: 'text-sm',
        container: 'gap-1.5',
      },
      lg: {
        icon: 'w-5 h-5',
        text: 'text-base',
        container: 'gap-2',
      },
    };

    const statusConfig = {
      idle: {
        color: 'text-gray-400 dark:text-gray-500',
        text: statusText || 'Ready',
      },
      validating: {
        color: 'text-blue-500 dark:text-blue-400',
        text: statusText || 'Validating...',
      },
      valid: {
        color: 'text-green-500 dark:text-green-400',
        text: statusText || 'Valid',
      },
      invalid: {
        color: 'text-red-500 dark:text-red-400',
        text: statusText || 'Invalid',
      },
      warning: {
        color: 'text-yellow-500 dark:text-yellow-400',
        text: statusText || 'Warning',
      },
    };

    const getDefaultIcon = (currentStatus: typeof status) => {
      const iconClasses = `${sizeClasses[size].icon} ${
        animate && currentStatus === 'validating' ? 'animate-spin' : ''
      }`;

      switch (currentStatus) {
        case 'idle':
          return (
            <svg
              className={iconClasses}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
            </svg>
          );
        case 'validating':
          return (
            <svg
              className={iconClasses}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          );
        case 'valid':
          return (
            <svg
              className={iconClasses}
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
        case 'invalid':
          return (
            <svg
              className={iconClasses}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          );
        case 'warning':
          return (
            <svg
              className={iconClasses}
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
        default:
          return null;
      }
    };

    const currentIcon = icons[status] || getDefaultIcon(status);
    const currentConfig = statusConfig[status];

    if (status === 'idle' && !showText) {
      return null;
    }

    const containerClasses = `
      flex items-center
      ${position === 'start' ? 'flex-row' : 'flex-row'}
      ${sizeClasses[size].container}
      ${currentConfig.color}
      ${animate ? 'transition-colors duration-200' : ''}
      ${className}
    `;

    return (
      <div
        ref={ref}
        className={containerClasses}
        role="status"
        aria-live="polite"
        {...props}
      >
        {position === 'start' && currentIcon}
        {showText && (
          <span className={`${sizeClasses[size].text} font-medium`}>
            {currentConfig.text}
          </span>
        )}
        {position === 'end' && currentIcon}
      </div>
    );
  }
);

ValidationIndicator.displayName = 'ValidationIndicator';