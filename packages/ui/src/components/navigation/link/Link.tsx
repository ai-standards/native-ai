import React from 'react';
import { cn } from '@/utils/cn';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual variant */
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'destructive';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the link is currently active */
  isActive?: boolean;
  /** Whether this is an external link */
  external?: boolean;
  /** Show external link icon */
  showExternalIcon?: boolean;
  /** Underline behavior */
  underline?: 'none' | 'hover' | 'always';
  /** Disabled state */
  disabled?: boolean;
}

const variantClasses = {
  default: 'text-blue-600 hover:text-blue-800',
  primary: 'text-blue-600 hover:text-blue-800',
  secondary: 'text-gray-600 hover:text-gray-800',
  muted: 'text-gray-500 hover:text-gray-700',
  destructive: 'text-red-600 hover:text-red-800',
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const underlineClasses = {
  none: 'no-underline',
  hover: 'no-underline hover:underline',
  always: 'underline',
};

const ExternalIcon = () => (
  <svg
    className="w-3 h-3 ml-1 inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  size = 'md',
  isActive = false,
  external = false,
  showExternalIcon = true,
  underline = 'hover',
  disabled = false,
  className,
  children,
  href,
  target,
  rel,
  onClick,
  ...props
}) => {
  // Automatically detect external links
  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')));
  
  // Set appropriate target and rel for external links
  const linkTarget = target || (isExternal ? '_blank' : undefined);
  const linkRel = rel || (isExternal && linkTarget === '_blank' ? 'noopener noreferrer' : undefined);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <a
      className={cn(
        'inline-flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        sizeClasses[size],
        underlineClasses[underline],
        {
          [variantClasses[variant]]: !disabled && !isActive,
          'text-blue-900 font-medium': isActive && !disabled,
          'text-gray-400 cursor-not-allowed': disabled,
          'cursor-default': isActive,
        },
        className
      )}
      href={disabled ? undefined : href}
      target={linkTarget}
      rel={linkRel}
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {isExternal && showExternalIcon && !disabled && <ExternalIcon />}
    </a>
  );
};