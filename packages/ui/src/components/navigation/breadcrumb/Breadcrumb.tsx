import React from 'react';
import { cn } from '@/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Maximum number of items to show before truncating */
  maxItems?: number;
  /** Position of ellipsis when truncated */
  itemsBeforeCollapse?: number;
  /** Position of ellipsis when truncated */
  itemsAfterCollapse?: number;
}

const defaultSeparator = (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = defaultSeparator,
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  className,
  ...props
}) => {
  const shouldTruncate = maxItems && items.length > maxItems;
  
  const renderItems = () => {
    if (!shouldTruncate) {
      return items;
    }

    const startItems = items.slice(0, itemsBeforeCollapse);
    const endItems = items.slice(-itemsAfterCollapse);
    
    return [
      ...startItems,
      { label: '...', isEllipsis: true } as BreadcrumbItem & { isEllipsis: true },
      ...endItems,
    ];
  };

  const displayItems = renderItems();

  return (
    <nav
      className={cn('flex items-center space-x-2', className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = 'isEllipsis' in item && item.isEllipsis;
          
          return (
            <li key={index} className="flex items-center space-x-2">
              {isEllipsis ? (
                <span className="text-gray-500 select-none">...</span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className={cn(
                    'text-sm hover:text-gray-900 transition-colors',
                    isLast || item.isActive
                      ? 'text-gray-900 font-medium cursor-default'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                  aria-current={isLast || item.isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className={cn(
                    'text-sm hover:text-gray-900 transition-colors',
                    isLast || item.isActive
                      ? 'text-gray-900 font-medium cursor-default'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                  aria-current={isLast || item.isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              )}
              
              {!isLast && (
                <span className="flex-shrink-0" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};