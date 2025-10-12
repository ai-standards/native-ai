# Textarea Component

A flexible textarea component with labels, validation, and multiple variants. Built with accessibility in mind and supports different resize behaviors.

## Features

- **Multiple Variants**: Default and filled styles
- **Validation**: Built-in error and helper text support
- **Resize Options**: Control how users can resize the textarea
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript**: Full type safety with TypeScript support
- **Customizable**: Supports custom styling via className prop

## Usage

```tsx
import { Textarea } from '@/components/form/textarea';

// Basic usage
<Textarea placeholder="Enter your message..." />

// With label and validation
<Textarea
  label="Message"
  placeholder="Type your message..."
  error="This field is required"
/>

// Filled variant with helper text
<Textarea
  label="Description"
  variant="filled"
  placeholder="Describe your project..."
  helperText="Provide as much detail as possible"
  rows={5}
/>

// Custom resize behavior
<Textarea
  label="Comments"
  resize="vertical"
  rows={4}
  placeholder="Add your comments..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the textarea |
| `error` | `string` | - | Error message to display below the textarea |
| `helperText` | `string` | - | Helper text to display below the textarea |
| `variant` | `'default' \| 'filled'` | `'default'` | Visual style variant |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Resize behavior |
| `rows` | `number` | `3` | Number of visible text lines |
| `className` | `string` | - | Additional CSS classes |

All standard HTML textarea attributes are also supported.

## Examples

### Basic Textarea
```tsx
<Textarea placeholder="Enter text here..." />
```

### With Label and Helper Text
```tsx
<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  helperText="Keep it brief and professional"
/>
```

### Error State
```tsx
<Textarea
  label="Comments"
  error="This field is required"
  placeholder="Add your comments..."
/>
```

### Filled Variant
```tsx
<Textarea
  variant="filled"
  label="Notes"
  placeholder="Add your notes..."
/>
```

### Custom Size and Resize
```tsx
<Textarea
  label="Article Content"
  rows={8}
  resize="both"
  placeholder="Write your article..."
/>
```

### No Resize
```tsx
<Textarea
  label="Fixed Size"
  resize="none"
  rows={4}
  placeholder="This cannot be resized..."
/>
```

## Accessibility

- Uses proper semantic HTML with `<textarea>` element
- Associates labels with form controls using `htmlFor` and `id`
- Provides ARIA attributes for screen readers
- Supports keyboard navigation
- Error states are properly announced to assistive technologies

## Styling

The component uses Tailwind CSS classes and can be customized using the `className` prop. The component follows the design system's color palette and spacing guidelines.

## Testing

The component includes comprehensive tests covering:
- Rendering with different props
- User interactions
- Accessibility features
- Error states
- Variant styles
- Resize behaviors