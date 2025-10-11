import React from 'react';

export interface ErrorMessageProps {
  /** Error message text */
  message?: string;
  /** Field ID for accessibility association */
  fieldId?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show error icon */
  showIcon?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Custom error icon */
  icon?: React.ReactNode;
  /** Animation variant */
  animation?: 'fade' | 'slide' | 'none';
}

export const ErrorMessage = React.forwardRef<HTMLDivElement, ErrorMessageProps>(
  (
    {
      message,
      fieldId,
      size = 'md',
      showIcon = true,
      className = '',
      icon,
      animation = 'fade',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      if (message) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, [message]);

    if (!message) return null;

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

    const animationClasses = {
      fade: `transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
      slide: `transition-all duration-200 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
      }`,
      none: '',
    };

    const errorId = fieldId ? `${fieldId}-error` : undefined;

    const defaultIcon = (
      <svg
        className={`${iconSizeClasses[size]} flex-shrink-0`}
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

    return (
      <div
        ref={ref}
        id={errorId}
        role="alert"
        className={`
          text-red-600 dark:text-red-400 
          flex items-start gap-1
          ${sizeClasses[size]}
          ${animationClasses[animation]}
          ${className}
        `}
        {...props}
      >
        {showIcon && (icon || defaultIcon)}
        <span className="flex-1">{message}</span>
      </div>
    );
  }
);

ErrorMessage.displayName = 'ErrorMessage';