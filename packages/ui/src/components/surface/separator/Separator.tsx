import React from 'react';
import { cn } from '@/utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the separator */
  orientation?: 'horizontal' | 'vertical';
  /** Semantic level for content hierarchy */
  level?: 1 | 2 | 3 | 4;
  /** Spacing around the separator */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to include decorative elements */
  decorative?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  level = 2,
  spacing = 'md',
  decorative = false,
  className,
  children,
  ...props
}) => {
  const isHorizontal = orientation === 'horizontal';

  const spacingStyles = {
    none: '',
    sm: isHorizontal ? 'my-2' : 'mx-2',
    md: isHorizontal ? 'my-4' : 'mx-4', 
    lg: isHorizontal ? 'my-6' : 'mx-6',
    xl: isHorizontal ? 'my-8' : 'mx-8',
  };

  const levelStyles = {
    1: 'border-gray-400',
    2: 'border-gray-300', 
    3: 'border-gray-200',
    4: 'border-gray-100',
  };

  const separatorElement = (
    <div
      className={cn(
        'border-0',
        levelStyles[level],
        {
          // Orientation
          'w-full border-t': isHorizontal,
          'h-full min-h-[2rem] border-l': !isHorizontal,
        }
      )}
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation={orientation}
    />
  );

  if (children) {
    return (
      <div
        className={cn(
          'flex items-center',
          spacingStyles[spacing],
          {
            'w-full': isHorizontal,
            'flex-col h-full': !isHorizontal,
          },
          className
        )}
        {...props}
      >
        {isHorizontal ? (
          <>
            <div className="flex-1 border-t border-gray-300" />
            <div className="px-4 text-sm text-gray-600 font-medium">
              {children}
            </div>
            <div className="flex-1 border-t border-gray-300" />
          </>
        ) : (
          <>
            <div className="flex-1 border-l border-gray-300" />
            <div className="py-4 text-sm text-gray-600 font-medium writing-mode-vertical-rl">
              {children}
            </div>
            <div className="flex-1 border-l border-gray-300" />
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        spacingStyles[spacing],
        {
          'w-full': isHorizontal,
          'h-full': !isHorizontal,
        },
        className
      )}
      {...props}
    >
      {separatorElement}
    </div>
  );
};