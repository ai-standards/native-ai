import React from 'react';
import { cn } from '@/utils/cn';

export interface AudioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onLoad' | 'onError' | 'title'> {
  /** Audio source URL or array of sources */
  src?: string | string[];
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Show audio controls */
  controls?: boolean;
  /** Autoplay audio (not recommended for accessibility) */
  autoPlay?: boolean;
  /** Mute audio by default */
  muted?: boolean;
  /** Loop audio playback */
  loop?: boolean;
  /** Loading state placeholder */
  placeholder?: React.ReactNode;
  /** Error fallback content */
  fallback?: React.ReactNode;
  /** Audio title */
  title?: string;
  /** Audio description */
  description?: string;
  /** Audio load callback */
  onLoad?: () => void;
  /** Audio error callback */
  onError?: () => void;
  /** Audio ended callback */
  onEnded?: () => void;
  /** Play callback */
  onPlay?: () => void;
  /** Pause callback */
  onPause?: () => void;
}

const sizeClasses = {
  xs: 'w-48',
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-96',
  xl: 'w-[32rem]',
  full: 'w-full',
};

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const Audio: React.FC<AudioProps> = ({
  src,
  size = 'md',
  rounded = 'md',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  placeholder,
  fallback,
  title,
  description,
  onLoad,
  onError,
  onEnded,
  onPlay,
  onPause,
  className,
  children,
  ...props
}) => {
  const [audioState, setAudioState] = React.useState<'loading' | 'loaded' | 'error'>('loading');
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleLoadedData = () => {
    setAudioState('loaded');
    onLoad?.();
  };

  const handleError = () => {
    setAudioState('error');
    onError?.();
  };

  const showPlaceholder = audioState === 'loading' && placeholder;
  const showFallback = audioState === 'error' && fallback;

  // Convert src to array format for multiple sources
  const sources = Array.isArray(src) ? src : src ? [src] : [];

  return (
    <div 
      className={cn(
        'relative flex flex-col',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Title and Description */}
      {(title || description) && (
        <div className="mb-2">
          {title && (
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Audio Player Container */}
      <div
        className={cn(
          'relative bg-gray-50 border border-gray-200',
          roundedClasses[rounded],
          'p-2'
        )}
      >
        {/* Audio Element */}
        {sources.length > 0 && (
          <audio
            ref={audioRef}
            className="w-full"
            controls={controls}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            onLoadedData={handleLoadedData}
            onError={handleError}
            onEnded={onEnded}
            onPlay={onPlay}
            onPause={onPause}
          >
            {sources.map((source, index) => (
              <source key={index} src={source} />
            ))}
            {children}
          </audio>
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
        {!src || (audioState === 'loading' && !placeholder) ? (
          <div className={cn(
            'flex items-center justify-center p-4 text-gray-400',
            roundedClasses[rounded]
          )}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793l-4.146-3.317a1 1 0 00-.632-.226H2a1 1 0 01-1-1V7.5a1 1 0 011-1h1.605a1 1 0 00.632-.226l4.146-3.317a1 1 0 011.555.693zM14 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
                <path d="M16.5 6A1.5 1.5 0 0118 7.5v5a1.5 1.5 0 11-3 0v-5A1.5 1.5 0 0116.5 6z" />
              </svg>
              <span className="text-sm">Loading audio...</span>
            </div>
          </div>
        ) : null}

        {/* Default Error State */}
        {audioState === 'error' && !fallback ? (
          <div className={cn(
            'flex items-center justify-center p-4 text-gray-400',
            roundedClasses[rounded]
          )}>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs">Audio failed to load</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

// Audio Playlist Component
export interface AudioPlaylistProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of audio tracks */
  tracks: Array<{
    src: string | string[];
    title?: string;
    artist?: string;
    duration?: string;
    description?: string;
  }>;
  /** Size for all audio players */
  size?: AudioProps['size'];
  /** Rounded corners for all audio players */
  rounded?: AudioProps['rounded'];
  /** Show controls on all players */
  controls?: boolean;
  /** Currently playing track index */
  currentTrack?: number;
  /** Callback when track is selected */
  onTrackSelect?: (track: any, index: number) => void;
  /** Autoplay next track */
  autoNext?: boolean;
}

export const AudioPlaylist: React.FC<AudioPlaylistProps> = ({
  tracks,
  size = 'md',
  rounded = 'md',
  controls = true,
  currentTrack,
  onTrackSelect,
  autoNext = false,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = React.useState(currentTrack ?? 0);

  const handleTrackEnd = (index: number) => {
    if (autoNext && index < tracks.length - 1) {
      const nextIndex = index + 1;
      setActiveIndex(nextIndex);
      onTrackSelect?.(tracks[nextIndex], nextIndex);
    }
  };

  const handleTrackClick = (track: any, index: number) => {
    setActiveIndex(index);
    onTrackSelect?.(track, index);
  };

  return (
    <div className={cn('space-y-3', className)} {...props}>
      {tracks.map((track, index) => (
        <div key={index} className="relative">
          {/* Track indicator */}
          {activeIndex === index && (
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-full" />
          )}
          
          <Audio
            src={track.src}
            title={track.title}
            description={track.artist ? `${track.artist}${track.duration ? ' • ' + track.duration : ''}` : track.description}
            size={size}
            rounded={rounded}
            controls={controls}
            onEnded={() => handleTrackEnd(index)}
            className={cn(
              'cursor-pointer transition-colors',
              activeIndex === index ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:bg-gray-50'
            )}
            onClick={() => handleTrackClick(track, index)}
          />
        </div>
      ))}
    </div>
  );
};