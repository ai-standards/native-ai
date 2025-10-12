import React, { useEffect, createContext, useContext } from 'react';
import { cn } from '@/utils/cn';
import { CloseIcon } from '@/components/media/icon';

// Modal Context
interface ModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a Modal component');
  }
  return context;
};

// Main Modal Component
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  position?: 'center' | 'top';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const modalSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full m-4'
};

const modalPositions = {
  center: 'items-center justify-center',
  top: 'items-start justify-center pt-16'
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'md',
  position = 'center',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className
}) => {
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const modal = document.querySelector('[role="dialog"]') as HTMLElement;
      if (modal) {
        modal.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
        
        {/* Modal Container */}
        <div
          className={cn(
            'fixed inset-0 flex',
            modalPositions[position]
          )}
          onClick={handleOverlayClick}
        >
          <div
            className={cn(
              'relative bg-white rounded-lg shadow-xl transform transition-all',
              'w-full mx-4',
              modalSizes[size],
              className
            )}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {showCloseButton && (
              <button
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={onClose}
                aria-label="Close modal"
              >
                <CloseIcon size={20} className="text-gray-400" />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
};

// Modal Header Component
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 border-b border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Modal Content Component
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 flex-1 overflow-y-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Modal Footer Component
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};