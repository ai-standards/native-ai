import React from 'react';
import { cn } from '@/utils/cn';

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Avatar size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Fallback text when image fails to load */
  fallback?: string;
  /** Avatar shape */
  shape?: 'circle' | 'square' | 'rounded';
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** Custom status indicator color */
  statusColor?: string;
  /** Avatar variant */
  variant?: 'default' | 'soft' | 'outline';
}

const sizeClasses = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
  '2xl': 'w-20 h-20 text-2xl',
};

const shapeClasses = {
  circle: 'rounded-full',
  square: '',
  rounded: 'rounded-md',
};

const variantClasses = {
  default: 'bg-gray-100 text-gray-600',
  soft: 'bg-blue-100 text-blue-600',
  outline: 'bg-white border-2 border-gray-200 text-gray-600',
};

const statusClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  shape = 'circle',
  variant = 'default',
  fallback,
  status,
  statusColor,
  className,
  onError,
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    setIsLoading(false);
    onError?.(event);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const showFallback = hasError || !src;
  const fallbackText = fallback || alt?.charAt(0)?.toUpperCase() || '?';

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)} {...props}>
      {/* Main Avatar */}
      <div
        className={cn(
          'relative flex items-center justify-center font-medium overflow-hidden',
          sizeClasses[size],
          shapeClasses[shape],
          showFallback && variantClasses[variant]
        )}
      >
        {!showFallback ? (
          <>
            <img
              src={src}
              alt={alt}
              className={cn(
                'w-full h-full object-cover',
                isLoading && 'opacity-0',
                shapeClasses[shape]
              )}
              onError={handleError}
              onLoad={handleLoad}
            />
            {isLoading && (
              <div className={cn(
                'absolute inset-0 flex items-center justify-center',
                variantClasses[variant]
              )}>
                <div className="animate-spin">⟳</div>
              </div>
            )}
          </>
        ) : (
          <span>{fallbackText}</span>
        )}
      </div>

      {/* Status Indicator */}
      {(status || statusColor) && (
        <div
          className={cn(
            'absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white',
            size === 'xs' && 'w-2 h-2 border',
            size === 'sm' && 'w-2.5 h-2.5 border',
            size === 'lg' && 'w-4 h-4',
            size === 'xl' && 'w-5 h-5',
            size === '2xl' && 'w-6 h-6',
            statusColor ? '' : status ? statusClasses[status] : 'bg-gray-400'
          )}
          style={statusColor ? { backgroundColor: statusColor } : undefined}
          aria-label={status ? `Status: ${status}` : 'Custom status'}
        />
      )}
    </div>
  );
};

// Avatar Group Component
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show before overflow */
  max?: number;
  /** Avatar size for all children */
  size?: AvatarProps['size'];
  /** Spacing between avatars */
  spacing?: 'tight' | 'normal' | 'loose';
}

const spacingClasses = {
  tight: '-space-x-1',
  normal: '-space-x-2',
  loose: 'space-x-1',
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  size = 'md',
  spacing = 'normal',
  className,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = childrenArray.slice(0, max);
  const overflowCount = childrenArray.length - max;

  return (
    <div
      className={cn(
        'flex items-center',
        spacing !== 'loose' ? spacingClasses[spacing] : spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {visibleAvatars.map((child, index) => (
        <div key={index} className="relative">
          {React.isValidElement(child) && child.type === Avatar
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
                size: child.props.size || size,
                className: cn(
                  'ring-2 ring-white',
                  child.props.className
                ),
              })
            : child}
        </div>
      ))}
      
      {overflowCount > 0 && (
        <Avatar
          size={size}
          fallback={`+${overflowCount}`}
          variant="outline"
          className="ring-2 ring-white"
        />
      )}
    </div>
  );
};