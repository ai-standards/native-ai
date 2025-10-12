import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export interface NavGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group heading */
  title?: string;
  /** Group content */
  children: React.ReactNode;
  /** Whether group is collapsible */
  collapsible?: boolean;
  /** Initial collapsed state */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state */
  collapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Optional icon for the group */
  icon?: React.ReactNode;
  /** Optional action button */
  action?: React.ReactNode;
  /** Visual variant */
  variant?: 'default' | 'contained' | 'minimal';
  /** Spacing between items */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const spacingClasses = {
  none: 'space-y-0',
  sm: 'space-y-1',
  md: 'space-y-2',
  lg: 'space-y-4',
};

const variantClasses = {
  default: 'border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0',
  contained: 'border border-gray-200 rounded-lg p-4 bg-gray-50',
  minimal: 'mb-4 last:mb-0',
};

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    className={cn(
      'w-4 h-4 transition-transform duration-200',
      isOpen ? 'rotate-90' : 'rotate-0'
    )}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const NavGroup: React.FC<NavGroupProps> = ({
  title,
  children,
  collapsible = false,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
  icon,
  action,
  variant = 'default',
  spacing = 'sm',
  className,
  ...props
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  
  const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;
  
  const handleToggle = () => {
    const newCollapsed = !isCollapsed;
    
    if (controlledCollapsed === undefined) {
      setInternalCollapsed(newCollapsed);
    }
    
    onCollapsedChange?.(newCollapsed);
  };

  const hasHeader = title || icon || action || collapsible;

  return (
    <div
      className={cn(
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center min-w-0">
            {collapsible ? (
              <button
                className="flex items-center min-w-0 text-left p-0 border-0 bg-transparent cursor-pointer hover:text-gray-600 focus:outline-none focus:text-gray-600"
                onClick={handleToggle}
                aria-expanded={!isCollapsed}
              >
                <ChevronIcon isOpen={!isCollapsed} />
                {icon && (
                  <div className="flex-shrink-0 mx-2 text-gray-500">
                    {icon}
                  </div>
                )}
                {title && (
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {title}
                  </h3>
                )}
              </button>
            ) : (
              <>
                {icon && (
                  <div className="flex-shrink-0 mr-2 text-gray-500">
                    {icon}
                  </div>
                )}
                {title && (
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {title}
                  </h3>
                )}
              </>
            )}
          </div>
          
          {action && (
            <div className="flex-shrink-0 ml-2">
              {action}
            </div>
          )}
        </div>
      )}
      
      {(!collapsible || !isCollapsed) && (
        <div
          className={cn(
            'transition-all duration-200',
            spacingClasses[spacing],
            hasHeader && variant !== 'contained' ? 'ml-0' : ''
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};