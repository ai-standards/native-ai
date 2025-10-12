import React from 'react';
import { cn } from '@/utils/cn';

export interface ImageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onLoad' | 'onError'> {
  /** Image source URL */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image aspect ratio */
  aspectRatio?: 'square' | 'video' | 'photo' | 'auto';
  /** Image size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Border radius variant */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Loading state placeholder */
  placeholder?: React.ReactNode;
  /** Error fallback content */
  fallback?: React.ReactNode;
  /** Loading state behavior */
  loading?: 'lazy' | 'eager';
  /** Fit behavior */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Overlay content */
  overlay?: React.ReactNode;
  /** Hover overlay content */
  hoverOverlay?: React.ReactNode;
  /** Callback when image loads successfully */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
  /** Additional props to pass to the img element */
  imgProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'onLoad' | 'onError' | 'loading' | 'className'>;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  auto: '',
};

const sizeClasses = {
  xs: 'w-16 h-16',
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
  xl: 'w-64 h-64',
  full: 'w-full h-full',
};

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const objectFitClasses = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  size = 'md',
  rounded = 'md',
  placeholder,
  fallback,
  loading = 'lazy',
  objectFit = 'cover',
  overlay,
  hoverOverlay,
  onLoad,
  onError,
  imgProps,
  className,
  ...props
}) => {
  const [imageState, setImageState] = React.useState<'loading' | 'loaded' | 'error'>('loading');
  const [isHovered, setIsHovered] = React.useState(false);

  const handleLoad = () => {
    setImageState('loaded');
    onLoad?.();
  };

  const handleError = () => {
    setImageState('error');
    onError?.();
  };

  const showPlaceholder = imageState === 'loading' && placeholder;
  const showFallback = imageState === 'error' && fallback;
  const showImage = imageState === 'loaded' || (!placeholder && !fallback);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
        size !== 'full' && sizeClasses[size],
        roundedClasses[rounded],
        'group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Image */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn(
            'w-full h-full',
            objectFitClasses[objectFit],
            roundedClasses[rounded],
            showImage ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-200'
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...imgProps}
        />
      )}

      {/* Loading Placeholder */}
      {showPlaceholder && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-gray-100',
          roundedClasses[rounded]
        )}>
          {placeholder}
        </div>
      )}

      {/* Error Fallback */}
      {showFallback && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-gray-50',
          roundedClasses[rounded]
        )}>
          {fallback}
        </div>
      )}

      {/* Default states when no custom placeholder/fallback */}
      {!src || (imageState === 'loading' && !placeholder) ? (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-gray-100',
          roundedClasses[rounded]
        )}>
          <div className="animate-pulse">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      ) : null}

      {imageState === 'error' && !fallback ? (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400',
          roundedClasses[rounded]
        )}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      ) : null}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          {overlay}
        </div>
      )}

      {/* Hover Overlay */}
      {hoverOverlay && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center transition-opacity duration-200',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}>
          {hoverOverlay}
        </div>
      )}
    </div>
  );
};

// Image Gallery Component
export interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of image sources */
  images: string[];
  /** Alt text prefix (will be combined with index) */
  altPrefix?: string;
  /** Number of columns in grid */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Gap between images */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Aspect ratio for all images */
  aspectRatio?: ImageProps['aspectRatio'];
  /** Rounded corners for all images */
  rounded?: ImageProps['rounded'];
  /** Object fit for all images */
  objectFit?: ImageProps['objectFit'];
  /** Callback when image is clicked */
  onImageClick?: (src: string, index: number) => void;
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

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  altPrefix = 'Image',
  columns = 3,
  gap = 'md',
  aspectRatio = 'square',
  rounded = 'md',
  objectFit = 'cover',
  onImageClick,
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
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          size="full"
          aspectRatio={aspectRatio}
          rounded={rounded}
          objectFit={objectFit}
          className={onImageClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : undefined}
          onClick={() => onImageClick?.(src, index)}
        />
      ))}
    </div>
  );
};