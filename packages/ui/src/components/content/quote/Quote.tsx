import React from 'react';
import { cn } from '@/utils/cn';

export interface QuoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, 'cite'> {
  /** Quote variant */
  variant?: 'default' | 'bordered' | 'highlighted';
  /** Quote size */
  size?: 'sm' | 'md' | 'lg';
  /** Citation or author */
  cite?: React.ReactNode;
  /** Citation alignment */
  citeAlign?: 'left' | 'right' | 'center';
}

export const Quote: React.FC<QuoteProps> = ({
  variant = 'default',
  size = 'md',
  cite,
  citeAlign = 'right',
  className,
  children,
  ...props
}) => {
  const quoteStyles = cn(
    'font-medium leading-relaxed',
    {
      // Variant
      'text-gray-700 italic': variant === 'default',
      'border-l-4 border-blue-500 pl-4 text-gray-700': variant === 'bordered',
      'bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-900': variant === 'highlighted',
      
      // Size
      'text-sm': size === 'sm',
      'text-base': size === 'md', 
      'text-lg': size === 'lg',
    },
    className
  );

  const citeStyles = cn(
    'block mt-2 text-sm text-gray-600 font-normal',
    {
      'text-left': citeAlign === 'left',
      'text-center': citeAlign === 'center',
      'text-right': citeAlign === 'right',
    }
  );

  return (
    <blockquote className={quoteStyles} {...props}>
      {variant === 'default' && <span className="text-4xl text-gray-300 leading-none">"</span>}
      <div className={variant === 'default' ? 'inline' : undefined}>
        {children}
      </div>
      {variant === 'default' && <span className="text-4xl text-gray-300 leading-none">"</span>}
      
      {cite && (
        <cite className={citeStyles}>
          — {cite}
        </cite>
      )}
    </blockquote>
  );
};