import React from 'react';
import { cn } from '@/utils/cn';

// Table Root Component
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Table variant */
  variant?: 'default' | 'bordered' | 'striped';
  /** Table size */
  size?: 'sm' | 'md' | 'lg';
  /** Enable hover effect on rows */
  hoverable?: boolean;
}

export const Table: React.FC<TableProps> = ({
  variant = 'default',
  size = 'md',
  hoverable = false,
  className,
  children,
  ...props
}) => {
  const tableStyles = cn(
    'w-full text-left',
    {
      // Variant
      'border-collapse': variant === 'bordered',
      
      // Size affects child components via CSS variables
      '[--cell-padding:0.5rem]': size === 'sm',
      '[--cell-padding:0.75rem]': size === 'md',
      '[--cell-padding:1rem]': size === 'lg',
    },
    className
  );

  return (
    <div className="overflow-x-auto">
      <table 
        className={tableStyles} 
        data-variant={variant}
        data-hoverable={hoverable}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

// Table Header Component
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <thead 
      className={cn('bg-gray-50', className)} 
      {...props}
    >
      {children}
    </thead>
  );
};

// Table Body Component
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody: React.FC<TableBodyProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <tbody 
      className={cn('divide-y divide-gray-200', className)} 
      {...props}
    >
      {children}
    </tbody>
  );
};

// Table Row Component
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: React.FC<TableRowProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <tr 
      className={cn(
        'transition-colors',
        'data-[hoverable=true]:hover:bg-gray-50',
        className
      )} 
      {...props}
    >
      {children}
    </tr>
  );
};

// Table Header Cell Component
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Enable sorting indicator */
  sortable?: boolean;
  /** Current sort direction */
  sortDirection?: 'asc' | 'desc' | null;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  sortable = false,
  sortDirection = null,
  className,
  children,
  ...props
}) => {
  const cellStyles = cn(
    'px-[var(--cell-padding,0.75rem)] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
    {
      'cursor-pointer select-none hover:text-gray-700': sortable,
    },
    className
  );

  return (
    <th className={cellStyles} {...props}>
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <span className="text-gray-400">
            {sortDirection === 'asc' ? '↑' : 
             sortDirection === 'desc' ? '↓' : 
             '↕'}
          </span>
        )}
      </div>
    </th>
  );
};

// Table Cell Component
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell: React.FC<TableCellProps> = ({
  className,
  children,
  ...props
}) => {
  const cellStyles = cn(
    'px-[var(--cell-padding,0.75rem)] py-4 text-sm text-gray-900',
    className
  );

  return (
    <td className={cellStyles} {...props}>
      {children}
    </td>
  );
};