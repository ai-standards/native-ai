# Avatar Component

A flexible avatar component for displaying user profile images, initials, and status indicators with support for different sizes, shapes, and grouping.

## Features

- **Multiple Sizes**: Six size variants from `xs` to `2xl`
- **Flexible Shapes**: Circle, square, and rounded rectangle shapes
- **Fallback Support**: Automatic fallback to initials when image fails to load
- **Status Indicators**: Built-in status dots with predefined or custom colors
- **Visual Variants**: Default, soft, and outline styling options
- **Loading States**: Automatic loading spinner while image loads
- **Grouping**: AvatarGroup component for displaying multiple avatars with overflow handling
- **Accessibility**: Full ARIA support and keyboard navigation

## Components

### Avatar
The main avatar component that displays user images or initials with optional status indicators.

### AvatarGroup
Container component for displaying multiple avatars with configurable spacing and overflow behavior.

## Usage

### Basic Avatar

```tsx
import { Avatar } from '@/components/media/avatar';

// With image
<Avatar 
  src="/path/to/image.jpg" 
  alt="John Doe" 
/>

// With fallback initials
<Avatar 
  alt="John Doe"
  fallback="JD" 
/>

// Auto-generated initials from alt text
<Avatar alt="John Doe" />
```

### Sizes

```tsx
<Avatar size="xs" src="/image.jpg" alt="Extra small" />
<Avatar size="sm" src="/image.jpg" alt="Small" />
<Avatar size="md" src="/image.jpg" alt="Medium" />  {/* default */}
<Avatar size="lg" src="/image.jpg" alt="Large" />
<Avatar size="xl" src="/image.jpg" alt="Extra large" />
<Avatar size="2xl" src="/image.jpg" alt="2X Large" />
```

### Shapes

```tsx
<Avatar shape="circle" src="/image.jpg" alt="Circle" />  {/* default */}
<Avatar shape="rounded" src="/image.jpg" alt="Rounded" />
<Avatar shape="square" src="/image.jpg" alt="Square" />
```

### Status Indicators

```tsx
<Avatar 
  src="/image.jpg" 
  alt="Online user"
  status="online" 
/>

<Avatar 
  src="/image.jpg" 
  alt="Custom status"
  statusColor="#8b5cf6" 
/>
```

### Variants

```tsx
<Avatar variant="default" fallback="DF" />  {/* default */}
<Avatar variant="soft" fallback="SF" />
<Avatar variant="outline" fallback="OL" />
```

### Avatar Group

```tsx
import { Avatar, AvatarGroup } from '@/components/media/avatar';

<AvatarGroup max={3} spacing="normal">
  <Avatar src="/user1.jpg" alt="User 1" />
  <Avatar src="/user2.jpg" alt="User 2" />
  <Avatar src="/user3.jpg" alt="User 3" />
  <Avatar src="/user4.jpg" alt="User 4" />
  <Avatar src="/user5.jpg" alt="User 5" />
</AvatarGroup>
```

## Props

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for the image |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Avatar size variant |
| `shape` | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Avatar shape |
| `variant` | `'default' \| 'soft' \| 'outline'` | `'default'` | Visual variant for fallback display |
| `fallback` | `string` | - | Fallback text when image fails to load |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | - | Status indicator |
| `statusColor` | `string` | - | Custom status indicator color |
| `className` | `string` | - | Additional CSS classes |

### AvatarGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `max` | `number` | `5` | Maximum number of avatars to show before overflow |
| `size` | `AvatarProps['size']` | `'md'` | Size for all avatars in the group |
| `spacing` | `'tight' \| 'normal' \| 'loose'` | `'normal'` | Spacing between avatars |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Avatar components to display |

## Size Reference

| Size | Dimensions | Text Size |
|------|------------|-----------|
| `xs` | 24×24px | `text-xs` |
| `sm` | 32×32px | `text-sm` |
| `md` | 40×40px | `text-base` |
| `lg` | 48×48px | `text-lg` |
| `xl` | 64×64px | `text-xl` |
| `2xl` | 80×80px | `text-2xl` |

## Status Colors

| Status | Color |
|--------|-------|
| `online` | Green (`bg-green-500`) |
| `offline` | Gray (`bg-gray-400`) |
| `away` | Yellow (`bg-yellow-500`) |
| `busy` | Red (`bg-red-500`) |

## Accessibility

- Uses semantic `img` elements with proper alt text
- Status indicators include `aria-label` attributes
- Supports keyboard navigation and screen readers
- Maintains proper focus management
- Color contrast meets WCAG 2.1 AA standards

## Best Practices

1. **Always provide alt text**: Use descriptive alt text for accessibility
2. **Use appropriate sizes**: Choose sizes that fit your design context
3. **Provide fallbacks**: Always include fallback text for when images fail
4. **Consider loading states**: The component handles loading automatically
5. **Group related avatars**: Use AvatarGroup for teams or collections
6. **Status indicators**: Use status props consistently across your app
7. **Performance**: Use optimized images and consider lazy loading for large lists

## Examples

### User Profile Header

```tsx
<div className="flex items-center space-x-4">
  <Avatar 
    size="xl"
    src="/profile.jpg"
    alt="Sarah Johnson"
    status="online"
  />
  <div>
    <h2 className="text-xl font-semibold">Sarah Johnson</h2>
    <p className="text-gray-600">Senior Developer</p>
  </div>
</div>
```

### Team Members

```tsx
<div className="space-y-4">
  <h3 className="text-lg font-semibold">Development Team</h3>
  <AvatarGroup max={4} spacing="tight">
    <Avatar src="/dev1.jpg" alt="Alice" />
    <Avatar src="/dev2.jpg" alt="Bob" />
    <Avatar src="/dev3.jpg" alt="Charlie" />
    <Avatar src="/dev4.jpg" alt="Diana" />
    <Avatar src="/dev5.jpg" alt="Eve" />
    <Avatar src="/dev6.jpg" alt="Frank" />
  </AvatarGroup>
</div>
```

### Comment Thread

```tsx
<div className="space-y-3">
  {comments.map(comment => (
    <div key={comment.id} className="flex space-x-3">
      <Avatar 
        size="sm"
        src={comment.author.avatar}
        alt={comment.author.name}
        status={comment.author.status}
      />
      <div className="flex-1">
        <div className="text-sm font-medium">{comment.author.name}</div>
        <div className="text-gray-600">{comment.content}</div>
      </div>
    </div>
  ))}
</div>
```