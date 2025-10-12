import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Video, VideoGallery } from './Video';

describe('Video', () => {
  it('renders with basic props', () => {
    const { container } = render(<Video src="/test-video.mp4" />);
    
    const video = container.querySelector('video');
    expect(video).toBeTruthy();
    const source = video?.querySelector('source');
    expect(source?.getAttribute('src')).toBe('/test-video.mp4');
  });

  it('renders with multiple sources', () => {
    render(
      <Video 
        src={['/test-video.mp4', '/test-video.webm']}
        data-testid="video-container"
      />
    );
    
    const container = screen.getByTestId('video-container');
    const sources = container.querySelectorAll('source');
    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute('src')).toBe('/test-video.mp4');
    expect(sources[1].getAttribute('src')).toBe('/test-video.webm');
  });

  it('applies controls correctly', () => {
    const { rerender, container } = render(<Video src="/test.mp4" controls={true} />);
    let video = container.querySelector('video');
    expect(video?.hasAttribute('controls')).toBe(true);
    
    rerender(<Video src="/test.mp4" controls={false} />);
    video = container.querySelector('video');
    expect(video?.hasAttribute('controls')).toBe(false);
  });

  it('handles autoplay and muted props', () => {
    const { container } = render(<Video src="/test.mp4" autoPlay={true} muted={false} />);
    
    const video = container.querySelector('video');
    expect(video?.hasAttribute('autoplay')).toBe(true);
    // When autoPlay is true, muted should also be true for accessibility
    expect(video?.muted).toBe(true);
  });

  it('applies loop prop correctly', () => {
    const { container } = render(<Video src="/test.mp4" loop={true} />);
    
    const video = container.querySelector('video');
    expect(video?.hasAttribute('loop')).toBe(true);
  });

  it('applies size classes correctly', () => {
    const { rerender, container } = render(
      <Video src="/test.mp4" size="xs" />
    );
    let videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).toContain('w-32');
    expect(videoWrapper?.className).toContain('h-18');
    
    rerender(
      <Video src="/test.mp4" size="lg" />
    );
    videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).toContain('w-96');
    expect(videoWrapper?.className).toContain('h-54');
  });

  it('applies aspect ratio classes correctly', () => {
    const { rerender, container } = render(
      <Video src="/test.mp4" aspectRatio="square" />
    );
    let videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).toContain('aspect-square');
    
    rerender(
      <Video src="/test.mp4" aspectRatio="video" />
    );
    videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).toContain('aspect-video');
  });

  it('applies rounded classes correctly', () => {
    const { rerender, container } = render(
      <Video src="/test.mp4" rounded="none" />
    );
    let videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).not.toContain('rounded');
    
    rerender(
      <Video src="/test.mp4" rounded="lg" />
    );
    videoWrapper = container.querySelector('figure > div');
    expect(videoWrapper?.className).toContain('rounded-lg');
  });

  it('shows caption when provided', () => {
    render(<Video src="/test.mp4" caption="Test video caption" />);
    
    const caption = screen.getByText('Test video caption');
    expect(caption).toBeTruthy();
    expect(caption.tagName.toLowerCase()).toBe('figcaption');
  });

  it('shows placeholder when no src provided', () => {
    render(
      <Video 
        placeholder={<div>Loading video...</div>}
        data-testid="video-container"
      />
    );
    
    expect(screen.getByText('Loading video...')).toBeTruthy();
  });

  it('shows fallback on error', async () => {
    const { container } = render(
      <Video 
        src="/broken-video.mp4" 
        fallback={<div>Video failed to load</div>}
      />
    );
    
    const video = container.querySelector('video');
    if (video) {
      fireEvent.error(video);
      
      await waitFor(() => {
        expect(screen.getByText('Video failed to load')).toBeTruthy();
      });
    }
  });

  it('shows default loading state', () => {
    const { container } = render(<Video src="/test.mp4" />);
    
    const playIcon = container.querySelector('svg');
    expect(playIcon).toBeTruthy();
  });

  it('handles video events', () => {
    const onPlay = vi.fn();
    const onPause = vi.fn();
    const onEnded = vi.fn();
    
    const { container } = render(
      <Video 
        src="/test.mp4" 
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      />
    );
    
    const video = container.querySelector('video');
    
    if (video) {
      fireEvent.play(video);
      expect(onPlay).toHaveBeenCalled();
      
      fireEvent.pause(video);
      expect(onPause).toHaveBeenCalled();
      
      fireEvent.ended(video);
      expect(onEnded).toHaveBeenCalled();
    }
  });

  it('applies custom className', () => {
    const { container } = render(
      <Video 
        src="/test.mp4" 
        className="custom-class"
      />
    );
    
    const figure = container.querySelector('figure');
    expect(figure?.className).toContain('custom-class');
  });

  it('applies poster image', () => {
    const { container } = render(<Video src="/test.mp4" poster="/poster.jpg" />);
    
    const video = container.querySelector('video');
    expect(video?.getAttribute('poster')).toBe('/poster.jpg');
  });
});

