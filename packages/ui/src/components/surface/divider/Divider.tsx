import React from 'react';
import { cn } from '@/utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Visual style variant */
  variant?: 'solid' | 'dashed' | 'dotted' | 'double';
  /** Size/thickness of the divider */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'default' | 'muted' | 'accent' | 'destructive';
  /** Text label for the divider */
  label?: React.ReactNode;
  /** Position of the label */
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  size = 'md',
  color = 'default',
  label,
  labelPosition = 'center',
  className,
  ...props
}) => {
  const isHorizontal = orientation === 'horizontal';

  const dividerStyles = cn(
    'border-0',
    {
      // Orientation
      'w-full': isHorizontal,
      'h-full min-h-[1rem]': !isHorizontal,
      
      // Size
      'border-t': isHorizontal && size === 'sm',
      'border-t-2': isHorizontal && size === 'md',
      'border-t-4': isHorizontal && size === 'lg',
      'border-l': !isHorizontal && size === 'sm',
      'border-l-2': !isHorizontal && size === 'md',
      'border-l-4': !isHorizontal && size === 'lg',
      
      // Variant
      'border-solid': variant === 'solid',
      'border-dashed': variant === 'dashed',
      'border-dotted': variant === 'dotted',
      'border-double': variant === 'double',
      
      // Color
      'border-gray-300': color === 'default',
      'border-gray-200': color === 'muted',
      'border-blue-300': color === 'accent',
      'border-red-300': color === 'destructive',
    }
  );

  if (label) {
    return (
      <div
        className={cn(
          'flex items-center gap-3',
          isHorizontal ? 'w-full' : 'flex-col h-full',
          className
        )}
        role="separator"
        aria-label={typeof label === 'string' ? label : undefined}
        {...props}
      >
        {labelPosition === 'left' && (
          <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
        )}
        
        <div className={cn(dividerStyles, 'flex-1')} />
        
        {labelPosition === 'center' && (
          <span className="text-sm text-gray-600 whitespace-nowrap px-2">{label}</span>
        )}
        
        {labelPosition === 'center' && <div className={cn(dividerStyles, 'flex-1')} />}
        
        {labelPosition === 'right' && (
          <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(dividerStyles, className)}
      role="separator"
      {...props}
    />
  );
};