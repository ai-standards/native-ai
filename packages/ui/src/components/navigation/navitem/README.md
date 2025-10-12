# NavItem Component

Reusable navigation item wrapper for building consistent navigation structures with icons, badges, and flexible styling options.

## Features

- **Icon Support** - Optional icons with consistent spacing
- **Badge/Counter** - Display notifications or counts
- **Active State** - Visual indication for current selection
- **Multiple Variants** - Default, ghost, and subtle styling
- **Link Behavior** - Supports both href links and click handlers
- **Accessibility** - Proper ARIA attributes and keyboard support
- **Flexible Sizing** - Small, medium, and large size options

## Usage

```tsx
import { NavItem } from '@/components/navigation/navitem';

// Basic usage
<NavItem>Dashboard</NavItem>

// With icon and badge
<NavItem 
  icon={<HomeIcon />}
  badge={<Badge count={5} />}
>
  Messages
</NavItem>

// As link
<NavItem href="/settings" icon={<SettingsIcon />}>
  Settings
</NavItem>

// With click handler
<NavItem 
  onClick={() => handleNavigation()}
  isActive
  variant="ghost"
>
  Current Page
</NavItem>

// Disabled state
<NavItem disabled icon={<LockIcon />}>
  Premium Feature
</NavItem>
```

## Props

- `icon` - Optional icon element to display
- `badge` - Optional badge/counter element
- `isActive` - Whether item represents current selection
- `disabled` - Prevent interaction
- `href` - Link destination (renders as anchor)
- `onClick` - Click handler (renders as button)
- `variant` - Visual style: default, ghost, subtle
- `size` - Size variant: sm, md, lg
- `hoverable` - Whether to show hover effects

## Variants

- **Default** - Border and background styling
- **Ghost** - Minimal styling with hover effects
- **Subtle** - Light hover effects without borders

## Accessibility

- Proper `aria-current="page"` for active items
- `aria-disabled` attribute for disabled items
- Keyboard navigation support with tabIndex
- Screen reader compatible with proper roles