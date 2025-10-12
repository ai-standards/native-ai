# Flex Component

A flexible container component that provides a clean API for CSS Flexbox properties. Simplifies common flexbox patterns with semantic props and maintains consistency across your application.

## Features

- **Direction Control**: Row, column, and reverse variants
- **Flexible Wrapping**: Control how items wrap within the container
- **Alignment Options**: Comprehensive justify and align controls
- **Spacing System**: Consistent gap sizes using design tokens
- **Growth Control**: Control flex grow and shrink behavior
- **Inline Support**: Render as inline-flex when needed
- **TypeScript Support**: Full type definitions and IntelliSense
- **Tailwind CSS**: Built with utility-first CSS framework

## Usage

```tsx
import { Flex } from '@/Surface/flex';

// Basic horizontal layout
<Flex gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>

// Vertical stack
<Flex direction="col" gap="lg">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Flex>

// Centered content
<Flex justify="center" align="center" className="h-64">
  <div>Centered content</div>
</Flex>

// Navigation bar layout
<Flex justify="between" align="center" className="w-full p-4">
  <div>Logo</div>
  <nav>Menu items</nav>
  <div>Actions</div>
</Flex>
```

## Props

| Prop      | Type                                                           | Default    | Description                                    |
|-----------|----------------------------------------------------------------|------------|------------------------------------------------|
| direction | `'row' \| 'row-reverse' \| 'col' \| 'col-reverse'`            | `'row'`    | Sets the flex-direction property               |
| wrap      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                        | `'nowrap'` | Sets the flex-wrap property                    |
| justify   | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `'start'`  | Sets the justify-content property              |
| align     | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'`     | `'stretch'` | Sets the align-items property                 |
| gap       | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`     | `'none'`   | Sets the gap between flex items                |
| grow      | `boolean`                                                      | `false`    | Whether the container should grow              |
| shrink    | `boolean`                                                      | `true`     | Whether the container should shrink            |
| inline    | `boolean`                                                      | `false`    | Renders as inline-flex instead of flex         |
| className | `string`                                                       | -          | Additional CSS classes                         |
| children  | `React.ReactNode`                                              | -          | The content to display inside the container    |

## Direction Options

### Row (Horizontal)
```tsx
<Flex direction="row" gap="md">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Flex>
```

### Column (Vertical)
```tsx
<Flex direction="col" gap="md">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Flex>
```

### Reverse Directions
```tsx
// Right to left
<Flex direction="row-reverse" gap="md">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Flex>

// Bottom to top
<Flex direction="col-reverse" gap="md">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Flex>
```

## Alignment and Justification

### Justify Content (Main Axis)
```tsx
// Space between items
<Flex justify="between">
  <div>Left</div>
  <div>Right</div>
</Flex>

// Center all items
<Flex justify="center">
  <div>Centered</div>
</Flex>

// Distribute space around items
<Flex justify="around">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Flex>
```

### Align Items (Cross Axis)
```tsx
// Center items vertically
<Flex align="center" className="h-32">
  <div>Centered vertically</div>
</Flex>

// Align to baseline
<Flex align="baseline">
  <h1>Large text</h1>
  <p>Small text</p>
</Flex>
```

## Gap System

The gap system uses consistent spacing tokens:

```tsx
<Flex gap="none">   {/* 0px */}
<Flex gap="xs">     {/* 4px */}
<Flex gap="sm">     {/* 8px */}
<Flex gap="md">     {/* 16px */}
<Flex gap="lg">     {/* 24px */}
<Flex gap="xl">     {/* 32px */}
<Flex gap="2xl">    {/* 48px */}
```

## Common Patterns

### Navigation Bar
```tsx
<Flex justify="between" align="center" className="w-full p-4 bg-white border-b">
  <div className="flex items-center gap-2">
    <Logo />
    <Brand />
  </div>
  <nav className="flex gap-4">
    <NavLink>Home</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
  </nav>
  <div className="flex gap-2">
    <Button variant="outline">Sign In</Button>
    <Button>Sign Up</Button>
  </div>
</Flex>
```

### Card Layout
```tsx
<Flex direction="col" gap="md" className="p-6 border rounded-lg">
  <Flex justify="between" align="start">
    <div>
      <h3>Card Title</h3>
      <p>Subtitle</p>
    </div>
    <Badge>New</Badge>
  </Flex>
  
  <div>Card content goes here...</div>
  
  <Flex gap="sm" className="pt-4 border-t">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </Flex>
</Flex>
```

### Responsive Grid Alternative
```tsx
<Flex wrap gap="md" className="w-full">
  <div className="flex-1 min-w-64">Item 1</div>
  <div className="flex-1 min-w-64">Item 2</div>
  <div className="flex-1 min-w-64">Item 3</div>
</Flex>
```

## Accessibility

- Uses semantic HTML structure
- Maintains proper focus order
- Supports keyboard navigation
- Compatible with screen readers
- Follows WCAG guidelines for layout

## Performance

- Lightweight CSS-only implementation
- No JavaScript overhead
- Tree-shakable exports
- Optimized for production builds

## Customization

### Custom Gap Sizes
```tsx
// Using Tailwind utilities
<Flex className="gap-3">  {/* 12px custom gap */}

// Using CSS custom properties
<Flex style={{ gap: '20px' }}>
```

### Advanced Styling
```tsx
<Flex 
  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6"
  justify="center" 
  align="center"
>
  <div>Styled flex container</div>
</Flex>
```

## Related Components

- **Stack** - Simplified vertical/horizontal stacking with dividers
- **Grid** - CSS Grid-based layout system
- **Container** - Responsive content containers
- **Spacer** - Flexible spacing component