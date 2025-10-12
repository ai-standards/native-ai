# Stack Component

A layout component for stacking elements vertically or horizontally with consistent spacing and optional dividers. Provides a simplified API for common stacking patterns while maintaining flexibility.

## Features

- **Directional Stacking**: Vertical and horizontal layouts
- **Consistent Spacing**: Design system spacing tokens
- **Divider Support**: Optional elements between stack items
- **Alignment Control**: Cross-axis and main-axis alignment
- **Wrap Support**: Allow items to wrap to new lines
- **TypeScript Support**: Full type definitions and IntelliSense
- **Semantic HTML**: Proper structure for accessibility
- **Tailwind CSS**: Utility-first CSS implementation

## Usage

```tsx
import { Stack } from '@/Surface/stack';

// Basic vertical stack
<Stack spacing="md">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</Stack>

// Horizontal stack
<Stack direction="horizontal" spacing="lg">
  <button>Cancel</button>
  <button>Submit</button>
</Stack>

// Stack with dividers
<Stack spacing="sm" divider={<hr />}>
  <section>Section 1</section>
  <section>Section 2</section>
  <section>Section 3</section>
</Stack>

// Form layout
<Stack spacing="lg">
  <FormField label="Name" />
  <FormField label="Email" />
  <FormField label="Message" />
</Stack>
```

## Props

| Prop      | Type                                                           | Default      | Description                                    |
|-----------|----------------------------------------------------------------|--------------|------------------------------------------------|
| direction | `'vertical' \| 'horizontal'`                                  | `'vertical'` | The stacking direction                         |
| spacing   | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`     | `'md'`       | The spacing between stack items                |
| align     | `'start' \| 'center' \| 'end' \| 'stretch'`                   | `'stretch'`  | Cross-axis alignment of items                  |
| justify   | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'`    | Main-axis distribution of items                |
| wrap      | `boolean`                                                      | `false`      | Whether items should wrap to new lines         |
| divider   | `React.ReactNode`                                              | -            | Element to render between stack items          |
| className | `string`                                                       | -            | Additional CSS classes                         |
| children  | `React.ReactNode`                                              | -            | The items to stack                             |

## Spacing System

The spacing system uses consistent design tokens:

```tsx
<Stack spacing="none">   {/* 0px */}
<Stack spacing="xs">     {/* 4px */}
<Stack spacing="sm">     {/* 8px */}
<Stack spacing="md">     {/* 16px */}
<Stack spacing="lg">     {/* 24px */}
<Stack spacing="xl">     {/* 32px */}
<Stack spacing="2xl">    {/* 48px */}
```

## Direction Options

### Vertical Stacking (Default)
```tsx
<Stack spacing="md">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</Stack>
```

### Horizontal Stacking
```tsx
<Stack direction="horizontal" spacing="lg">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Stack>
```

## Dividers

### Simple Dividers
```tsx
// Horizontal rule divider
<Stack divider={<hr className="border-gray-300" />}>
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</Stack>

// Custom divider
<Stack divider={<div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />}>
  <div>Content 1</div>
  <div>Content 2</div>
</Stack>
```

### Vertical Dividers (Horizontal Stack)
```tsx
<Stack 
  direction="horizontal" 
  spacing="md"
  divider={<div className="w-px h-6 bg-gray-300" />}
>
  <button>Home</button>
  <button>About</button>
  <button>Contact</button>
</Stack>
```

## Alignment and Distribution

### Cross-Axis Alignment
```tsx
// Center items horizontally (in vertical stack)
<Stack align="center" spacing="md">
  <div className="w-20">Narrow</div>
  <div className="w-40">Wider item</div>
  <div className="w-16">Small</div>
</Stack>

// Stretch items to full width
<Stack align="stretch" spacing="md">
  <button>Full width button 1</button>
  <button>Full width button 2</button>
</Stack>
```

### Main-Axis Distribution
```tsx
// Space between items
<Stack justify="between" className="h-64">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</Stack>

// Center all items
<Stack justify="center" className="h-48">
  <div>Centered content</div>
</Stack>
```

## Common Patterns

