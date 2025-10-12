# Video Component

A comprehensive video player component for embedding videos with built-in controls and responsive behavior.

## Purpose and Use Cases

- **Video Playback**: Display video content with native HTML5 controls
- **Responsive Media**: Videos that adapt to different screen sizes and aspect ratios
- **Galleries**: Multiple videos organized in grid layouts
- **Accessibility**: Proper video controls and captions support
- **Performance**: Lazy loading and optimized video delivery

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| string[]` | - | Video source URL or array of sources for fallbacks |
| `aspectRatio` | `'video' \| 'square' \| 'photo' \| 'wide' \| 'auto'` | `'video'` | Video container aspect ratio |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Video player size |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius |
| `controls` | `boolean` | `true` | Show video controls |
| `autoPlay` | `boolean` | `false` | Autoplay video (will be muted for accessibility) |
| `muted` | `boolean` | `false` | Mute video by default |
| `loop` | `boolean` | `false` | Loop video playback |
| `poster` | `string` | - | Poster image URL |
| `placeholder` | `ReactNode` | - | Loading state placeholder |
| `fallback` | `ReactNode` | - | Error fallback content |
| `caption` | `string` | - | Video caption text |
| `onLoad` | `function` | - | Video load callback |
| `onError` | `function` | - | Video error callback |
| `onPlay` | `function` | - | Video play callback |
| `onPause` | `function` | - | Video pause callback |
| `onEnded` | `function` | - | Video ended callback |
| `className` | `string` | - | Additional CSS classes |

## Example Usage

### Basic Video
```tsx
import { Video } from '@/components/media';

<Video 
  src="/video.mp4" 
  controls={true}
  poster="/poster.jpg"
/>
```

### Multiple Video Sources
```tsx
<Video 
  src={[
    '/video.mp4',
    '/video.webm',
    '/video.ogg'
  ]}
  controls={true}
  poster="/poster.jpg"
/>
```

### Video with Caption
```tsx
<Video 
  src="/documentary.mp4" 
  caption="Nature Documentary: Life in the Forest"
  controls={true}
/>
```

### Responsive Aspect Ratios
```tsx
<Video 
  src="/content.mp4" 
  aspectRatio="video"  // 16:9
  size="full"
  className="w-full max-w-4xl"
/>

<Video 
  src="/square-video.mp4" 
  aspectRatio="square"  // 1:1 for social media
  size="md"
/>
```

### Autoplay Video
```tsx
<Video 
  src="/background.mp4" 
  autoPlay={true}
  muted={true}  // Required for autoplay in most browsers
  loop={true}
  controls={false}
/>
```

### With Loading and Error States
```tsx
<Video 
  src="/video.mp4"
  placeholder={
    <div className="flex items-center justify-center">
      <span className="text-white">Loading video...</span>
    </div>
  }
  fallback={
    <div className="flex items-center justify-center">
      <span className="text-gray-500">Video unavailable</span>
    </div>
  }
/>
```

### Video Gallery
```tsx
import { VideoGallery } from '@/components/media';

<VideoGallery 
  videos={[
    {
      src: '/video1.mp4',
      poster: '/poster1.jpg',
      caption: 'First Video'
    },
    {
      src: '/video2.mp4',
      poster: '/poster2.jpg',
      caption: 'Second Video'
    }
  ]}
  columns={2}
  gap="md"
  aspectRatio="video"
  onVideoClick={(video, index) => console.log('Clicked:', video)}
/>
```

### Different Sizes
```tsx
<Video size="xs" src="/small.mp4" />  {/* 128×72px */}
<Video size="sm" src="/medium.mp4" /> {/* 192×108px */}
<Video size="md" src="/large.mp4" />  {/* 256×144px */}
<Video size="lg" src="/xlarge.mp4" /> {/* 384×216px */}
<Video size="xl" src="/huge.mp4" />   {/* 512×288px */}
<Video size="full" src="/responsive.mp4" className="w-full" />
```

### Event Handling
```tsx
<Video 
  src="/interactive.mp4"
  onPlay={() => console.log('Video started')}
  onPause={() => console.log('Video paused')}
  onEnded={() => console.log('Video ended')}
  onLoad={() => console.log('Video loaded')}
  onError={() => console.log('Video error')}
/>
```

## VideoGallery Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videos` | `Array<VideoObject>` | - | Array of video objects |
| `columns` | `2 \| 3 \| 4` | `2` | Number of columns in grid |
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Gap between videos |
| `aspectRatio` | `VideoProps['aspectRatio']` | `'video'` | Aspect ratio for all videos |
| `rounded` | `VideoProps['rounded']` | `'md'` | Border radius for all videos |
| `controls` | `boolean` | `true` | Show controls on all videos |
| `onVideoClick` | `function` | - | Click handler for video items |

### VideoObject Interface
```tsx
interface VideoObject {
  src: string | string[];
  poster?: string;
  caption?: string;
  alt?: string;
}
```

## Accessibility Considerations

- **Keyboard Controls**: Native video controls are fully keyboard accessible
- **Screen Readers**: Proper semantic markup with `figure` and `figcaption`
- **Autoplay**: Automatically mutes videos when autoplay is enabled
- **Captions**: Support for video captions and subtitles through native `<track>` elements
- **Focus Management**: Proper focus indicators on video controls
- **Reduced Motion**: Respects user preferences for reduced motion

## Best Practices

1. **Always provide poster images** for better loading experience
2. **Use multiple source formats** for better browser compatibility
3. **Mute autoplay videos** to comply with browser policies
4. **Provide captions** for accessibility and SEO
5. **Optimize video files** for web delivery (proper compression, formats)
6. **Consider aspect ratios** that match your content
7. **Test on mobile devices** for touch interactions
8. **Respect data usage** - avoid autoplay on mobile networks