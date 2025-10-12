# Divider Component

Visual content separators for organizing interface elements and creating visual hierarchy.

## Features

- **Multiple Orientations**: Horizontal and vertical divider options
- **Visual Variants**: Solid, dashed, dotted, and double line styles
- **Flexible Sizing**: Small, medium, and large thickness options
- **Color Options**: Default, muted, accent, and destructive color variants
- **Label Support**: Optional text labels with flexible positioning
- **Accessibility**: Proper ARIA roles and semantic markup

## Usage

```tsx
import { Divider } from '@/components/surface/divider';

// Basic divider
<Divider />

// With label
<Divider label="Section Break" />

// Vertical divider
<Divider orientation="vertical" />

// Styled variants
<Divider variant="dashed" size="lg" color="accent" />
```

## Examples

### Basic Divider
```tsx
<div>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</div>
```

### Labeled Divider
```tsx
<div>
  <section>Section 1 content</section>
  <Divider label="Next Section" labelPosition="center" />
  <section>Section 2 content</section>
</div>
```

### Vertical Layout
```tsx
<div className="flex">
  <div>Left content</div>
  <Divider orientation="vertical" />
  <div>Right content</div>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider orientation |
| `variant` | `'solid' \| 'dashed' \| 'dotted' \| 'double'` | `'solid'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Thickness of the divider |
| `color` | `'default' \| 'muted' \| 'accent' \| 'destructive'` | `'default'` | Color variant |
| `label` | `ReactNode` | - | Optional text label |
| `labelPosition` | `'left' \| 'center' \| 'right'` | `'center'` | Position of the label |

## Accessibility

- Uses proper `role="separator"` for screen readers
- Supports `aria-label` when label is provided as string
- Semantic markup for better accessibility tree

## Best Practices

- Use horizontal dividers to separate content sections
- Use vertical dividers in navigation or sidebar layouts
- Choose appropriate colors that maintain sufficient contrast
- Use labels sparingly to avoid visual clutter
- Consider muted variants for subtle content separation