# Media Components

This directory contains media-related components for displaying images, icons, avatars, badges, and other visual content.

## Components

### [Avatar](./avatar/README.md)
User profile images with fallbacks, status indicators, and grouping functionality.
- Multiple sizes from xs to 2xl
- Flexible shapes (circle, square, rounded)
- Fallback to initials when image fails to load
- Status indicators with predefined or custom colors
- AvatarGroup for displaying multiple avatars with overflow handling

### [Badge](./badge/README.md)
Small status and labeling components with multiple variants and interactive features.
- Variant styles (default, success, warning, error, info, outline)
- Multiple sizes and shapes
- Icon support with configurable positioning
- Removable badges with close buttons
- Dot badges for notification indicators
- BadgeGroup for organizing multiple badges

### [Icon](./icon/README.md)
Comprehensive icon library with VS Code-inspired design and extensible icon registry.
- 30+ built-in Lucide icons
- Extensible icon registry system
- Consistent sizing and styling
- Full TypeScript support

### [Image](./image/README.md)
Enhanced image component with loading states, error handling, and gallery functionality.
- Multiple aspect ratios (square, video, photo, auto)
- Configurable sizes and object fit options
- Loading placeholders and error fallbacks
- Overlay and hover overlay support
- ImageGallery for grid layouts with customizable columns and spacing

### Video
Media player component for embedding videos with built-in controls and responsive behavior.

**Features:** Native controls, autoplay/mute support, responsive sizing, aspect ratio control, caption support, poster image  
**Documentation:** [Video README](./video/README.md)

### Audio
Audio player component with playback controls and accessibility support.

**Features:** Native controls, autoplay, volume control, accessibility labels, responsive container  
**Documentation:** [Audio README](./audio/README.md)

### Icon
Scalable icon component for rendering system or custom icons with flexible sizing and coloring.

**Features:** SVG-based rendering, size variants, color theming, inline/block display modes, accessibility labels  
**Documentation:** [Icon README](./icon/README.md)

### Avatar
Avatar component for displaying user profile images, initials, or icons with shape and size variants.

**Features:** Image or fallback text, circular/square shapes, size variants, status badge support, accessibility labels  
**Documentation:** [Avatar README](./avatar/README.md)

### Figure
Container for media elements with optional caption support for semantic, accessible presentation.

**Features:** Integrated caption, responsive sizing, flexible media content (image/video), alignment options  
**Documentation:** [Figure README](./figure/README.md)

### Carousel
Carousel component for cycling through media content with swipe, keyboard, and autoplay support.

**Features:** Horizontal scrolling, autoplay, keyboard navigation, swipe gestures, pagination controls, responsive layout  
**Documentation:** [Carousel README](./carousel/README.md)

---

## Design Principles

- **Accessible Media** – Native HTML semantics and ARIA attributes for inclusive experiences.  
- **Responsive First** – Media elements adapt fluidly to different screen sizes and orientations.  
- **Composable Surfaces** – Works seamlessly within cards, modals, and sections.  
- **Theming Support** – Full compatibility with light/dark themes and custom palettes.  
- **Performance** – Lazy loading and optimized rendering strategies for fast loading times.
