# Spacer Component

A flexible spacing component that creates consistent whitespace between elements. Can be used for both fixed spacing and flexible space distribution in layouts.

## Features

- **Fixed Sizing**: Consistent spacing using design system tokens
- **Flexible Growth**: Can expand to fill available space
- **Axis Control**: Apply spacing to horizontal, vertical, or both axes
- **Minimal Footprint**: Lightweight implementation with no visual styling
- **Layout Integration**: Works seamlessly with Flex, Stack, and other layout components
- **TypeScript Support**: Full type definitions and IntelliSense
- **Responsive Ready**: Easy to customize with responsive utilities

## Usage

```tsx
import { Spacer } from '@/Surface/spacer';

// Fixed horizontal spacing
<div className="flex">
  <div>Left content</div>
  <Spacer size="md" axis="horizontal" />
  <div>Right content</div>
</div>

// Fixed vertical spacing
<div className="flex flex-col">
  <div>Top content</div>
  <Spacer size="lg" axis="vertical" />
  <div>Bottom content</div>
</div>

// Flexible spacer (grows to fill space)
<div className="flex">
  <div>Left</div>
  <Spacer flex />
  <div>Right</div>
</div>

// Navigation layout
<nav className="flex items-center">
  <Logo />
  <Spacer size="sm" axis="horizontal" />
  <Brand />
  <Spacer flex />
  <MenuButton />
</nav>
```

## Props

| Prop      | Type                                                    | Default | Description                                    |
|-----------|---------------------------------------------------------|---------|------------------------------------------------|
| size      | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | `'md'`  | The size of the spacer                         |
| axis      | `'horizontal' \| 'vertical' \| 'both'`                  | `'both'` | Which axis/axes to apply spacing to           |
| flex      | `boolean`                                               | `false`  | Whether the spacer should grow to fill space  |
| className | `string`                                                | -        | Additional CSS classes                         |
| style     | `React.CSSProperties`                                   | -        | Custom inline styles                           |

## Size System

The size system uses consistent design tokens:

| Size  | Pixels | Use Case                    |
|-------|--------|-----------------------------|
| `xs`  | 4px    | Minimal spacing             |
| `sm`  | 8px    | Tight layouts               |
| `md`  | 16px   | Default spacing             |
| `lg`  | 24px   | Comfortable spacing         |
| `xl`  | 32px   | Generous spacing            |
| `2xl` | 48px   | Section separation          |
| `3xl` | 64px   | Large section gaps          |
| `4xl` | 96px   | Major layout divisions      |

## Axis Options

### Horizontal Spacing (Width Only)
```tsx
<div className="flex items-center">
  <button>First</button>
  <Spacer size="md" axis="horizontal" />
  <button>Second</button>
</div>
```

### Vertical Spacing (Height Only)
```tsx
<div className="flex flex-col">
  <h1>Title</h1>
  <Spacer size="lg" axis="vertical" />
  <p>Content</p>
</div>
```

### Both Axes (Width and Height)
```tsx
<div className="flex">
  <div>Before</div>
  <Spacer size="xl" axis="both" />
  <div>After</div>
</div>
```

## Flexible Spacer

Use the `flex` prop to create spacers that grow to fill available space:

```tsx
// Push content to opposite ends
<div className="flex">
  <div>Left content</div>
  <Spacer flex />
  <div>Right content</div>
</div>

// Multiple flexible spacers distribute space evenly
<div className="flex">
  <div>A</div>
  <Spacer flex />
  <div>B</div>
  <Spacer flex />
  <div>C</div>
</div>
```

## Common Patterns

### Navigation Bar
```tsx
<nav className="flex items-center p-4 bg-white border-b">
  {/* Logo and brand */}
  <div className="flex items-center">
    <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
    <Spacer size="sm" axis="horizontal" />
    <span className="font-semibold">Brand Name</span>
  </div>
  
  {/* Push menu to the right */}
  <Spacer flex />
  
  {/* Menu items */}
  <div className="flex items-center">
    <button>Home</button>
    <Spacer size="md" axis="horizontal" />
    <button>About</button>
    <Spacer size="md" axis="horizontal" />
    <button>Contact</button>
  </div>
</nav>
```

### Form Layout
```tsx
<form className="flex flex-col w-80">
  <label>Name</label>
  <Spacer size="xs" axis="vertical" />
  <input type="text" className="border rounded px-3 py-2" />
  
  <Spacer size="lg" axis="vertical" />
  
  <label>Email</label>
  <Spacer size="xs" axis="vertical" />
  <input type="email" className="border rounded px-3 py-2" />
  
  <Spacer size="xl" axis="vertical" />
  
  <div className="flex">
    <button type="button" className="border rounded px-4 py-2">
      Cancel
    </button>
    <Spacer size="sm" axis="horizontal" />
    <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
      Submit
    </button>
  </div>
</form>
```

### Card Actions
```tsx
<div className="border rounded-lg p-6">
  <h3 className="text-lg font-semibold">Product Title</h3>
  <Spacer size="xs" axis="vertical" />
  <p className="text-gray-600">Product description here.</p>
  
  <Spacer size="md" axis="vertical" />
  
  <div className="flex items-center">
    <span className="text-xl font-bold text-green-600">$29.99</span>
    <Spacer flex />
    <div className="flex">
      <button className="border rounded px-3 py-1">
        Details
      </button>
      <Spacer size="sm" axis="horizontal" />
      <button className="bg-blue-600 text-white rounded px-3 py-1">
        Buy Now
      </button>
    </div>
  </div>
</div>
```

