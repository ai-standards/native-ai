# Spinner

A lightweight loading indicator for ongoing background processes, async actions, or pending UI updates.

## Features

- **Indeterminate loading indicator** - Shows ongoing process without specific progress
- **Size and color variants** - Multiple sizes and semantic color options
- **Accessible role and aria-busy support** - Proper screen reader announcements
- **Inline or block display modes** - Flexible positioning options
- **Smooth animations** - CSS-based spinning animation
- **Lightweight** - Minimal DOM footprint and CSS

## Usage

### Basic Spinner

```tsx
import { Spinner } from '@/components/feedback/spinner';

function Example() {
  return <Spinner />;
}
```

### Size Variants

```tsx
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" /> {/* default */}
<Spinner size="lg" />
<Spinner size="xl" />
```

### Color Variants

```tsx
<Spinner variant="primary" />   {/* default - blue */}
<Spinner variant="secondary" /> {/* gray */}
<Spinner variant="success" />   {/* green */}
<Spinner variant="warning" />   {/* yellow */}
<Spinner variant="error" />     {/* red */}
```

### Display Modes

```tsx
{/* Inline with text */}
<p>Loading <Spinner display="inline" size="sm" /> please wait...</p>

{/* Block centered */}
<div className="py-8">
  <Spinner display="block" />
</div>
```

### In Context Examples

```tsx
// Loading button
<button disabled className="flex items-center gap-2">
  <Spinner size="sm" />
  Saving...
</button>

// Loading card
<div className="flex justify-center py-8">
  <div className="text-center">
    <Spinner size="lg" />
    <p className="mt-2 text-sm text-gray-600">Loading data...</p>
  </div>
</div>

// Processing indicator
<p className="text-sm">
  Processing your request <Spinner size="xs" />
</p>
```

## API Reference

### Spinner Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the spinner |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant |
| `display` | `'inline' \| 'block'` | `'inline'` | Display mode |
| `label` | `string` | `'Loading...'` | Accessible label for screen readers |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

- Uses `role="status"` to announce loading state to screen readers
- Includes `aria-busy="true"` to indicate active loading
- Provides `aria-label` for meaningful description
- Hidden text content using `sr-only` class for screen reader users
- Respects `prefers-reduced-motion` for accessibility

## Design Guidelines

### When to Use
- **Loading states** - During async operations or data fetching
- **Processing** - While forms are being submitted or processed  
- **Background tasks** - For ongoing operations that don't block interaction
- **Content updates** - When refreshing or updating sections

### When Not to Use
- **Progress tracking** - Use Progress component for determinate progress
- **Page loads** - Consider Skeleton for better perceived performance
- **Long processes** - Add additional context or progress information
- **Critical actions** - Combine with proper loading states and feedback

### Visual Design
- Keep spinners appropriately sized for their context
- Use semantic colors that match the action (success for saves, etc.)
- Ensure sufficient contrast against backgrounds
- Consider placement to avoid layout shift
- Pair with descriptive text when the context isn't obvious

## Examples

### Loading States
```tsx
// Button loading
<Button disabled>
  <Spinner size="sm" />
  Saving Changes
</Button>

// Content loading
<div className="min-h-[200px] flex items-center justify-center">
  <Spinner size="lg" label="Loading content" />
</div>
```

### Async Operations
```tsx
function AsyncComponent() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitData();
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? <Spinner size="sm" /> : 'Submit'}
    </button>
  );
}
```