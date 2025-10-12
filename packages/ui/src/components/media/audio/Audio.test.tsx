import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Audio, AudioPlaylist } from './Audio';

describe('Audio', () => {
  it('renders with basic props', () => {
    render(<Audio src="/test-audio.mp3" data-testid="audio-container" />);
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    expect(audio).toBeTruthy();
    expect(audio?.querySelector('source')?.getAttribute('src')).toBe('/test-audio.mp3');
  });

  it('renders with multiple sources', () => {
    render(
      <Audio 
        src={['/test-audio.mp3', '/test-audio.wav']}
        data-testid="audio-container"
      />
    );
    
    const container = screen.getByTestId('audio-container');
    const sources = container.querySelectorAll('source');
    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute('src')).toBe('/test-audio.mp3');
    expect(sources[1].getAttribute('src')).toBe('/test-audio.wav');
  });

  it('displays title and description', () => {
    render(
      <Audio 
        src="/test.mp3" 
        title="Test Audio" 
        description="Audio description"
      />
    );
    
    expect(screen.getByText('Test Audio')).toBeTruthy();
    expect(screen.getByText('Audio description')).toBeTruthy();
  });

  it('applies controls correctly', () => {
    const { rerender } = render(<Audio src="/test.mp3" controls={true} data-testid="audio-container" />);
    let container = screen.getByTestId('audio-container');
    let audio = container.querySelector('audio');
    expect(audio?.hasAttribute('controls')).toBe(true);
    
    rerender(<Audio src="/test.mp3" controls={false} data-testid="audio-container" />);
    container = screen.getByTestId('audio-container');
    audio = container.querySelector('audio');
    expect(audio?.hasAttribute('controls')).toBe(false);
  });

  it('handles autoplay and muted props', () => {
    render(<Audio src="/test.mp3" autoPlay={true} muted={true} data-testid="audio-container" />);
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    expect(audio?.hasAttribute('autoplay')).toBe(true);
    expect(audio?.muted).toBe(true);
  });

  it('applies loop prop correctly', () => {
    render(<Audio src="/test.mp3" loop={true} data-testid="audio-container" />);
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    expect(audio?.hasAttribute('loop')).toBe(true);
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Audio src="/test.mp3" size="xs" data-testid="audio-container" />
    );
    let container = screen.getByTestId('audio-container');
    expect(container.className).toContain('w-48');
    
    rerender(
      <Audio src="/test.mp3" size="lg" data-testid="audio-container" />
    );
    container = screen.getByTestId('audio-container');
    expect(container.className).toContain('w-96');
  });

  it('applies rounded classes correctly', () => {
    const { rerender } = render(
      <Audio src="/test.mp3" rounded="none" data-testid="audio-container" />
    );
    let container = screen.getByTestId('audio-container');
    let playerContainer = container.querySelector('[class*="bg-gray-50"]');
    expect(playerContainer?.className).not.toContain('rounded');
    
    rerender(
      <Audio src="/test.mp3" rounded="lg" data-testid="audio-container" />
    );
    container = screen.getByTestId('audio-container');
    playerContainer = container.querySelector('[class*="bg-gray-50"]');
    expect(playerContainer?.className).toContain('rounded-lg');
  });

  it('shows placeholder when provided', () => {
    render(
      <Audio 
        src="/test.mp3"
        placeholder={<div>Custom loading...</div>}
        data-testid="audio-container"
      />
    );
    
    expect(screen.getByText('Custom loading...')).toBeTruthy();
  });

  it('shows fallback on error', async () => {
    render(
      <Audio 
        src="/broken-audio.mp3" 
        fallback={<div>Audio failed to load</div>}
        data-testid="audio-container"
      />
    );
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    if (audio) {
      fireEvent.error(audio);
      
      await waitFor(() => {
        expect(screen.getByText('Audio failed to load')).toBeTruthy();
      });
    }
  });

  it('shows default loading state', () => {
    render(<Audio src="/test.mp3" data-testid="audio-container" />);
    
    const container = screen.getByTestId('audio-container');
    expect(screen.getByText('Loading audio...')).toBeTruthy();
  });

  it('handles audio events', () => {
    const onPlay = vi.fn();
    const onPause = vi.fn();
    const onEnded = vi.fn();
    
    render(
      <Audio 
        src="/test.mp3" 
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        data-testid="audio-container"
      />
    );
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    
    if (audio) {
      fireEvent.play(audio);
      expect(onPlay).toHaveBeenCalled();
      
      fireEvent.pause(audio);
      expect(onPause).toHaveBeenCalled();
      
      fireEvent.ended(audio);
      expect(onEnded).toHaveBeenCalled();
    }
  });

  it('applies custom className', () => {
    render(
      <Audio 
        src="/test.mp3" 
        className="custom-class" 
        data-testid="audio-container"
      />
    );
    
    const container = screen.getByTestId('audio-container');
    expect(container.className).toContain('custom-class');
  });

  it('shows default error state when no fallback provided', async () => {
    render(
      <Audio 
        src="/broken-audio.mp3"
        data-testid="audio-container"
      />
    );
    
    const container = screen.getByTestId('audio-container');
    const audio = container.querySelector('audio');
    if (audio) {
      fireEvent.error(audio);
      
      await waitFor(() => {
        expect(screen.getByText('Audio failed to load')).toBeTruthy();
      });
    }
  });
});

