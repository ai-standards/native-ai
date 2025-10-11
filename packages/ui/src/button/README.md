# Button Component

A flexible, accessible button component with multiple variants, sizes, and states.

## Features

- **Multiple Variants**: Primary, secondary, outline, ghost, and destructive styles
- **Size Options**: Small, medium, and large sizes
- **Loading State**: Built-in loading spinner with proper accessibility
- **Accessibility**: Proper focus management and ARIA attributes
- **TypeScript**: Full TypeScript support with proper type definitions

## Usage

```tsx
import { Button } from '@/lib/ui/button';

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="secondary">Secondary</Button>

// With size
<Button size="lg">Large Button</Button>

// Loading state
<Button loading>Loading...</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Custom styling
<Button className="custom-class">Custom</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows loading spinner and disables interaction |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `React.ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |

## Variants

### Primary
Default button style with blue background and white text.

### Secondary  
Light gray background with dark text and border.

### Outline
Transparent background with gray border and text.

### Ghost
Transparent background with gray text, shows background on hover.

### Destructive
Red background for dangerous actions like delete operations.

## Accessibility

- Proper focus management with visible focus rings
- Keyboard navigation support
- Loading state properly communicated to screen readers
- Disabled state prevents interaction and is announced

## Examples

```tsx
// Action buttons
<Button variant="primary">Save</Button>
<Button variant="destructive">Delete</Button>

// Form buttons
<Button type="submit" loading={isSubmitting}>
  {isSubmitting ? 'Saving...' : 'Save Changes'}
</Button>

// Navigation
<Button variant="ghost" onClick={() => router.back()}>
  Back
</Button>
```