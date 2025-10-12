import React, { useEffect, createContext, useContext } from 'react';
import { cn } from '@/utils/cn';
import { CloseIcon } from '@/components/media/icon';

// Drawer Context
interface DrawerContextType {
  isOpen: boolean;
  onClose: () => void;
  side: 'left' | 'right' | 'top' | 'bottom';
}

const DrawerContext = createContext<DrawerContextType | null>(null);

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a Drawer component');
  }
  return context;
};

// Main Drawer Component
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const drawerSides = {
  left: {
    container: 'inset-y-0 left-0',
    translate: 'translate-x-0',
    translateClosed: '-translate-x-full',
    width: true
  },
  right: {
    container: 'inset-y-0 right-0',
    translate: 'translate-x-0',
    translateClosed: 'translate-x-full',
    width: true
  },
  top: {
    container: 'inset-x-0 top-0',
    translate: 'translate-y-0',
    translateClosed: '-translate-y-full',
    width: false
  },
  bottom: {
    container: 'inset-x-0 bottom-0',
    translate: 'translate-y-0',
    translateClosed: 'translate-y-full',
    width: false
  }
};

const drawerSizes = {
  sm: { width: 'w-64', height: 'h-48' },
  md: { width: 'w-80', height: 'h-64' },
  lg: { width: 'w-96', height: 'h-80' },
  xl: { width: 'w-[28rem]', height: 'h-96' }
};

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  side = 'right',
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className
}) => {
  const sideConfig = drawerSides[side];
  const sizeConfig = drawerSizes[size];

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <DrawerContext.Provider value={{ isOpen, onClose, side }}>
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
        
        {/* Drawer */}
        <div
          className={cn(
            'fixed bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
            sideConfig.container,
            sideConfig.width ? sizeConfig.width : sizeConfig.height,
            sideConfig.width ? 'h-full' : 'w-full',
            isOpen ? sideConfig.translate : sideConfig.translateClosed,
            className
          )}
          role="dialog"
          aria-modal="true"
        >
          {showCloseButton && (
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <CloseIcon size={20} className="text-gray-400" />
            </button>
          )}
          
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </DrawerContext.Provider>
  );
};

// Drawer Header Component
export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 border-b border-gray-200 bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Drawer Content Component
export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DrawerContent: React.FC<DrawerContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 flex-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Drawer Footer Component
export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-gray-200 bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};