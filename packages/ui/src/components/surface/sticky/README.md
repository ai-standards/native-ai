# Sticky Component

Sticky positioning wrapper for creating elements that stick to viewport edges with enhanced behavior detection.

## Features

- **Multiple Positions**: Top, bottom, left, and right sticky positioning
- **Offset Control**: Precise distance control from edges
- **Shadow Effects**: Optional shadows when element becomes stuck
- **State Detection**: Callbacks when sticky state changes
- **Z-Index Control**: Configurable stacking order
- **Container Scoping**: Sticky within specific containers
- **Smooth Transitions**: Built-in transition effects

## Usage

```tsx
import { Sticky } from '@/components/surface/sticky';

// Basic sticky header
<Sticky position="top">
  <header>Navigation</header>
</Sticky>

// With offset and shadow
<Sticky position="top" offset={64} showShadow>
  <div>Toolbar</div>
</Sticky>

// State change callback
<Sticky onStickyChange={(isSticky) => console.log('Stuck:', isSticky)}>
  <div>Content</div>
</Sticky>
```

## Examples

### Sticky Header
```tsx
<Sticky position="top" showShadow className="bg-white">
  <header className="p-4">
    <h1>Site Title</h1>
    <nav>Navigation items</nav>
  </header>
</Sticky>
```

### Sticky Sidebar
```tsx
<div className="flex">
  <Sticky position="left" className="w-64">
    <aside>Sidebar content</aside>
  </Sticky>
  <main>Main content</main>
</div>
```

### Sticky Toolbar with Offset
```tsx
<div>
  <div className="h-16 bg-blue-600">Fixed Header</div>
  
  <Sticky position="top" offset="64px" showShadow>
    <div className="toolbar">
      <button>Save</button>
      <button>Edit</button>
    </div>
  </Sticky>
  
  <main>Document content</main>
</div>
```

### State-Aware Sticky Element
```tsx
const [isStuck, setIsStuck] = useState(false);

<Sticky
  position="top"
  onStickyChange={setIsStuck}
  className={isStuck ? 'bg-white shadow-lg' : 'bg-transparent'}
>
  <div>Dynamic styling based on sticky state</div>
</Sticky>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Edge to stick to |
| `offset` | `number \| string` | `0` | Distance from the edge |
| `zIndex` | `number` | `10` | Stacking order |
| `showShadow` | `boolean` | `false` | Show shadow when stuck |
| `onStickyChange` | `(isSticky: boolean) => void` | - | Callback for state changes |
| `container` | `RefObject<HTMLElement>` | - | Container to scope stickiness |

## Positions

- **Top**: Sticks to viewport top or container top
- **Bottom**: Sticks to viewport bottom or container bottom  
- **Left**: Sticks to viewport left or container left
- **Right**: Sticks to viewport right or container right

## State Detection

The component uses IntersectionObserver to detect when an element becomes sticky:

```tsx
<Sticky
  onStickyChange={(isSticky) => {
    // Handle sticky state change
    if (isSticky) {
      console.log('Element is now stuck');
    } else {
      console.log('Element is no longer stuck');
    }
  }}
>
  <div>Monitored element</div>
</Sticky>
```

## CSS Custom Properties

The component sets `data-sticky` attribute for CSS targeting:

```css
[data-sticky="true"] {
  /* Styles when element is stuck */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

[data-sticky="false"] {
  /* Styles when element is not stuck */
  box-shadow: none;
}
```

## Best Practices

- Use appropriate z-index values to maintain stacking order
- Consider mobile viewports when setting offsets
- Test sticky behavior in different scroll containers
- Provide visual feedback when elements become stuck
- Use semantic HTML elements (header, nav, aside) when appropriate
- Consider accessibility when sticky elements cover content