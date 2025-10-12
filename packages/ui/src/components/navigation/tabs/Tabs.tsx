import React, { createContext, useContext, useState, useCallback } from 'react';
import { cn } from '@/utils/cn';

// Context for managing tab state
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  variant: 'default' | 'pills' | 'underline';
  size: 'sm' | 'md' | 'lg';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within a TabGroup');
  }
  return context;
};

// TabGroup Component
export interface TabGroupProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({
  children,
  defaultValue = '',
  value,
  onValueChange,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultValue);
  
  const activeTab = value !== undefined ? value : internalActiveTab;
  
  const setActiveTab = useCallback((tab: string) => {
    if (value === undefined) {
      setInternalActiveTab(tab);
    }
    onValueChange?.(tab);
  }, [value, onValueChange]);

  const contextValue: TabsContextType = {
    activeTab,
    setActiveTab,
    variant,
    size,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn('w-full h-full flex flex-col', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList Component
export interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  const { variant } = useTabsContext();

  const variantStyles = {
    default: 'border-b border-gray-200',
    pills: 'bg-gray-100 p-1 rounded-lg',
    underline: 'border-b border-gray-200',
  };

  return (
    <div
      className={cn(
        'flex flex-shrink-0',
        variantStyles[variant],
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  );
};

// Tab Component
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  value,
  children,
  disabled = false,
  className,
  ...props
}) => {
  const { activeTab, setActiveTab, variant, size } = useTabsContext();
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    default: {
      base: 'border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300',
      active: 'text-blue-600 border-blue-600',
      inactive: 'text-gray-500',
    },
    pills: {
      base: 'rounded-md hover:bg-white hover:shadow-sm',
      active: 'bg-white shadow-sm text-gray-900',
      inactive: 'text-gray-600',
    },
    underline: {
      base: 'border-b-2 border-transparent hover:border-gray-300',
      active: 'border-blue-500 text-blue-600',
      inactive: 'text-gray-700',
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        baseStyles,
        sizeStyles[size],
        currentVariant.base,
        isActive ? currentVariant.active : currentVariant.inactive,
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// TabPanel Component
export interface TabPanelProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  children,
  className,
}) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={cn('mt-4 flex-1 overflow-auto focus:outline-none', className)}
    >
      {children}
    </div>
  );
};

// Export all components and types
export type { TabsContextType };