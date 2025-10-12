# Native AI UI Components

A comprehensive React component library built with TypeScript, Tailwind CSS, and modern accessibility standards.

## Component Sections

### 📝 [Form Components](./form/README.md)
Interactive form elements and controls for user input and data collection.

**Current:** Button, Input  
**Planned:** Textarea, Select, Checkbox, Radio, Switch, DatePicker, FileUpload, and more

### 🏗️ [Layout Components](./layout/README.md)
Structural components for organizing and positioning content on the page.

**Current:** Card, Layout  
**Planned:** Container, Grid, Modal, Drawer, Accordion, Header, Footer, and more

### 🧭 [Navigation Components](./navigation/README.md)  
Components for user navigation and wayfinding throughout the application.

**Current:** Tabs  
**Planned:** Menu, Pagination, Stepper, Breadcrumb, BottomNavigation, and more

### 🎨 [Media Components](./media/README.md)
Components for displaying and managing media content including images, icons, and multimedia.

**Current:** Icon  
**Planned:** Image, Avatar, VideoPlayer, Chart, Carousel, Lightbox, and more

## Architecture

### Design System
- **Consistent Theming** - Unified color, typography, and spacing tokens
- **Responsive Design** - Mobile-first approach with adaptive layouts  
- **Dark Mode** - Full light/dark theme support
- **Accessibility** - WCAG 2.1 AA compliance across all components

### Development Standards
- **TypeScript** - Fully typed components with comprehensive prop interfaces
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Storybook** - Interactive documentation and component showcase
- **Testing** - Comprehensive unit and integration test coverage
- **Performance** - Tree-shaking support and optimized bundle sizes

### Import Structure
```typescript
// Import individual components
import { Button, Input } from '@nativeai/ui';

// Import by section
import { Button } from '@nativeai/ui/form';
import { Card } from '@nativeai/ui/layout';
```

## Getting Started

1. **Installation**
   ```bash
   npm install @nativeai/ui
   ```

2. **Setup Tailwind** (required for styling)
   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ['./node_modules/@nativeai/ui/**/*.{js,ts,jsx,tsx}'],
     // ... your config
   }
   ```

3. **Import Components**
   ```typescript
   import { Button, Card, Icon } from '@nativeai/ui';
   ```

## Contributing

Each component section follows the same structure:
- Component implementation (`ComponentName.tsx`)
- Storybook stories (`ComponentName.stories.tsx`)  
- Unit tests (`ComponentName.test.tsx`)
- Documentation (`README.md`)
- Export declarations (`index.ts`)