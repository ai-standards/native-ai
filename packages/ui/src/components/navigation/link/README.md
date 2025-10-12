# NavLink Component

Enhanced navigation link component with active state management, external link detection, and comprehensive accessibility features.

## Features

- **Visual Variants** - Multiple color schemes for different contexts
- **Size Options** - Small, medium, and large text sizes
- **Active State** - Visual indication for current page links
- **External Links** - Automatic detection with security attributes
- **Underline Control** - Configurable underline behavior
- **Disabled State** - Prevents interaction when disabled
- **Accessibility** - Full keyboard and screen reader support

## Usage

```tsx
import { NavLink } from '@/components/navigation/link';

// Basic usage
<NavLink href="/about">About Page</NavLink>

// External link (auto-detected)
<NavLink href="https://example.com">External Site</NavLink>

// With variants
<NavLink href="/docs" variant="primary">Documentation</NavLink>
<NavLink href="/help" variant="secondary">Help</NavLink>

// Active state
<NavLink href="/current-page" isActive>Current Page</NavLink>

// Custom styling
<NavLink 
  href="/profile" 
  size="lg"
  underline="always"
  variant="primary"
>
  User Profile
</NavLink>

// Disabled
<NavLink href="/unavailable" disabled>
  Coming Soon
</NavLink>
```

## Props

- `variant` - Visual style: default, primary, secondary, muted, destructive
- `size` - Text size: sm, md, lg
- `isActive` - Whether link represents current page
- `external` - Manually mark as external link
- `showExternalIcon` - Show icon for external links (default: true)
- `underline` - Underline behavior: none, hover, always
- `disabled` - Prevent interaction and navigation

## Accessibility

- Proper `aria-current="page"` for active links
- `aria-disabled` attribute for disabled links
- Focus ring with keyboard navigation
- External links include `rel="noopener noreferrer"` security
- Screen reader compatible external link indicators