describe('VideoGallery', () => {
  const mockVideos = [
    { src: '/video1.mp4', caption: 'Video 1' },
    { src: '/video2.mp4', caption: 'Video 2' },
    { src: '/video3.mp4', caption: 'Video 3' },
  ];

  it('renders all videos', () => {
    render(<VideoGallery videos={mockVideos} />);
    
    mockVideos.forEach((video) => {
      const caption = screen.getByText(video.caption);
      expect(caption).toBeTruthy();
    });
  });

  it('applies column classes correctly', () => {
    const { rerender } = render(
      <VideoGallery videos={mockVideos} columns={2} data-testid="gallery" />
    );
    let gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('grid-cols-2');
    
    rerender(
      <VideoGallery videos={mockVideos} columns={4} data-testid="gallery" />
    );
    gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('grid-cols-4');
  });

  it('applies gap classes correctly', () => {
    const { rerender } = render(
      <VideoGallery videos={mockVideos} gap="xs" data-testid="gallery" />
    );
    let gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('gap-1');
    
    rerender(
      <VideoGallery videos={mockVideos} gap="lg" data-testid="gallery" />
    );
    gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('gap-6');
  });

  it('handles video click events', () => {
    const onVideoClick = vi.fn();
    render(
      <VideoGallery 
        videos={mockVideos.slice(0, 1)}
        onVideoClick={onVideoClick}
      />
    );
    
    const videoContainer = screen.getByText('Video 1').closest('figure');
    if (videoContainer) {
      fireEvent.click(videoContainer);
      expect(onVideoClick).toHaveBeenCalledWith(mockVideos[0], 0);
    }
  });

  it('applies hover styles when onVideoClick is provided', () => {
    const onVideoClick = vi.fn();
    render(
      <VideoGallery 
        videos={mockVideos.slice(0, 1)}
        onVideoClick={onVideoClick}
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    const videoContainer = gallery.querySelector('[class*="cursor-pointer"]');
    expect(videoContainer).toBeTruthy();
    expect(videoContainer?.className).toContain('hover:opacity-80');
  });

  it('applies aspect ratio to all videos', () => {
    render(
      <VideoGallery 
        videos={mockVideos.slice(0, 2)}
        aspectRatio="square"
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    const videoContainers = gallery.querySelectorAll('[class*="aspect-square"]');
    expect(videoContainers.length).toBeGreaterThan(0);
  });

  it('applies custom className', () => {
    render(
      <VideoGallery 
        videos={mockVideos}
        className="custom-gallery"
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    expect(gallery.className).toContain('custom-gallery');
  });

  it('handles empty videos array gracefully', () => {
    render(
      <VideoGallery 
        videos={[]}
        data-testid="gallery"
      />
    );
    
    const gallery = screen.getByTestId('gallery');
    expect(gallery).toBeTruthy();
    expect(gallery.children).toHaveLength(0);
  });

  it('passes controls prop to all videos', () => {
    const { container } = render(<VideoGallery videos={mockVideos.slice(0, 2)} controls={false} />);
    
    const videos = container.querySelectorAll('video');
    videos.forEach(video => {
      expect(video.hasAttribute('controls')).toBe(false);
    });
  });
});