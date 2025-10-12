import React from 'react';
import { cn } from '@/utils/cn';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toast variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Toast title */
  title?: string;
  /** Auto dismiss duration in milliseconds (0 to disable) */
  duration?: number;
  /** Whether to show close button */
  closable?: boolean;
  /** Callback when toast is closed */
  onClose?: () => void;
  /** Show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Toast content */
  children?: React.ReactNode;
}

const variantClasses = {
  info: {
    container: 'bg-white border-blue-200 text-gray-900 shadow-lg',
    icon: 'text-blue-600',
  },
  success: {
    container: 'bg-white border-green-200 text-gray-900 shadow-lg',
    icon: 'text-green-600',
  },
  warning: {
    container: 'bg-white border-yellow-200 text-gray-900 shadow-lg',
    icon: 'text-yellow-600',
  },
  error: {
    container: 'bg-white border-red-200 text-gray-900 shadow-lg',
    icon: 'text-red-600',
  },
};

const defaultIcons = {
  info: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  success: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
};

export const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  title,
  duration = 5000,
  closable = true,
  onClose,
  showIcon = true,
  icon,
  children,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300); // Animation duration
  };

  if (!isVisible) return null;

  const variantStyle = variantClasses[variant];
  const displayIcon = icon || (showIcon && defaultIcons[variant]);

  return (
    <div
      className={cn(
        'max-w-sm w-full border rounded-lg p-4 transition-all duration-300 ease-in-out',
        variantStyle.container,
        isExiting && 'translate-x-full opacity-0',
        className
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...props}
    >
      <div className="flex">
        {/* Icon */}
        {displayIcon && (
          <div className={cn('flex-shrink-0', variantStyle.icon)}>
            {displayIcon}
          </div>
        )}

        {/* Content */}
        <div className={cn('flex-1', displayIcon && 'ml-3')}>
          {title && (
            <div className="text-sm font-medium mb-1">
              {title}
            </div>
          )}
          {children && (
            <div className="text-sm text-gray-600">
              {children}
            </div>
          )}
        </div>

        {/* Close button */}
        {closable && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded"
              onClick={handleClose}
              aria-label="Close toast"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Progress bar for auto-dismiss */}
      {duration > 0 && (
        <div className="mt-3 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gray-400 rounded-full transition-all linear"
            style={{
              animation: `toast-progress ${duration}ms linear`,
              transformOrigin: 'left',
            }}
          />
        </div>
      )}
    </div>
  );
};

// Toast Container Component for positioning multiple toasts
export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position of toast container */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Maximum number of toasts to show */
  max?: number;
}

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  max = 5,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'fixed z-50 flex flex-col space-y-2 pointer-events-none',
        positionClasses[position],
        className
      )}
      {...props}
    >
      <div className="flex flex-col space-y-2 pointer-events-auto">
        {React.Children.toArray(children).slice(0, max)}
      </div>
    </div>
  );
};