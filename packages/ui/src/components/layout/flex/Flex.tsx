import React from 'react';
import { cn } from '@/utils/cn';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  grow?: boolean;
  shrink?: boolean;
  inline?: boolean;
  children: React.ReactNode;
}

const flexDirections = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse'
};

const flexWrap = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse'
};

const justifyContent = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

const alignItems = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
};

const flexGaps = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12'
};

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  wrap = 'nowrap',
  justify = 'start',
  align = 'stretch',
  gap = 'none',
  grow = false,
  shrink = true,
  inline = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base flex styles
        inline ? 'inline-flex' : 'flex',
        // Direction
        flexDirections[direction],
        // Wrap
        flexWrap[wrap],
        // Justify content
        justifyContent[justify],
        // Align items
        alignItems[align],
        // Gap
        flexGaps[gap],
        // Grow and shrink
        grow && 'flex-grow',
        shrink && 'flex-shrink',
        !shrink && 'flex-shrink-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};