### Toolbar Layout
```tsx
<div className="flex items-center p-3 bg-gray-50 border rounded">
  {/* Tool groups */}
  <div className="flex">
    <button className="p-2 hover:bg-gray-200 rounded">📁</button>
    <button className="p-2 hover:bg-gray-200 rounded">💾</button>
    <button className="p-2 hover:bg-gray-200 rounded">✂️</button>
  </div>
  
  <Spacer size="md" axis="horizontal" />
  
  <div className="flex">
    <button className="p-2 hover:bg-gray-200 rounded">🔍</button>
    <button className="p-2 hover:bg-gray-200 rounded">⚙️</button>
  </div>
  
  {/* Center content */}
  <Spacer flex />
  <div className="text-sm text-gray-600">document.txt</div>
  <Spacer flex />
  
  {/* Right-aligned status */}
  <div className="flex items-center text-xs text-gray-500">
    <span>100%</span>
    <Spacer size="sm" axis="horizontal" />
    <span>Ready</span>
  </div>
</div>
```

### Article Layout
```tsx
<article className="max-w-2xl mx-auto">
  <h1 className="text-3xl font-bold">Article Title</h1>
  <Spacer size="sm" axis="vertical" />
  <div className="text-gray-500">Published March 15, 2024</div>
  
  <Spacer size="2xl" axis="vertical" />
  
  <p>Introduction paragraph with important context...</p>
  
  <Spacer size="xl" axis="vertical" />
  
  <h2 className="text-xl font-semibold">Section Heading</h2>
  <Spacer size="md" axis="vertical" />
  <p>Section content goes here...</p>
  
  <Spacer size="3xl" axis="vertical" />
  
  <footer className="flex items-center text-sm text-gray-500">
    <span>Tags:</span>
    <Spacer size="sm" axis="horizontal" />
    <div className="flex gap-2">
      <span className="px-2 py-1 bg-blue-100 rounded">React</span>
      <span className="px-2 py-1 bg-blue-100 rounded">Layout</span>
    </div>
  </footer>
</article>
```

## Responsive Spacing

### Responsive Sizes
```tsx
// Different spacing at different breakpoints
<Spacer 
  size="sm" 
  axis="vertical"
  className="sm:h-4 md:h-6 lg:h-8" 
/>
```

### Conditional Spacing
```tsx
// Show spacer only on larger screens
<Spacer 
  size="lg" 
  axis="horizontal"
  className="hidden md:block" 
/>
```

## Custom Spacing

### Using CSS Custom Properties
```tsx
<Spacer 
  axis="horizontal"
  style={{ width: '20px' }}
/>

<Spacer 
  axis="vertical"
  style={{ height: 'calc(100vh - 200px)' }}
/>
```

### Using Tailwind Classes
```tsx
<Spacer 
  axis="both"
  className="w-6 h-6" // 24px x 24px
/>
```

## Accessibility

- **Semantic Neutrality**: Spacer is purely presentational
- **Screen Reader Friendly**: No content to interfere with navigation
- **Keyboard Navigation**: Doesn't affect tab order
- **Focus Management**: Invisible to focus management
- **ARIA Compliance**: No ARIA attributes needed

## Performance

- **Minimal Footprint**: Single `<div>` with minimal styles
- **No JavaScript**: Pure CSS implementation
- **Tree Shakable**: Only imports what you use
- **CSS Optimized**: Minimal style calculations
- **Render Efficient**: No complex logic or state

## Comparison with Alternatives

| Approach | Spacer Component | CSS Margins | Flexbox Gap |
|----------|------------------|-------------|-------------|
| **Consistency** | ✅ Design system tokens | ❌ Manual values | ❌ Manual values |
| **Flexibility** | ✅ Fixed or flexible | ❌ Fixed only | ❌ Fixed only |
| **Axis Control** | ✅ Horizontal/vertical/both | ⚠️ Requires direction classes | ❌ Both axes always |
| **Responsive** | ✅ Easy with utilities | ⚠️ Requires responsive classes | ⚠️ Requires responsive classes |
| **Semantic** | ✅ Explicit spacing intent | ❌ Mixed with content styling | ❌ Container-level only |

## Best Practices

### When to Use Spacer
- **Explicit spacing requirements** between specific elements
- **Flexible layouts** that need to adapt to content
- **Navigation bars** with grouped and distributed content
- **Form layouts** with consistent field spacing
- **Complex alignments** requiring precise control

### When Not to Use Spacer
- **Simple margins** between adjacent elements (use CSS margin instead)
- **Grid layouts** with uniform spacing (use CSS Grid gap instead)
- **Text content** with natural line spacing (use CSS line-height instead)

### Performance Tips
- Prefer `axis="horizontal"` or `axis="vertical"` over `axis="both"` when possible
- Use `flex` spacers sparingly in deeply nested layouts
- Combine with CSS utilities for responsive behavior
- Consider CSS margins for simple adjacent element spacing

## Related Components

- **Stack** - Simplified stacking with built-in spacing
- **Flex** - Full flexbox control with gap support
- **Grid** - CSS Grid layouts with gap properties
- **Container** - Responsive content containers with padding