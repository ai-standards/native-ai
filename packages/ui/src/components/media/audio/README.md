# Audio Component

Audio player component with playback controls and accessibility support.

## Purpose and Use Cases

- **Audio Playback**: Play audio files with native HTML5 controls
- **Podcasts**: Audio content with titles, descriptions, and metadata
- **Playlists**: Multiple audio tracks organized in a sequential list
- **Accessibility**: Screen reader support and keyboard navigation
- **Responsive Design**: Audio players that work across different screen sizes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| string[]` | - | Audio source URL or array of sources for fallbacks |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Audio player size |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius |
| `controls` | `boolean` | `true` | Show audio controls |
| `autoPlay` | `boolean` | `false` | Autoplay audio (not recommended) |
| `muted` | `boolean` | `false` | Mute audio by default |
| `loop` | `boolean` | `false` | Loop audio playback |
| `placeholder` | `ReactNode` | - | Loading state placeholder |
| `fallback` | `ReactNode` | - | Error fallback content |
| `title` | `string` | - | Audio title |
| `description` | `string` | - | Audio description |
| `onLoad` | `function` | - | Audio load callback |
| `onError` | `function` | - | Audio error callback |
| `onPlay` | `function` | - | Audio play callback |
| `onPause` | `function` | - | Audio pause callback |
| `onEnded` | `function` | - | Audio ended callback |
| `className` | `string` | - | Additional CSS classes |

## Example Usage

### Basic Audio
```tsx
import { Audio } from '@/components/media';

<Audio 
  src="/audio.mp3" 
  controls={true}
/>
```

### Audio with Metadata
```tsx
<Audio 
  src="/podcast-episode.mp3" 
  title="Tech Talk Episode 1"
  description="Discussion about modern web development"
  controls={true}
/>
```

### Multiple Audio Sources
```tsx
<Audio 
  src={[
    '/audio.mp3',
    '/audio.wav',
    '/audio.ogg'
  ]}
  title="Cross-browser Audio"
  controls={true}
/>
```

### Different Sizes
```tsx
<Audio size="xs" src="/short-sound.mp3" title="Small Player" />
<Audio size="sm" src="/medium-audio.mp3" title="Small Player" />
<Audio size="md" src="/standard-audio.mp3" title="Standard Player" />
<Audio size="lg" src="/large-audio.mp3" title="Large Player" />
<Audio size="xl" src="/podcast.mp3" title="Podcast Player" />
<Audio size="full" src="/music.mp3" title="Full Width" className="w-full" />
```

### With Loading and Error States
```tsx
<Audio 
  src="/audio.mp3"
  title="Audio with States"
  placeholder={
    <div className="flex items-center gap-2">
      <span>Loading audio...</span>
    </div>
  }
  fallback={
    <div className="flex items-center gap-2 text-red-500">
      <span>Failed to load audio</span>
    </div>
  }
/>
```

### Event Handling
```tsx
<Audio 
  src="/interactive.mp3"
  title="Interactive Audio"
  onPlay={() => console.log('Audio started')}
  onPause={() => console.log('Audio paused')}
  onEnded={() => console.log('Audio finished')}
  onLoad={() => console.log('Audio loaded')}
  onError={() => console.log('Audio error')}
/>
```

### Audio Playlist
```tsx
import { AudioPlaylist } from '@/components/media';

<AudioPlaylist 
  tracks={[
    {
      src: '/track1.mp3',
      title: 'Song 1',
      artist: 'Artist Name',
      duration: '3:45'
    },
    {
      src: '/track2.mp3',
      title: 'Song 2',
      artist: 'Artist Name',
      duration: '4:20'
    }
  ]}
  autoNext={true}
  onTrackSelect={(track, index) => console.log('Selected:', track)}
/>
```

### Podcast Playlist
```tsx
<AudioPlaylist 
  tracks={[
    {
      src: '/episode1.mp3',
      title: 'Episode 1: Getting Started',
      description: 'Introduction to our podcast series',
    },
    {
      src: '/episode2.mp3',
      title: 'Episode 2: Advanced Topics',
      description: 'Deep dive into complex subjects',
    }
  ]}
  size="lg"
  currentTrack={0}
/>
```

## AudioPlaylist Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tracks` | `Array<TrackObject>` | - | Array of track objects |
| `size` | `AudioProps['size']` | `'md'` | Size for all audio players |
| `rounded` | `AudioProps['rounded']` | `'md'` | Border radius for all players |
| `controls` | `boolean` | `true` | Show controls on all players |
| `currentTrack` | `number` | - | Currently active track index |
| `onTrackSelect` | `function` | - | Track selection callback |
| `autoNext` | `boolean` | `false` | Auto-advance to next track |

### TrackObject Interface
```tsx
interface TrackObject {
  src: string | string[];
  title?: string;
  artist?: string;
  duration?: string;
  description?: string;
}
```

## Accessibility Considerations

- **Keyboard Controls**: Native audio controls are fully keyboard accessible
- **Screen Readers**: Proper semantic markup and ARIA labels
- **Focus Management**: Clear focus indicators on audio controls
- **Autoplay**: Avoid autoplay for better user experience and accessibility
- **Captions**: Support for audio descriptions through native elements
- **Volume Control**: Native volume controls respect system settings

## Best Practices

1. **Avoid Autoplay**: Let users initiate audio playback
2. **Provide Metadata**: Include titles and descriptions for context
3. **Use Multiple Sources**: Provide fallback formats for compatibility
4. **Optimize Files**: Use compressed audio formats for web delivery
5. **Test Across Browsers**: Ensure compatibility with different audio codecs
6. **Consider Mobile**: Test on mobile devices with limited bandwidth
7. **Respect User Preferences**: Honor system volume and accessibility settings
8. **Provide Transcripts**: Include text alternatives for accessibility