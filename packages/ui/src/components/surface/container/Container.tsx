import React from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  children: React.ReactNode;
}

const containerSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full'
};

const containerPadding = {
  none: 'p-0',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8'
};

export const Container: React.FC<ContainerProps> = ({
  size = 'full',
  padding = 'md',
  center = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base container styles
        'w-full',
        // Size styles
        containerSizes[size],
        // Padding styles
        containerPadding[padding],
        // Center alignment
        center && 'mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};