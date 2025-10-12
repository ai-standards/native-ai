import React from 'react';
import { cn } from '@/utils/cn';

export interface VideoProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onLoad' | 'onError'> {
  /** Video source URL or array of sources */
  src?: string | string[];
  /** Aspect ratio of the video */
  aspectRatio?: 'video' | 'square' | 'photo' | 'wide' | 'auto';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Show video controls */
  controls?: boolean;
  /** Autoplay video (muted by default for accessibility) */
  autoPlay?: boolean;
  /** Mute video by default */
  muted?: boolean;
  /** Loop video playback */
  loop?: boolean;
  /** Poster image URL */
  poster?: string;
  /** Loading state placeholder */
  placeholder?: React.ReactNode;
  /** Error fallback content */
  fallback?: React.ReactNode;
  /** Caption text */
  caption?: string;
  /** Video load callback */
  onLoad?: () => void;
  /** Video error callback */
  onError?: () => void;
  /** Video ended callback */
  onEnded?: () => void;
  /** Play callback */
  onPlay?: () => void;
  /** Pause callback */
  onPause?: () => void;
}

const aspectRatioClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  photo: 'aspect-[4/3]',
  wide: 'aspect-[21/9]',
  auto: '',
};

const sizeClasses = {
  xs: 'w-32 h-18',
  sm: 'w-48 h-27',
  md: 'w-64 h-36',
  lg: 'w-96 h-54',
  xl: 'w-[32rem] h-72',
  full: 'w-full h-full',
};

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const Video: React.FC<VideoProps> = ({
  src,
  aspectRatio = 'video',
  size = 'md',
  rounded = 'md',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
  placeholder,
  fallback,
  caption,
  onLoad,
  onError,
  onEnded,
  onPlay,
  onPause,
  className,
  onClick,
  children,
  ...props
}) => {
  const [videoState, setVideoState] = React.useState<'loading' | 'loaded' | 'error'>('loading');
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleLoadedData = () => {
    setVideoState('loaded');
    onLoad?.();
  };

  const handleError = () => {
    setVideoState('error');
    onError?.();
  };

  const showPlaceholder = videoState === 'loading' && placeholder;
  const showFallback = videoState === 'error' && fallback;

  // Convert src to array format for multiple sources
  const sources = Array.isArray(src) ? src : src ? [src] : [];

  return (
    <figure className={cn('relative', className)} onClick={onClick}>
      <div
        className={cn(
          'relative overflow-hidden bg-black',
          aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
          size !== 'full' && sizeClasses[size],
          roundedClasses[rounded],
          'group'
        )}
      >
        {/* Video Element */}
        {sources.length > 0 && (
          <video
            ref={videoRef}
            className={cn(
              'w-full h-full object-cover',
              roundedClasses[rounded]
            )}
            controls={controls}
            autoPlay={autoPlay}
            muted={muted || autoPlay} // Auto-mute when autoplay for accessibility
            loop={loop}
            poster={poster}
            onLoadedData={handleLoadedData}
            onError={handleError}
            onEnded={onEnded}
            onPlay={onPlay}
            onPause={onPause}
            {...props}
          >
            {sources.map((source, index) => (
              <source key={index} src={source} />
            ))}
            {children}
          </video>
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

        {/* Default Loading State */}
        {!src || (videoState === 'loading' && !placeholder) ? (
          <div className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-900',
            roundedClasses[rounded]
          )}>
            <div className="text-white">
              <svg className="w-12 h-12 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ) : null}

        {/* Default Error State */}
        {videoState === 'error' && !fallback ? (
          <div className={cn(
            'absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400',
            roundedClasses[rounded]
          )}>
            <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Video failed to load</span>
          </div>
        ) : null}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Video Gallery Component
export interface VideoGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of video sources */
  videos: Array<{
    src: string | string[];
    poster?: string;
    caption?: string;
    alt?: string;
  }>;
  /** Number of columns in grid */
  columns?: 2 | 3 | 4;
  /** Gap between videos */
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  /** Aspect ratio for all videos */
  aspectRatio?: VideoProps['aspectRatio'];
  /** Rounded corners for all videos */
  rounded?: VideoProps['rounded'];
  /** Show controls on all videos */
  controls?: boolean;
  /** Callback when video is clicked */
  onVideoClick?: (video: { src: string | string[]; poster?: string; caption?: string; alt?: string }, index: number) => void;
}

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  columns = 2,
  gap = 'md',
  aspectRatio = 'video',
  rounded = 'md',
  controls = true,
  onVideoClick,
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
      {videos.map((video, index) => (
        <Video
          key={index}
          src={video.src}
          poster={video.poster}
          caption={video.caption}
          size="full"
          aspectRatio={aspectRatio}
          rounded={rounded}
          controls={controls}
          className={onVideoClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : undefined}
          onClick={() => onVideoClick?.(video, index)}
        />
      ))}
    </div>
  );
};