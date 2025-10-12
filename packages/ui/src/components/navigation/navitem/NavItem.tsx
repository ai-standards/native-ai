import React from 'react';
import { cn } from '@/utils/cn';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Item content */
  children: React.ReactNode;
  /** Whether item is active */
  isActive?: boolean;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Badge or counter content */
  badge?: React.ReactNode;
  /** Item href for link behavior */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'default' | 'ghost' | 'subtle';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show hover effects */
  hoverable?: boolean;
}

const variantClasses = {
  default: {
    base: 'bg-white border border-gray-200 hover:bg-gray-50',
    active: 'bg-blue-50 border-blue-200 text-blue-700',
    disabled: 'bg-gray-50 text-gray-400 border-gray-200',
  },
  ghost: {
    base: 'hover:bg-gray-100',
    active: 'bg-blue-100 text-blue-700',
    disabled: 'text-gray-400',
  },
  subtle: {
    base: 'hover:bg-gray-50',
    active: 'bg-gray-100 text-gray-900 font-medium',
    disabled: 'text-gray-400',
  },
};

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const NavItem: React.FC<NavItemProps> = ({
  children,
  isActive = false,
  disabled = false,
  icon,
  badge,
  href,
  onClick,
  variant = 'default',
  size = 'md',
  hoverable = true,
  className,
  ...props
}) => {
  const classes = variantClasses[variant];
  
  const baseClasses = cn(
    'flex items-center justify-between rounded-md transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
    sizeClasses[size],
    {
      [classes.base]: !isActive && !disabled && hoverable,
      [classes.active]: isActive && !disabled,
      [classes.disabled]: disabled,
      'cursor-pointer': !disabled && (href || onClick),
      'cursor-not-allowed': disabled,
      'hover:bg-transparent': disabled,
    },
    className
  );

  const content = (
    <>
      <div className="flex items-center min-w-0">
        {icon && (
          <div className={cn(
            'flex-shrink-0 mr-2',
            {
              'text-gray-400': disabled,
              'text-blue-600': isActive && !disabled,
            }
          )}>
            {icon}
          </div>
        )}
        <span className="truncate">{children}</span>
      </div>
      
      {badge && (
        <div className="flex-shrink-0 ml-2">
          {badge}
        </div>
      )}
    </>
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  if (href && !disabled) {
    return (
      <a
        className={baseClasses}
        href={href}
        onClick={handleClick}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={baseClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={!disabled && onClick ? 0 : undefined}
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {content}
    </div>
  );
};