import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { ChevronDownIcon, ChevronRightIcon } from '@/components/media/icon';

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  collapsible?: boolean;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const panelVariants = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-transparent border-2 border-gray-300',
  filled: 'bg-gray-50 border border-gray-200'
};

const panelSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

export const Panel: React.FC<PanelProps> = ({
  title,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
  collapsible = true,
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  
  const isControlled = controlledCollapsed !== undefined;
  const isCollapsed = isControlled ? controlledCollapsed : internalCollapsed;

  const handleToggle = () => {
    if (!collapsible) return;
    
    const newCollapsed = !isCollapsed;
    
    if (!isControlled) {
      setInternalCollapsed(newCollapsed);
    }
    
    onCollapsedChange?.(newCollapsed);
  };

  const hasHeader = title || collapsible;

  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        panelVariants[variant],
        panelSizes[size],
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div
          className={cn(
            'px-4 py-3 border-b border-gray-200',
            collapsible && 'cursor-pointer hover:bg-gray-50',
            'flex items-center justify-between'
          )}
          onClick={handleToggle}
          role={collapsible ? 'button' : undefined}
          tabIndex={collapsible ? 0 : undefined}
          onKeyDown={(e) => {
            if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleToggle();
            }
          }}
          aria-expanded={collapsible ? !isCollapsed : undefined}
          aria-controls={collapsible ? 'panel-content' : undefined}
        >
          {title && (
            <div className="font-medium text-gray-900 flex-1">
              {title}
            </div>
          )}
          {collapsible && (
            <div className="ml-2 text-gray-400">
              {isCollapsed ? (
                <ChevronRightIcon size={16} />
              ) : (
                <ChevronDownIcon size={16} />
              )}
            </div>
          )}
        </div>
      )}
      
      <div
        id="panel-content"
        className={cn(
          'transition-all duration-200 ease-in-out',
          isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-none',
          !hasHeader && 'rounded-lg'
        )}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};