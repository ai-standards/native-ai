# AspectRatio Component

Responsive aspect ratio containers for maintaining consistent proportions across different screen sizes.

## Features

- **Predefined Ratios**: Common aspect ratios (16:9, 4:3, square, etc.)
- **Custom Ratios**: Numeric ratios or width/height specifications
- **Responsive Design**: Maintains proportions at all viewport sizes
- **Content Flexibility**: Works with images, videos, or any content
- **CSS-Based**: Uses padding-bottom technique for reliable ratios
- **Zero Dependencies**: Pure CSS solution with no JavaScript overhead

## Usage

```tsx
import { AspectRatio } from '@/components/surface/aspectratio';

// Predefined ratio
<AspectRatio ratio="16/9">
  <video src="video.mp4" />
</AspectRatio>

// Custom numeric ratio
<AspectRatio ratio={2.5}>
  <img src="banner.jpg" alt="Banner" />
</AspectRatio>

// Width and height
<AspectRatio width={1200} height={800}>
  <div>Custom content</div>
</AspectRatio>
```

## Examples

### Video Player
```tsx
<AspectRatio ratio="16/9" className="bg-black rounded-lg">
  <video 
    className="w-full h-full object-cover"
    src="/path/to/video.mp4"
    controls
  />
</AspectRatio>
```

### Image Gallery
```tsx
<div className="grid grid-cols-3 gap-4">
  {images.map((image) => (
    <AspectRatio key={image.id} ratio="square">
      <img 
        className="w-full h-full object-cover rounded"
        src={image.src}
        alt={image.alt}
      />
    </AspectRatio>
  ))}
</div>
```

### Product Cards
```tsx
<div className="product-card">
  <AspectRatio ratio="4/3">
    <img 
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  </AspectRatio>
  <div className="p-4">
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
</div>
```

### Custom Banner
```tsx
<AspectRatio ratio={3.5} className="bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="w-full h-full flex items-center justify-center text-white">
    <h1 className="text-4xl font-bold">Hero Section</h1>
  </div>
</AspectRatio>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number \| string` | `'16/9'` | Aspect ratio specification |
| `width` | `number` | - | Custom width for ratio calculation |
| `height` | `number` | - | Custom height for ratio calculation |

## Predefined Ratios

| Ratio | Description | Common Use Cases |
|-------|-------------|------------------|
| `'16/9'` | Widescreen | Videos, modern displays |
| `'4/3'` | Traditional | Classic photos, presentations |
| `'3/2'` | Classic | Film photography, prints |
| `'21/9'` | Ultrawide | Cinematic, banners |
| `'1/1'` or `'square'` | Square | Profile pictures, Instagram |
| `'5/4'` | Portrait | Large format photography |
| `'9/16'` | Vertical | Mobile screens, stories |

## Responsive Behavior

The component automatically maintains aspect ratios across all screen sizes:

```tsx
{/* Mobile-first approach */}
<div className="w-full sm:w-80 lg:w-96">
  <AspectRatio ratio="16/9">
    <img src="responsive-image.jpg" className="w-full h-full object-cover" />
  </AspectRatio>
</div>
```

## Content Positioning

Content inside AspectRatio is positioned absolutely:

```tsx
<AspectRatio ratio="16/9" className="bg-gray-900">
  {/* Content fills entire container */}
  <div className="w-full h-full flex items-center justify-center">
    <button className="px-6 py-3 bg-white text-black rounded">
      Play Video
    </button>
  </div>
</AspectRatio>
```

## CSS Implementation

The component uses the padding-bottom technique:

```css
.aspect-ratio-container {
  position: relative;
  width: 100%;
  padding-bottom: calc(height / width * 100%);
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## Best Practices

- Use semantic aspect ratios (16:9 for videos, square for avatars)
- Combine with `object-cover` for images to maintain aspect without distortion
- Use responsive classes for different ratios on different screens
- Consider loading states for dynamic content
- Test across various viewport sizes to ensure consistency