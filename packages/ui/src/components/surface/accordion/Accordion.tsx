import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/utils/cn';
import { ChevronDownIcon, ChevronRightIcon } from '@/components/media/icon';

// Accordion Context
interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  multiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion component');
  }
  return context;
};

// Main Accordion Component
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  variant?: 'default' | 'outlined' | 'separated';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = true,
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const multiple = type === 'multiple';
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const isControlled = controlledValue !== undefined;
  const openItems = isControlled
    ? Array.isArray(controlledValue) ? controlledValue : [controlledValue]
    : internalValue;

  const toggleItem = (itemValue: string) => {
    let newValue: string[];

    if (multiple) {
      newValue = openItems.includes(itemValue)
        ? openItems.filter(v => v !== itemValue)
        : [...openItems, itemValue];
    } else {
      newValue = openItems.includes(itemValue) && collapsible ? [] : [itemValue];
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onValueChange) {
      const returnValue = multiple ? newValue : newValue[0] || '';
      onValueChange(returnValue);
    }
  };

  const accordionVariants = {
    default: 'border border-gray-200 rounded-lg overflow-hidden',
    outlined: 'border-2 border-gray-300 rounded-lg overflow-hidden',
    separated: 'space-y-2'
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple }}>
      <div
        className={cn(
          accordionVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Accordion Item Component
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  disabled = false,
  className,
  children,
  ...props
}) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        'accordion-item',
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
      data-disabled={disabled}
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
};

// Accordion Trigger Component
export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const { toggleItem } = useAccordion();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.closest('[data-value]');
    const value = item?.getAttribute('data-value');
    if (value) {
      toggleItem(value);
    }
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between py-3 px-4 text-left',
        'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset',
        'font-medium text-gray-900 transition-colors',
        'border-b border-gray-200 last:border-b-0',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronDownIcon
        size={16}
        className="text-gray-400 transition-transform duration-200 accordion-chevron"
      />
    </button>
  );
};

// Accordion Content Component
export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200 ease-in-out',
        'accordion-content',
        className
      )}
      {...props}
    >
      <div className="p-4 pt-0">
        {children}
      </div>
    </div>
  );
};