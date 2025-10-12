import React from 'react';
import { cn } from '@/utils/cn';

// List Component
export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  /** List type */
  variant?: 'unordered' | 'ordered';
  /** List marker style */
  marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-alpha' | 'upper-alpha' | 'none';
  /** Spacing between items */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /** Nested level (affects indentation) */
  nested?: boolean;
}

export const List: React.FC<ListProps> = ({
  variant = 'unordered',
  marker,
  spacing = 'sm',
  nested = false,
  className,
  children,
  ...props
}) => {
  const Component = variant === 'ordered' ? 'ol' : 'ul';
  
  // Default markers based on variant
  const defaultMarker = variant === 'ordered' ? 'decimal' : 'disc';
  const listMarker = marker || defaultMarker;

  const listStyles = cn(
    'list-inside',
    {
      // Marker styles
      'list-disc': listMarker === 'disc',
      'list-decimal': listMarker === 'decimal',
      'list-none': listMarker === 'none',
      
      // Spacing
      'space-y-0': spacing === 'none',
      'space-y-1': spacing === 'sm',
      'space-y-2': spacing === 'md',
      'space-y-3': spacing === 'lg',
      
      // Nested indentation
      'ml-6': nested,
    },
    className
  );

  // Custom CSS for advanced markers
  const customMarkerStyle = React.useMemo(() => {
    const markerMap = {
      'circle': { listStyleType: 'circle' },
      'square': { listStyleType: 'square' },
      'decimal-leading-zero': { listStyleType: 'decimal-leading-zero' },
      'lower-roman': { listStyleType: 'lower-roman' },
      'upper-roman': { listStyleType: 'upper-roman' },
      'lower-alpha': { listStyleType: 'lower-alpha' },
      'upper-alpha': { listStyleType: 'upper-alpha' },
    } as const;
    
    return markerMap[listMarker as keyof typeof markerMap] || {};
  }, [listMarker]);

  return (
    <Component 
      className={listStyles} 
      style={customMarkerStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

// List Item Component
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Custom marker or icon */
  marker?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  marker,
  className,
  children,
  ...props
}) => {
  const itemStyles = cn(
    'leading-relaxed',
    {
      'flex items-start gap-2 list-none': marker,
    },
    className
  );

  return (
    <li className={itemStyles} {...props}>
      {marker && (
        <span className="flex-shrink-0 mt-0.5">
          {marker}
        </span>
      )}
      <span className={marker ? 'flex-1' : undefined}>
        {children}
      </span>
    </li>
  );
};