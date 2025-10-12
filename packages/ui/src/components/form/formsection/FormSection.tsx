import React from 'react';

export interface FormSectionProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Additional CSS class names */
  className?: string;
  /** Section content */
  children: React.ReactNode;
  /** Show divider above section */
  showDivider?: boolean;
  /** Section size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether section is collapsible */
  collapsible?: boolean;
  /** Initial collapsed state */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state */
  collapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
}

export const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  (
    {
      title,
      description,
      className = '',
      children,
      showDivider = false,
      size = 'md',
      collapsible = false,
      defaultCollapsed = false,
      collapsed: controlledCollapsed,
      onCollapsedChange,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed);
    
    const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;
    
    const handleToggle = React.useCallback(() => {
      const newCollapsed = !isCollapsed;
      if (controlledCollapsed === undefined) {
        setInternalCollapsed(newCollapsed);
      }
      onCollapsedChange?.(newCollapsed);
    }, [isCollapsed, controlledCollapsed, onCollapsedChange]);

    const sizeClasses = {
      sm: {
        title: 'text-base',
        description: 'text-sm',
        spacing: 'space-y-3',
        padding: 'py-3',
      },
      md: {
        title: 'text-lg',
        description: 'text-base',
        spacing: 'space-y-4',
        padding: 'py-4',
      },
      lg: {
        title: 'text-xl',
        description: 'text-lg',
        spacing: 'space-y-6',
        padding: 'py-6',
      },
    };

    const sectionClasses = `
      ${sizeClasses[size].spacing}
      ${className}
    `;

    const headerClasses = `
      ${title || description ? sizeClasses[size].padding : ''}
      ${showDivider ? 'border-t border-gray-200 dark:border-gray-700' : ''}
    `;

    return (
      <div ref={ref} className={sectionClasses} {...props}>
        {showDivider && !title && !description && (
          <div className="border-t border-gray-200 dark:border-gray-700" />
        )}
        
        {(title || description) && (
          <div className={headerClasses}>
            {title && (
              <div className="flex items-center justify-between">
                <h3 className={`font-semibold text-gray-900 dark:text-gray-100 ${sizeClasses[size].title}`}>
                  {title}
                </h3>
                {collapsible && (
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="ml-4 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    aria-expanded={!isCollapsed}
                    aria-label={isCollapsed ? `Expand ${title} section` : `Collapse ${title} section`}
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            {description && (
              <p className={`text-gray-600 dark:text-gray-400 ${sizeClasses[size].description} ${title ? 'mt-1' : ''}`}>
                {description}
              </p>
            )}
          </div>
        )}
        
        {collapsible ? (
          <div style={{ display: isCollapsed ? 'none' : 'block' }}>
            {children}
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    );
  }
);

FormSection.displayName = 'FormSection';