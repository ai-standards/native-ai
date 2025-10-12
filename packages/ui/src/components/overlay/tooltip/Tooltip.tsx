import React, { useState, useRef, createContext, useContext } from 'react';
import { cn } from '@/utils/cn';

// Tooltip Context
interface TooltipContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a Tooltip component');
  }
  return context;
};

// Main Tooltip Component
export interface TooltipProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  delayDuration = 500,
  children
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const setIsOpen = (open: boolean) => {
    if (!isControlled) {
      setInternalOpen(open);
    }
    onOpenChange?.(open);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  return (
    <TooltipContext.Provider value={{ isOpen, setIsOpen }}>
      <div 
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

// Tooltip Trigger Component
export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  children: React.ReactNode;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  asChild = false,
  children,
  ...props
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      'aria-describedby': 'tooltip-content'
    });
  }

  return (
    <span
      {...props}
      aria-describedby="tooltip-content"
    >
      {children}
    </span>
  );
};

// Tooltip Content Component
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  children: React.ReactNode;
}

const sideClasses = {
  top: 'bottom-full mb-2',
  bottom: 'top-full mt-2',
  left: 'right-full mr-2',
  right: 'left-full ml-2'
};

const alignClasses = {
  start: {
    top: 'left-0',
    bottom: 'left-0',
    left: 'top-0',
    right: 'top-0'
  },
  center: {
    top: 'left-1/2 transform -translate-x-1/2',
    bottom: 'left-1/2 transform -translate-x-1/2',
    left: 'top-1/2 transform -translate-y-1/2',
    right: 'top-1/2 transform -translate-y-1/2'
  },
  end: {
    top: 'right-0',
    bottom: 'right-0',
    left: 'bottom-0',
    right: 'bottom-0'
  }
};

export const TooltipContent: React.FC<TooltipContentProps> = ({
  side = 'top',
  align = 'center',
  sideOffset = 0,
  className,
  children,
  style,
  ...props
}) => {
  const { isOpen } = useTooltip();

  if (!isOpen) return null;

  const offset = sideOffset ? { 
    top: { marginBottom: `${sideOffset}px` },
    bottom: { marginTop: `${sideOffset}px` },
    left: { marginRight: `${sideOffset}px` },
    right: { marginLeft: `${sideOffset}px` }
  }[side] : {};

  return (
    <div
      id="tooltip-content"
      role="tooltip"
      className={cn(
        'absolute z-50 px-3 py-1 text-sm text-white bg-gray-900 rounded shadow-lg',
        'animate-in fade-in-0 zoom-in-95 duration-200',
        'max-w-xs break-words',
        sideClasses[side],
        alignClasses[align][side],
        className
      )}
      style={{...offset, ...style}}
      {...props}
    >
      {children}
      
      {/* Arrow */}
      {side === 'top' && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
      {side === 'bottom' && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900" />
        </div>
      )}
      {side === 'left' && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900" />
        </div>
      )}
      {side === 'right' && (
        <div className="absolute right-full top-1/2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900" />
        </div>
      )}
    </div>
  );
};