### Form Layout
```tsx
<Stack spacing="lg" className="w-full max-w-md">
  <div>
    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
    <p className="text-gray-600">Fill out the form below.</p>
  </div>
  
  <Stack spacing="md">
    <div>
      <label className="block text-sm font-medium mb-1">Name</label>
      <input type="text" className="w-full px-3 py-2 border rounded" />
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-1">Email</label>
      <input type="email" className="w-full px-3 py-2 border rounded" />
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-1">Message</label>
      <textarea className="w-full px-3 py-2 border rounded" rows={4} />
    </div>
  </Stack>
  
  <Stack direction="horizontal" spacing="sm" justify="end">
    <button className="px-4 py-2 border rounded">Cancel</button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
  </Stack>
</Stack>
```

### Navigation Menu
```tsx
<Stack 
  direction="horizontal" 
  spacing="none"
  divider={<div className="w-px h-6 bg-gray-300" />}
  className="bg-white border rounded-lg p-1"
>
  <button className="px-3 py-2 hover:bg-gray-100 rounded">Dashboard</button>
  <button className="px-3 py-2 hover:bg-gray-100 rounded">Projects</button>
  <button className="px-3 py-2 hover:bg-gray-100 rounded">Settings</button>
</Stack>
```

### Article Layout
```tsx
<Stack spacing="xl" className="max-w-2xl mx-auto p-8">
  <Stack spacing="sm">
    <h1 className="text-3xl font-bold">Article Title</h1>
    <div className="text-gray-500">Published March 15, 2024</div>
  </Stack>
  
  <p>Introduction paragraph...</p>
  
  <Stack spacing="lg" divider={<div className="h-px bg-gray-200" />}>
    <section>
      <h2 className="text-xl font-semibold mb-3">Section 1</h2>
      <p>Content for section 1...</p>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold mb-3">Section 2</h2>
      <p>Content for section 2...</p>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
      <p>Concluding thoughts...</p>
    </section>
  </Stack>
  
  <Stack direction="horizontal" spacing="sm" className="pt-4 border-t">
    <span className="text-sm text-gray-500">Tags:</span>
    <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</div>
    <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Layout</div>
  </Stack>
</Stack>
```

### Card Actions
```tsx
<div className="border rounded-lg p-6">
  <Stack spacing="md">
    <Stack spacing="xs">
      <h3 className="text-lg font-semibold">Product Name</h3>
      <p className="text-gray-600">Product description goes here.</p>
    </Stack>
    
    <div className="text-2xl font-bold text-green-600">$29.99</div>
    
    <Stack direction="horizontal" spacing="sm">
      <button className="flex-1 px-4 py-2 border rounded">Add to Wishlist</button>
      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded">Add to Cart</button>
    </Stack>
  </Stack>
</div>
```

## Responsive Behavior

### Responsive Direction
```tsx
<Stack 
  direction="horizontal" 
  spacing="md"
  className="sm:flex-col md:flex-row"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### Responsive Spacing
```tsx
<Stack 
  spacing="sm"
  className="sm:gap-4 md:gap-6 lg:gap-8"
>
  <div>Responsive spacing</div>
  <div>Between items</div>
</Stack>
```

## Accessibility

- Uses proper semantic HTML structure
- Maintains logical tab order
- Supports keyboard navigation
- Compatible with screen readers
- Follows WCAG guidelines for layout
- Proper heading hierarchy when used with content

## Performance

- Lightweight CSS-only implementation
- Efficient React.Children API usage
- Tree-shakable exports
- Minimal runtime overhead
- Optimized for production builds

## Comparison with Flex

| Feature | Stack | Flex |
|---------|-------|------|
| Use Case | Simple stacking patterns | Complex flexbox layouts |
| API | Semantic props (spacing, direction) | Direct flexbox props |
| Dividers | Built-in support | Manual implementation |
| Learning Curve | Beginner-friendly | Requires flexbox knowledge |
| Flexibility | Simplified common patterns | Full flexbox control |

## Related Components

- **Flex** - Full flexbox control with CSS properties
- **Spacer** - Fixed or flexible spacing components  
- **Grid** - CSS Grid-based layout system
- **Container** - Responsive content containers