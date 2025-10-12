import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  /** Badge size */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Badge content */
  children: React.ReactNode;
  /** Show a dot indicator */
  dot?: boolean;
  /** Position for dot badge */
  dotPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Removable badge with close button */
  removable?: boolean;
  /** Callback when badge is removed */
  onRemove?: () => void;
  /** Badge shape */
  shape?: 'rounded' | 'pill' | 'square';
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800 border-gray-200',
  secondary: 'bg-gray-600 text-white border-gray-600',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200',
  outline: 'bg-transparent text-gray-600 border-gray-300',
};

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-sm',
};

const shapeClasses = {
  rounded: 'rounded-md',
  pill: 'rounded-full',
  square: 'rounded-none',
};

const dotPositionClasses = {
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  shape = 'rounded',
  children,
  dot = false,
  dotPosition = 'top-right',
  icon,
  iconPosition = 'left',
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  if (dot) {
    return (
      <div className="relative inline-flex" {...props}>
        {children}
        <span
          className={cn(
            'absolute flex h-2 w-2',
            dotPositionClasses[dotPosition]
          )}
        >
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              variant === 'success' ? 'bg-green-400' :
              variant === 'warning' ? 'bg-yellow-400' :
              variant === 'error' ? 'bg-red-400' :
              variant === 'info' ? 'bg-blue-400' :
              'bg-gray-400'
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              variant === 'success' ? 'bg-green-500' :
              variant === 'warning' ? 'bg-yellow-500' :
              variant === 'error' ? 'bg-red-500' :
              variant === 'info' ? 'bg-blue-500' :
              'bg-gray-500'
            )}
          />
        </span>
      </div>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border',
        variantClasses[variant],
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={cn(
          'mr-1',
          size === 'xs' ? 'w-3 h-3' :
          size === 'sm' ? 'w-3 h-3' :
          size === 'md' ? 'w-4 h-4' :
          'w-4 h-4'
        )}>
          {icon}
        </span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && (
        <span className={cn(
          'ml-1',
          size === 'xs' ? 'w-3 h-3' :
          size === 'sm' ? 'w-3 h-3' :
          size === 'md' ? 'w-4 h-4' :
          'w-4 h-4'
        )}>
          {icon}
        </span>
      )}
      
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className={cn(
            'ml-1 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            size === 'xs' ? 'w-3 h-3' :
            size === 'sm' ? 'w-3 h-3' :
            size === 'md' ? 'w-4 h-4' :
            'w-4 h-4'
          )}
          aria-label="Remove badge"
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};

// Badge Group Component for multiple badges
export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spacing between badges */
  spacing?: 'xs' | 'sm' | 'md' | 'lg';
  /** Layout direction */
  direction?: 'row' | 'column';
  /** Wrap badges to new lines */
  wrap?: boolean;
}

const spacingClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
};

export const BadgeGroup: React.FC<BadgeGroupProps> = ({
  children,
  spacing = 'sm',
  direction = 'row',
  wrap = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        wrap && direction === 'row' && 'flex-wrap',
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};