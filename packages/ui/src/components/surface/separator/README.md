# Separator Component

Semantic content divisions for organizing interface sections with proper accessibility and content hierarchy.

## Features

- **Semantic Hierarchy**: Multiple levels for content organization
- **Flexible Orientation**: Horizontal and vertical separation options
- **Spacing Control**: Configurable spacing around separators
- **Label Support**: Optional content labels for section identification
- **Accessibility**: Proper ARIA roles and semantic markup
- **Decorative Mode**: Option for purely visual separations

## Usage

```tsx
import { Separator } from '@/components/surface/separator';

// Basic separator
<Separator />

// With semantic level
<Separator level={1} />

// With content label
<Separator>Section Title</Separator>

// Vertical separator
<Separator orientation="vertical" />
```

## Examples

### Content Hierarchy
```tsx
<div>
  <section>
    <h2>Main Section</h2>
    <p>Primary content...</p>
  </section>
  
  <Separator level={1} />
  
  <section>
    <h3>Subsection</h3>
    <p>Secondary content...</p>
  </section>
  
  <Separator level={2} />
  
  <section>
    <h4>Details</h4>
    <p>Detailed information...</p>
  </section>
</div>
```

### Labeled Sections
```tsx
<div>
  <section>User Profile Content</section>
  <Separator>Account Settings</Separator>
  <section>Settings Content</section>
</div>
```

### Layout Separation
```tsx
<div className="flex">
  <aside>Sidebar content</aside>
  <Separator orientation="vertical" />
  <main>Main content</main>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Separator orientation |
| `level` | `1 \| 2 \| 3 \| 4` | `2` | Semantic hierarchy level |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Spacing around separator |
| `decorative` | `boolean` | `false` | Whether separator is decorative only |
| `children` | `ReactNode` | - | Optional content label |

## Accessibility

- Uses `role="separator"` for semantic separations
- Uses `role="presentation"` for decorative separations
- Includes `aria-orientation` attribute for screen readers
- Supports semantic hierarchy through level styling

## Semantic Levels

1. **Level 1**: Primary section divisions (darker border)
2. **Level 2**: Secondary section divisions (default)
3. **Level 3**: Subsection divisions (lighter border)
4. **Level 4**: Minor divisions (subtle border)

## Best Practices

- Use appropriate semantic levels to match content hierarchy
- Choose decorative mode for purely visual separations
- Use labeled separators for clear section identification
- Consider spacing options based on content density
- Maintain consistent level usage throughout the interface