describe('AudioPlaylist', () => {
  const mockTracks = [
    { src: '/track1.mp3', title: 'Track 1', artist: 'Artist 1' },
    { src: '/track2.mp3', title: 'Track 2', artist: 'Artist 2' },
    { src: '/track3.mp3', title: 'Track 3', artist: 'Artist 3' },
  ];

  it('renders all tracks', () => {
    render(<AudioPlaylist tracks={mockTracks} />);
    
    mockTracks.forEach((track) => {
      expect(screen.getByText(track.title)).toBeTruthy();
    });
  });

  it('highlights current track', () => {
    render(<AudioPlaylist tracks={mockTracks} currentTrack={1} data-testid="playlist" />);
    
    const playlist = screen.getByTestId('playlist');
    const activeIndicator = playlist.querySelector('.bg-blue-500');
    expect(activeIndicator).toBeTruthy();
  });

  it('handles track selection', () => {
    const onTrackSelect = vi.fn();
    render(
      <AudioPlaylist 
        tracks={mockTracks}
        onTrackSelect={onTrackSelect}
        data-testid="playlist"
      />
    );
    
    const firstTrack = screen.getByText('Track 1').closest('.cursor-pointer');
    if (firstTrack) {
      fireEvent.click(firstTrack);
      expect(onTrackSelect).toHaveBeenCalledWith(mockTracks[0], 0);
    }
  });

  it('handles auto-next functionality', () => {
    const onTrackSelect = vi.fn();
    render(
      <AudioPlaylist 
        tracks={mockTracks}
        autoNext={true}
        onTrackSelect={onTrackSelect}
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    const firstAudio = playlist.querySelector('audio');
    
    if (firstAudio) {
      fireEvent.ended(firstAudio);
      expect(onTrackSelect).toHaveBeenCalledWith(mockTracks[1], 1);
    }
  });

  it('applies size to all audio players', () => {
    render(
      <AudioPlaylist 
        tracks={mockTracks.slice(0, 2)}
        size="lg"
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    const audioContainers = playlist.querySelectorAll('[class*="w-96"]');
    expect(audioContainers.length).toBeGreaterThan(0);
  });

  it('applies custom className', () => {
    render(
      <AudioPlaylist 
        tracks={mockTracks}
        className="custom-playlist"
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    expect(playlist.className).toContain('custom-playlist');
  });

  it('handles empty tracks array gracefully', () => {
    render(
      <AudioPlaylist 
        tracks={[]}
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    expect(playlist).toBeTruthy();
    expect(playlist.children).toHaveLength(0);
  });

  it('displays track metadata correctly', () => {
    const tracksWithMetadata = [
      {
        src: '/track1.mp3',
        title: 'Test Song',
        artist: 'Test Artist',
        duration: '3:45',
      },
    ];

    render(<AudioPlaylist tracks={tracksWithMetadata} />);
    
    expect(screen.getByText('Test Song')).toBeTruthy();
    expect(screen.getByText('Test Artist • 3:45')).toBeTruthy();
  });

  it('does not auto-advance past last track', () => {
    const onTrackSelect = vi.fn();
    render(
      <AudioPlaylist 
        tracks={mockTracks}
        autoNext={true}
        onTrackSelect={onTrackSelect}
        currentTrack={2} // Last track
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    const lastAudio = playlist.querySelectorAll('audio')[2];
    
    if (lastAudio) {
      fireEvent.ended(lastAudio);
      // Should not call onTrackSelect since we're at the last track
      expect(onTrackSelect).not.toHaveBeenCalled();
    }
  });

  it('applies controls to all audio players', () => {
    render(
      <AudioPlaylist 
        tracks={mockTracks.slice(0, 2)}
        controls={false}
        data-testid="playlist"
      />
    );
    
    const playlist = screen.getByTestId('playlist');
    const audioElements = playlist.querySelectorAll('audio');
    audioElements.forEach(audio => {
      expect(audio.hasAttribute('controls')).toBe(false);
    });
  });
});