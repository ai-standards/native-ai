# Link Component

Enhanced link component with active state management, external link detection, and comprehensive accessibility features.

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
import { Link } from '@/components/navigation/link';

// Basic usage
<Link href="/about">About Page</Link>

// External link (auto-detected)
<Link href="https://example.com">External Site</Link>

// With variants
<Link href="/docs" variant="primary">Documentation</Link>
<Link href="/help" variant="secondary">Help</Link>

// Active state
<Link href="/current-page" isActive>Current Page</Link>

// Custom styling
<Link 
  href="/profile" 
  size="lg"
  underline="always"
  variant="primary"
>
  User Profile
</Link>

// Disabled
<Link href="/unavailable" disabled>
  Coming Soon
</Link>
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