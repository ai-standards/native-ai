# Figure

A semantic figure component for displaying media content with captions and gallery layouts.

## Features

- **Caption positioning** - Top, bottom, or overlay captions
- **Flexible sizing** - Multiple size variants from xs to full width
- **Alignment options** - Left, center, or right alignment
- **Overlay backgrounds** - Dark, light, or blur backgrounds for overlay captions
- **Gallery layout** - Grid-based gallery with customizable columns and gaps
- **Interactive galleries** - Click handlers for figure interactions
- **Responsive design** - Mobile-friendly layouts
- **Accessibility** - Semantic HTML with proper figure/figcaption structure

## Usage

### Basic Figure

```tsx
import { Figure } from '@/components/media/figure';

function Example() {
  return (
    <Figure caption="A beautiful sunset over the mountains">
      <img
        src="/sunset.jpg"
        alt="Mountain sunset"
        className="w-full h-48 object-cover"
      />
    </Figure>
  );
}
```

### Caption Positions

```tsx
// Top caption
<Figure caption="Top caption" captionPosition="top">
  <img src="/image.jpg" alt="Image" />
</Figure>

// Bottom caption (default)
<Figure caption="Bottom caption" captionPosition="bottom">
  <img src="/image.jpg" alt="Image" />
</Figure>

// Overlay captions
<Figure caption="Overlay top" captionPosition="overlay-top">
  <img src="/image.jpg" alt="Image" />
</Figure>

<Figure caption="Overlay bottom" captionPosition="overlay-bottom">
  <img src="/image.jpg" alt="Image" />
</Figure>
```

### Sizes and Alignment

```tsx
// Different sizes
<Figure caption="Small figure" size="sm">
  <img src="/image.jpg" alt="Image" />
</Figure>

<Figure caption="Large figure" size="lg">
  <img src="/image.jpg" alt="Image" />
</Figure>

// Alignment
<Figure caption="Right aligned" align="right">
  <img src="/image.jpg" alt="Image" />
</Figure>
```

### Overlay Backgrounds

```tsx
<Figure
  caption="Light overlay"
  captionPosition="overlay-bottom"
  overlayBackground="light"
>
  <img src="/image.jpg" alt="Image" />
</Figure>

<Figure
  caption="Blur overlay"
  captionPosition="overlay-bottom"
  overlayBackground="blur"
>
  <img src="/image.jpg" alt="Image" />
</Figure>
```

### With Video Content

```tsx
<Figure caption="Sample video">
  <video controls className="w-full">
    <source src="/video.mp4" type="video/mp4" />
  </video>
</Figure>
```

### Figure Gallery

```tsx
import { FigureGallery } from '@/components/media/figure';

function GalleryExample() {
  const figures = [
    {
      id: '1',
      content: <img src="/image1.jpg" alt="Image 1" />,
      caption: 'Image 1 Caption',
    },
    {
      id: '2',
      content: <img src="/image2.jpg" alt="Image 2" />,
      caption: 'Image 2 Caption',
    },
    // ... more figures
  ];

  return (
    <FigureGallery
      figures={figures}
      columns={3}
      gap="md"
      captionPosition="bottom"
    />
  );
}
```

### Interactive Gallery

```tsx
function InteractiveGallery() {
  const handleFigureClick = (figure, index) => {
    console.log(`Clicked figure ${index}:`, figure);
  };

  return (
    <FigureGallery
      figures={figures}
      columns={2}
      onFigureClick={handleFigureClick}
    />
  );
}
```

## API Reference

### Figure Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | `React.ReactNode` | - | Caption text or element |
| `captionPosition` | `'top' \| 'bottom' \| 'overlay-top' \| 'overlay-bottom'` | `'bottom'` | Caption position |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Size variant |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` | Alignment |
| `overlayBackground` | `'dark' \| 'light' \| 'blur'` | `'dark'` | Background for overlay captions |
| `children` | `React.ReactNode` | - | Media content |

### FigureGallery Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `figures` | `Array<{content: ReactNode, caption?: ReactNode, id?: string}>` | - | Array of figure items |
| `columns` | `2 \| 3 \| 4 \| 5 \| 6` | `3` | Number of columns in grid |
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Gap between figures |
| `captionPosition` | `FigureProps['captionPosition']` | `'bottom'` | Caption position for all figures |
| `size` | `FigureProps['size']` | `'full'` | Size for all figures |
| `rounded` | `FigureProps['rounded']` | `'md'` | Rounded corners for all figures |
| `overlayBackground` | `FigureProps['overlayBackground']` | `'dark'` | Overlay background for all figures |
| `onFigureClick` | `(figure: any, index: number) => void` | - | Callback when figure is clicked |

## Accessibility

- Uses semantic `<figure>` and `<figcaption>` elements
- Supports screen readers with proper element structure  
- Keyboard navigation for interactive galleries
- Alternative text should be provided for images
- Focus management for clickable figures

## Examples

### Photo Gallery

```tsx
<FigureGallery
  figures={photos.map(photo => ({
    id: photo.id,
    content: (
      <img
        src={photo.url}
        alt={photo.alt}
        className="w-full h-32 object-cover"
      />
    ),
    caption: photo.title,
  }))}
  columns={4}
  gap="sm"
  captionPosition="overlay-bottom"
/>
```

### Mixed Media Gallery

```tsx
<FigureGallery
  figures={[
    {
      content: <img src="/photo.jpg" alt="Photo" />,
      caption: 'Photograph',
    },
    {
      content: <video controls><source src="/video.mp4" /></video>,
      caption: 'Video Content',
    },
    {
      content: <canvas width="200" height="100" />,
      caption: 'Canvas Drawing',
    },
  ]}
  columns={3}
/>
```