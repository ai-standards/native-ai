import React from 'react';
import { cn } from '@/utils/cn';

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  /** Caption text or element */
  caption?: React.ReactNode;
  /** Caption position */
  captionPosition?: 'top' | 'bottom' | 'overlay-top' | 'overlay-bottom';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  /** Background for overlay captions */
  overlayBackground?: 'dark' | 'light' | 'blur';
  /** Media content */
  children: React.ReactNode;
}

const sizeClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'w-full',
};

const alignClasses = {
  left: 'mr-auto',
  center: 'mx-auto',
  right: 'ml-auto',
};

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const overlayBackgroundClasses = {
  dark: 'bg-black bg-opacity-75 text-white',
  light: 'bg-white bg-opacity-90 text-gray-900',
  blur: 'bg-white bg-opacity-80 backdrop-blur-sm text-gray-900',
};

export const Figure: React.FC<FigureProps> = ({
  caption,
  captionPosition = 'bottom',
  size = 'md',
  rounded = 'md',
  align = 'center',
  overlayBackground = 'dark',
  children,
  className,
  ...props
}) => {
  const isOverlay = captionPosition.startsWith('overlay');

  return (
    <figure
      className={cn(
        'relative',
        sizeClasses[size],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {/* Top Caption */}
      {caption && captionPosition === 'top' && (
        <figcaption className="mb-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}

      {/* Media Container */}
      <div className={cn('relative overflow-hidden', roundedClasses[rounded])}>
        {children}

        {/* Overlay Captions */}
        {caption && isOverlay && (
          <figcaption
            className={cn(
              'absolute left-0 right-0 px-4 py-2 text-sm',
              captionPosition === 'overlay-top' ? 'top-0' : 'bottom-0',
              overlayBackgroundClasses[overlayBackground],
              captionPosition === 'overlay-top' && rounded !== 'none' && 'rounded-t-md',
              captionPosition === 'overlay-bottom' && rounded !== 'none' && 'rounded-b-md'
            )}
          >
            {caption}
          </figcaption>
        )}
      </div>

      {/* Bottom Caption */}
      {caption && captionPosition === 'bottom' && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Figure Gallery Component
export interface FigureGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of figure items */
  figures: Array<{
    content: React.ReactNode;
    caption?: React.ReactNode;
    id?: string;
  }>;
  /** Number of columns in grid */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Gap between figures */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Caption position for all figures */
  captionPosition?: FigureProps['captionPosition'];
  /** Size for all figures */
  size?: FigureProps['size'];
  /** Rounded corners for all figures */
  rounded?: FigureProps['rounded'];
  /** Overlay background for all figures */
  overlayBackground?: FigureProps['overlayBackground'];
  /** Callback when figure is clicked */
  onFigureClick?: (figure: any, index: number) => void;
}

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const FigureGallery: React.FC<FigureGalleryProps> = ({
  figures,
  columns = 3,
  gap = 'md',
  captionPosition = 'bottom',
  size = 'full',
  rounded = 'md',
  overlayBackground = 'dark',
  onFigureClick,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {figures.map((figure, index) => (
        <Figure
          key={figure.id || index}
          caption={figure.caption}
          captionPosition={captionPosition}
          size={size}
          rounded={rounded}
          overlayBackground={overlayBackground}
          className={onFigureClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : undefined}
          onClick={() => onFigureClick?.(figure, index)}
        >
          {figure.content}
        </Figure>
      ))}
    </div>
  );
};