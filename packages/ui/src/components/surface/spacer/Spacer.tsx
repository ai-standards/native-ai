import React from 'react';
import { cn } from '@/utils/cn';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  axis?: 'horizontal' | 'vertical' | 'both';
  flex?: boolean;
}

const spacerSizes = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px'
};

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  axis = 'both',
  flex = false,
  className,
  style,
  ...props
}) => {
  const spacerSize = spacerSizes[size];
  
  const spacerStyle = {
    ...(axis === 'horizontal' || axis === 'both' ? { width: spacerSize } : {}),
    ...(axis === 'vertical' || axis === 'both' ? { height: spacerSize } : {}),
    ...style
  };

  return (
    <div
      className={cn(
        'shrink-0',
        flex && 'flex-1',
        className
      )}
      style={spacerStyle}
      {...props}
    />
  );
};