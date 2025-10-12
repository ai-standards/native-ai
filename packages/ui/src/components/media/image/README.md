# Image Component

An enhanced image component with loading states, error handling, and responsive features.

## Purpose and Use Cases

- **Progressive Loading**: Show loading states while images load
- **Error Handling**: Graceful fallbacks when images fail to load
- **Responsive Images**: Automatic responsive sizing and optimization
- **Accessibility**: Proper alt text and ARIA attributes
- **Performance**: Lazy loading and optimization features

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for accessibility (required) |
| `width` | `number \| string` | - | Image width |
| `height` | `number \| string` | - | Image height |
| `aspectRatio` | `'square' \| 'video' \| 'photo' \| 'wide'` | - | Predefined aspect ratio |
| `fit` | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | How image should fit container |
| `fallback` | `ReactNode` | - | Content to show when image fails to load |
| `loading` | `'eager' \| 'lazy'` | `'lazy'` | Loading strategy |
| `showLoader` | `boolean` | `true` | Show loading spinner while loading |
| `rounded` | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `false` | Border radius |
| `onLoad` | `function` | - | Callback when image loads |
| `onError` | `function` | - | Callback when image fails to load |
| `className` | `string` | - | Additional CSS classes |

## Example Usage

### Basic Image
```tsx
import { Image } from '@/components/media';

<Image 
  src="/photo.jpg" 
  alt="Beautiful landscape" 
  width={400} 
  height={300} 
/>
```

### With Aspect Ratio
```tsx
<Image 
  src="/avatar.jpg" 
  alt="User avatar" 
  aspectRatio="square"
  rounded="full"
/>
```

### Responsive Gallery
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <Image 
    src="/photo1.jpg" 
    alt="Photo 1" 
    aspectRatio="photo"
    className="w-full"
  />
  <Image 
    src="/photo2.jpg" 
    alt="Photo 2" 
    aspectRatio="photo"
    className="w-full"
  />
</div>
```

### With Fallback
```tsx
<Image 
  src="/might-fail.jpg" 
  alt="Product image" 
  fallback={
    <div className="flex items-center justify-center bg-gray-100 text-gray-500">
      Image not available
    </div>
  }
/>
```

### Loading States
```tsx
<Image 
  src="/large-image.jpg" 
  alt="Large image" 
  showLoader={true}
  loading="lazy"
  onLoad={() => console.log('Image loaded')}
  onError={() => console.log('Image failed to load')}
/>
```

### Different Fit Options
```tsx
<Image src="/photo.jpg" alt="Cover fit" fit="cover" />
<Image src="/photo.jpg" alt="Contain fit" fit="contain" />
<Image src="/photo.jpg" alt="Fill fit" fit="fill" />
```

### Rounded Variants
```tsx
<Image src="/photo.jpg" alt="Small rounded" rounded="sm" />
<Image src="/avatar.jpg" alt="Profile" rounded="full" />
<Image src="/card.jpg" alt="Card image" rounded="lg" />
```

## Accessibility Considerations

- **Alt Text**: Always provide meaningful alt text for screen readers
- **Focus Management**: Proper focus handling for interactive images
- **Loading States**: Screen reader announcements for loading states
- **Error Handling**: Accessible error messages when images fail
- **Keyboard Navigation**: Support for keyboard interaction when applicable

## Best Practices

1. **Always Include Alt Text**: Essential for screen readers and SEO
2. **Use Appropriate Aspect Ratios**: Maintain consistent proportions
3. **Optimize Image Sources**: Use appropriate formats and sizes
4. **Handle Loading States**: Provide feedback during image loading
5. **Graceful Degradation**: Always provide fallbacks for failed images
6. **Performance**: Use lazy loading for images below the fold
7. **Responsive Design**: Ensure images work well on all device sizes