import React from 'react';
import { cn } from '@/utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value */
  value?: number;
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Show percentage text */
  showValue?: boolean;
  /** Indeterminate mode (animated without specific progress) */
  indeterminate?: boolean;
  /** Progress label for accessibility */
  label?: string;
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses = {
  primary: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  error: 'bg-red-600',
};

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  min = 0,
  size = 'md',
  variant = 'primary',
  showValue = false,
  indeterminate = false,
  label,
  className,
  ...props
}) => {
  // Calculate percentage
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);
  
  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Label and value */}
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showValue && !indeterminate && (
            <span className="text-sm text-gray-600">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      {/* Progress bar */}
      <div
        className={cn(
          'w-full bg-gray-200 rounded-full overflow-hidden',
          sizeClasses[size]
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300 ease-out',
            variantClasses[variant],
            indeterminate && 'animate-pulse'
          )}
          style={{
            width: indeterminate ? '100%' : `${percentage}%`,
          }}
        />
      </div>
      

    </div>
  );
};