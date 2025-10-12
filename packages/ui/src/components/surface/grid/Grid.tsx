import React from 'react';
import { cn } from '@/utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto' | 'subgrid';
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'subgrid';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  children: React.ReactNode;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'full' | 'auto';
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 'full' | 'auto';
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto';
  colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto';
  rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto';
  rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto';
  children: React.ReactNode;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
  auto: 'grid-cols-auto',
  subgrid: 'grid-cols-subgrid'
};

const gridRows = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  auto: 'grid-rows-auto',
  subgrid: 'grid-rows-subgrid'
};

const gridGap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
};

const gridAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
};

const gridJustify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

const colSpanClasses = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  12: 'col-span-12',
  full: 'col-span-full',
  auto: 'col-auto'
};

const rowSpanClasses = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
  full: 'row-span-full',
  auto: 'row-auto'
};

const colStartClasses = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
  8: 'col-start-8',
  9: 'col-start-9',
  10: 'col-start-10',
  11: 'col-start-11',
  12: 'col-start-12',
  13: 'col-start-13',
  auto: 'col-start-auto'
};

const colEndClasses = {
  1: 'col-end-1',
  2: 'col-end-2',
  3: 'col-end-3',
  4: 'col-end-4',
  5: 'col-end-5',
  6: 'col-end-6',
  7: 'col-end-7',
  8: 'col-end-8',
  9: 'col-end-9',
  10: 'col-end-10',
  11: 'col-end-11',
  12: 'col-end-12',
  13: 'col-end-13',
  auto: 'col-end-auto'
};

const rowStartClasses = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
  5: 'row-start-5',
  6: 'row-start-6',
  7: 'row-start-7',
  auto: 'row-start-auto'
};

const rowEndClasses = {
  1: 'row-end-1',
  2: 'row-end-2',
  3: 'row-end-3',
  4: 'row-end-4',
  5: 'row-end-5',
  6: 'row-end-6',
  7: 'row-end-7',
  auto: 'row-end-auto'
};

export const Grid: React.FC<GridProps> = ({
  cols = 'auto',
  rows,
  gap = 'md',
  responsive = false,
  align,
  justify,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base grid styles
        'grid',
        // Column styles
        cols && gridCols[cols],
        // Row styles
        rows && gridRows[rows],
        // Gap styles
        gridGap[gap],
        // Responsive behavior
        responsive && 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        // Alignment
        align && gridAlign[align],
        justify && gridJustify[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const GridItem: React.FC<GridItemProps> = ({
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Column span
        colSpan && colSpanClasses[colSpan],
        // Row span
        rowSpan && rowSpanClasses[rowSpan],
        // Column positioning
        colStart && colStartClasses[colStart],
        colEnd && colEndClasses[colEnd],
        // Row positioning
        rowStart && rowStartClasses[rowStart],
        rowEnd && rowEndClasses[rowEnd],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};