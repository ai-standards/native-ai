import React from 'react';
import { cn } from '@/utils/cn';

// Text Component
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Text variant */
  variant?: 'body' | 'caption' | 'label' | 'small' | 'large';
  /** Text weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: 'default' | 'muted' | 'subtle' | 'accent' | 'success' | 'warning' | 'error';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'label';
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  weight = 'normal',
  color = 'default',
  align = 'left',
  as = 'p',
  className,
  children,
  ...props
}) => {
  const Component = as;

  const baseStyles = cn(
    'leading-relaxed',
    {
      // Variants
      'text-base': variant === 'body',
      'text-xs': variant === 'caption' || variant === 'small',
      'text-sm font-medium': variant === 'label',
      'text-lg': variant === 'large',
      
      // Weight
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-semibold': weight === 'semibold',
      'font-bold': weight === 'bold',
      
      // Color
      'text-gray-900': color === 'default',
      'text-gray-600': color === 'muted',
      'text-gray-500': color === 'subtle',
      'text-blue-600': color === 'accent',
      'text-green-600': color === 'success',
      'text-yellow-600': color === 'warning',
      'text-red-600': color === 'error',
      
      // Alignment
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
      'text-justify': align === 'justify',
    },
    className
  );

  return (
    <Component className={baseStyles} {...props}>
      {children}
    </Component>
  );
};

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual size (can differ from semantic level) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Text weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: 'default' | 'muted' | 'accent';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Margin bottom */
  mb?: 'none' | 'sm' | 'md' | 'lg';
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  size,
  weight = 'semibold',
  color = 'default',
  align = 'left',
  mb = 'md',
  className,
  children,
  ...props
}) => {
  
  // Auto-size based on level if no size specified
  const getSize = () => {
    if (size) return size;
    const sizeMap = { 1: '3xl', 2: '2xl', 3: 'xl', 4: 'lg', 5: 'md', 6: 'sm' } as const;
    return sizeMap[level];
  };

  const headingSize = getSize();

  const baseStyles = cn(
    'font-semibold leading-tight tracking-tight',
    {
      // Size
      'text-sm': headingSize === 'xs',
      'text-base': headingSize === 'sm',
      'text-lg': headingSize === 'md',
      'text-xl': headingSize === 'lg',
      'text-2xl': headingSize === 'xl',
      'text-3xl': headingSize === '2xl',
      'text-4xl': headingSize === '3xl',
      'text-5xl': headingSize === '4xl',
      
      // Weight
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-semibold': weight === 'semibold',
      'font-bold': weight === 'bold',
      
      // Color
      'text-gray-900': color === 'default',
      'text-gray-600': color === 'muted',
      'text-blue-600': color === 'accent',
      
      // Alignment
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
      
      // Margin bottom
      'mb-0': mb === 'none',
      'mb-2': mb === 'sm',
      'mb-4': mb === 'md',
      'mb-6': mb === 'lg',
    },
    className
  );

  // Render the appropriate heading element
  if (level === 1) {
    return <h1 className={baseStyles} {...props}>{children}</h1>;
  } else if (level === 2) {
    return <h2 className={baseStyles} {...props}>{children}</h2>;
  } else if (level === 3) {
    return <h3 className={baseStyles} {...props}>{children}</h3>;
  } else if (level === 4) {
    return <h4 className={baseStyles} {...props}>{children}</h4>;
  } else if (level === 5) {
    return <h5 className={baseStyles} {...props}>{children}</h5>;
  } else {
    return <h6 className={baseStyles} {...props}>{children}</h6>;
  }
};

// Link Component
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link variant */
  variant?: 'default' | 'muted' | 'accent' | 'subtle';
  /** Show underline */
  underline?: 'always' | 'hover' | 'none';
  /** External link (opens in new tab) */
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  underline = 'hover',
  external = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = cn(
    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm',
    {
      // Variant
      'text-blue-600 hover:text-blue-800': variant === 'default',
      'text-gray-600 hover:text-gray-800': variant === 'muted',
      'text-blue-600 hover:text-blue-700': variant === 'accent',
      'text-gray-500 hover:text-gray-700': variant === 'subtle',
      
      // Underline
      'underline': underline === 'always',
      'hover:underline': underline === 'hover',
      'no-underline': underline === 'none',
    },
    className
  );

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer', ...props }
    : props;

  return (
    <a className={baseStyles} {...linkProps}>
      {children}
      {external && (
        <span className="ml-1 inline-block text-xs" aria-label="Opens in new tab">
          ↗
        </span>
      )}
    </a>
  );
};