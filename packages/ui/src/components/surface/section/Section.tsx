import React from 'react';
import { cn } from '@/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullHeight?: boolean;
  children: React.ReactNode;
}

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const sectionVariants = {
  default: 'bg-white',
  primary: 'bg-blue-50',
  secondary: 'bg-gray-50',
  accent: 'bg-purple-50',
  muted: 'bg-gray-100'
};

const sectionSpacing = {
  none: 'py-0',
  sm: 'py-4',
  md: 'py-8',
  lg: 'py-12',
  xl: 'py-16'
};

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  spacing = 'md',
  fullHeight = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        // Base styles
        'w-full',
        // Variant styles
        sectionVariants[variant],
        // Spacing styles
        sectionSpacing[spacing],
        // Full height
        fullHeight && 'min-h-screen',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mb-6 border-b border-gray-200 pb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SectionContent: React.FC<SectionContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('flex-1', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const SectionFooter: React.FC<SectionFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mt-6 border-t border-gray-200 pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};