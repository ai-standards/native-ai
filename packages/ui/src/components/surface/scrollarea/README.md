# ScrollArea Component

Custom scrollable regions with enhanced styling, fade effects, and programmatic control.

## Features

- **Custom Scrollbars**: Default, minimal, and hidden scrollbar variants
- **Multi-Directional**: Support for vertical, horizontal, and both scroll directions
- **Fade Effects**: Optional fade gradients at scroll edges
- **Programmatic Control**: Scroll methods via ref API
- **Responsive**: Automatic resize detection and scroll state updates
- **Smooth Scrolling**: Built-in smooth scrolling behavior
- **Performance**: Optimized for large content areas

## Usage

```tsx
import { ScrollArea } from '@/components/surface/scrollarea';

// Basic scroll area
<ScrollArea maxHeight="300px">
  <div>Long content...</div>
</ScrollArea>

// With fade effects
<ScrollArea fadeEdges fadeSize="lg">
  <div>Content with fade edges</div>
</ScrollArea>

// Horizontal scrolling
<ScrollArea direction="horizontal">
  <div className="flex">Horizontal content...</div>
</ScrollArea>
```

## Examples

### Vertical Scrolling
```tsx
<ScrollArea maxHeight="200px" fadeEdges>
  <div>
    {items.map(item => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
</ScrollArea>
```

### Code Viewer
```tsx
<ScrollArea
  maxHeight="400px"
  scrollbarVariant="minimal"
  fadeEdges
  className="bg-gray-900 text-green-400"
>
  <pre><code>{codeContent}</code></pre>
</ScrollArea>
```

### Programmatic Control
```tsx
const scrollRef = useRef<ScrollAreaRef>(null);

<ScrollArea ref={scrollRef}>
  <div>Scrollable content</div>
</ScrollArea>

// Control scrolling
scrollRef.current?.scrollToTop();
scrollRef.current?.scrollTo({ top: 100, behavior: 'smooth' });
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scrollbarVariant` | `'default' \| 'minimal' \| 'hidden'` | `'default'` | Scrollbar styling |
| `maxHeight` | `string \| number` | - | Maximum height constraint |
| `direction` | `'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Scroll directions |
| `fadeEdges` | `boolean` | `false` | Enable fade effects at edges |
| `fadeSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of fade effects |
| `onScrollChange` | `(scrollTop: number, scrollLeft: number) => void` | - | Scroll position callback |

## Ref Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `scrollTo` | `{ top?, left?, behavior? }` | Scroll to specific position |
| `scrollToTop` | - | Scroll to top |
| `scrollToBottom` | - | Scroll to bottom |
| `scrollToLeft` | - | Scroll to left edge |
| `scrollToRight` | - | Scroll to right edge |

## Scrollbar Variants

- **Default**: Standard scrollbars with visible track and thumb
- **Minimal**: Thin scrollbars with minimal visual footprint
- **Hidden**: Completely hidden scrollbars (scroll still functional)

## Fade Effects

- **Small**: 8px fade gradient
- **Medium**: 16px fade gradient  
- **Large**: 24px fade gradient

## Best Practices

- Use `maxHeight` to constrain vertical scrolling areas
- Enable `fadeEdges` for better visual indication of scrollable content
- Use `minimal` or `hidden` scrollbars for cleaner interfaces
- Implement scroll controls for better accessibility
- Consider performance with very large content areas