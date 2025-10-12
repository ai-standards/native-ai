import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export interface CalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Callout variant */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
  /** Callout size */
  size?: 'sm' | 'md' | 'lg';
  /** Icon to display */
  icon?: React.ReactNode;
  /** Title text */
  title?: React.ReactNode;
  /** Enable dismissible behavior */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
}

export const Callout: React.FC<CalloutProps> = ({
  variant = 'neutral',
  size = 'md',
  icon,
  title,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}) => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) return null;

  const calloutStyles = cn(
    'rounded-lg border',
    {
      // Variant colors
      'bg-blue-50 border-blue-200 text-blue-900': variant === 'info',
      'bg-green-50 border-green-200 text-green-900': variant === 'success',
      'bg-yellow-50 border-yellow-200 text-yellow-900': variant === 'warning',
      'bg-red-50 border-red-200 text-red-900': variant === 'error',
      'bg-gray-50 border-gray-200 text-gray-900': variant === 'neutral',
      
      // Size
      'p-3': size === 'sm',
      'p-4': size === 'md',
      'p-6': size === 'lg',
    },
    className
  );

  const iconColors = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    neutral: 'text-gray-500',
  };

  const defaultIcons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    neutral: '💬',
  };

  const displayIcon = icon || defaultIcons[variant];

  return (
    <div className={calloutStyles} role="alert" {...props}>
      <div className="flex items-start gap-3">
        {displayIcon && (
          <div className={cn('flex-shrink-0', iconColors[variant])}>
            {typeof displayIcon === 'string' ? (
              <span className="text-lg">{displayIcon}</span>
            ) : (
              displayIcon
            )}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {title && (
            <div className={cn(
              'font-semibold mb-1',
              {
                'text-sm': size === 'sm',
                'text-base': size === 'md',
                'text-lg': size === 'lg',
              }
            )}>
              {title}
            </div>
          )}
          
          <div className={cn(
            'leading-relaxed',
            {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-base': size === 'lg',
            }
          )}>
            {children}
          </div>
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={cn(
              'flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors',
              iconColors[variant]
            )}
            aria-label="Dismiss callout"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};