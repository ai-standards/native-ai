import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Menu components must be used within a Menu');
  }
  return context;
};

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether menu is open (controlled) */
  open?: boolean;
  /** Callback when menu open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Initial open state (uncontrolled) */
  defaultOpen?: boolean;
}

export interface MenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Custom trigger content */
  children: React.ReactNode;
}

export interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Placement relative to trigger */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** Offset from trigger */
  offset?: number;
  /** Whether to show arrow */
  showArrow?: boolean;
}

export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Whether item is disabled */
  disabled?: boolean;
  /** Item value for keyboard navigation */
  value?: string;
  /** Click handler */
  onSelect?: (value?: string) => void;
}

export interface MenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface MenuSubProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Submenu trigger content */
  trigger: React.ReactNode;
  /** Initial open state */
  defaultOpen?: boolean;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  onOpenChange,
  defaultOpen = false,
  children,
  className,
  ...props
}) => {
  const [isOpenState, setIsOpenState] = useState(defaultOpen);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const isOpen = open !== undefined ? open : isOpenState;
  const setIsOpen = (newOpen: boolean) => {
    if (open === undefined) {
      setIsOpenState(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !e.defaultPrevented) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, activeItem, setActiveItem }}>
      <div className={cn('relative inline-block', className)} {...props}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export const MenuTrigger: React.FC<MenuTriggerProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const { isOpen, setIsOpen } = useMenu();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-3 py-2',
        'border border-gray-300 rounded-md bg-white text-gray-700',
        'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
        'transition-colors duration-200',
        className
      )}
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-haspopup="true"
      {...props}
    >
      {children}
    </button>
  );
};

export const MenuContent: React.FC<MenuContentProps> = ({
  children,
  placement = 'bottom-start',
  offset = 4,
  showArrow = false,
  className,
  ...props
}) => {
  const { isOpen } = useMenu();
  const contentRef = useRef<HTMLDivElement>(null);

  const placementClasses = {
    'bottom-start': 'top-full left-0',
    'bottom-end': 'top-full right-0',
    'top-start': 'bottom-full left-0',
    'top-end': 'bottom-full right-0',
  };

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      className={cn(
        'absolute z-50 min-w-48 rounded-md border border-gray-200',
        'bg-white shadow-lg py-1',
        placementClasses[placement],
        className
      )}
      style={{ marginTop: placement.startsWith('bottom') ? offset : -offset }}
      role="menu"
      aria-orientation="vertical"
      {...props}
    >
      {children}
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  disabled = false,
  value,
  onSelect,
  className,
  onClick,
  ...props
}) => {
  const { setIsOpen, setActiveItem } = useMenu();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    onClick?.(e);
    onSelect?.(value);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (!disabled && value) {
      setActiveItem(value);
    }
  };

  return (
    <div
      className={cn(
        'px-3 py-2 text-sm text-gray-700 cursor-pointer',
        'hover:bg-gray-100 hover:text-gray-900',
        'focus:bg-gray-100 focus:text-gray-900 focus:outline-none',
        {
          'text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400': disabled,
        },
        className
      )}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
};

export const MenuSeparator: React.FC<MenuSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('h-px bg-gray-200 my-1', className)}
      role="separator"
      {...props}
    />
  );
};

export const MenuSub: React.FC<MenuSubProps> = ({
  trigger,
  children,
  defaultOpen = false,
  className,
  ...props
}) => {
  const [isSubOpen, setIsSubOpen] = useState(defaultOpen);

  return (
    <div className={cn('relative', className)} {...props}>
      <MenuItem
        onClick={() => setIsSubOpen(!isSubOpen)}
        className="flex items-center justify-between"
      >
        {trigger}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </MenuItem>
      
      {isSubOpen && (
        <div
          className="absolute left-full top-0 ml-1 min-w-48 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50"
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};