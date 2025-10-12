import React from 'react';
import { cn } from '@/utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
  /** Shape variant */
  variant?: 'rectangular' | 'circular' | 'text';
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none';
  /** Number of lines for text variant */
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1,
  className,
  ...props
}) => {
  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'wave':
        return 'animate-pulse'; // Using pulse as wave alternative
      case 'none':
        return '';
      default:
        return 'animate-pulse';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'rounded';
      case 'rectangular':
      default:
        return 'rounded';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'circular':
        return { width: '2.5rem', height: '2.5rem' };
      case 'text':
        return { width: '100%', height: '1rem' };
      case 'rectangular':
      default:
        return { width: '100%', height: '1.25rem' };
    }
  };

  const defaults = getDefaultDimensions();
  
  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'bg-gray-200',
              getVariantClasses(),
              getAnimationClass()
            )}
            style={{
              width: index === lines - 1 ? '75%' : (width || defaults.width),
              height: height || defaults.height,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-gray-200',
        getVariantClasses(),
        getAnimationClass(),
        className
      )}
      style={{
        width: width || defaults.width,
        height: height || defaults.height,
      }}
      {...props}
    />
  );
};