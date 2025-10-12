# Badge Component

A versatile badge component for displaying status, notifications, counts, and labels.

## Purpose and Use Cases

- **Status Indicators**: Show online/offline status or other states
- **Notification Counts**: Display unread message or notification counts
- **Labels**: Add contextual labels to content
- **Dot Indicators**: Simple dot-style status indicators
- **Interactive Elements**: Clickable badges with hover states

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Badge content (text, numbers, etc.) |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `shape` | `'rounded' \| 'pill' \| 'square'` | `'rounded'` | Badge shape |
| `dot` | `boolean` | `false` | Show as a simple dot indicator |
| `pulse` | `boolean` | `false` | Add pulsing animation |
| `onClick` | `function` | - | Click handler (makes badge interactive) |
| `className` | `string` | - | Additional CSS classes |

## Example Usage

### Basic Badge
```tsx
import { Badge } from '@/components/media';

<Badge>New</Badge>
<Badge variant="primary">5</Badge>
<Badge variant="success">Online</Badge>
```

### Status Indicators
```tsx
<Badge variant="success" dot />
<Badge variant="error" dot pulse />
<Badge variant="warning" size="sm">Away</Badge>
```

### Notification Counts
```tsx
<div className="relative">
  <button>Messages</button>
  <Badge variant="error" size="sm" className="absolute -top-2 -right-2">
    3
  </Badge>
</div>
```

### Interactive Badges
```tsx
<Badge 
  variant="secondary" 
  onClick={() => console.log('Badge clicked')}
>
  Clickable
</Badge>
```

### Different Shapes
```tsx
<Badge shape="pill">Pill Badge</Badge>
<Badge shape="square">Square</Badge>
<Badge shape="rounded">Rounded</Badge>
```

### Sizes
```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

## Accessibility Considerations

- **Semantic Markup**: Uses appropriate HTML elements and ARIA attributes
- **Keyboard Support**: Interactive badges are focusable and keyboard accessible
- **Screen Reader Support**: Meaningful content and proper labeling
- **Color Contrast**: All variants meet WCAG contrast requirements
- **Focus Indicators**: Clear focus styles for keyboard navigation

## Best Practices

1. **Keep Content Brief**: Use short, descriptive text
2. **Consistent Sizing**: Maintain consistent badge sizes within the same context
3. **Meaningful Colors**: Use variant colors that match their semantic meaning
4. **Accessibility**: Always ensure badges are accessible to screen readers
5. **Performance**: Use dot badges for simple status indicators to reduce DOM complexity