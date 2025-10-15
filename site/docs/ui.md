---
title: @nativeai/ui
description: A comprehensive React UI component library for Native OS apps
package: ui
version: 0.9.5
---

# @nativeai/ui

A comprehensive React UI component library with Native OS inspired design patterns, built for modern applications.

## Features

-  **Prebuilt GUI** - Clean, professional interface components
-  **Modular Architecture** - Import only what you need
-  **TypeScript First** - Full type safety and excellent IntelliSense
-  **Storybook Integration** - Interactive component documentation
-  **Customizable** - Built with Tailwind CSS for easy theming
-  **Performance Focused** - Optimized bundle size and runtime performance
-  **Well Tested** - Comprehensive test coverage with Vitest
-  **Responsive** - Mobile-first responsive design

## Installation

```bash
npm install @nativeai/ui react-icons
# or
yarn add @nativeai/ui react-icons
# or
pnpm add @nativeai/ui react-icons
```

## Usage

### Basic Import

```tsx
import { Button, Card, Layout } from '@nativeai/ui';
import '@nativeai/ui/styles';

function App() {
  return (
    <Card>
      <Card.Header>
        <h2>Welcome</h2>
      </Card.Header>
      <Card.Content>
        <p>This is a card component</p>
      </Card.Content>
      <Card.Footer>
        <Button>Get Started</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Layout Components

Create a full gui with the Layout system:

```tsx
import { Layout } from '@nativeai/ui';

function IDE() {
  return (
    <Layout>
      <Layout.TopBar>My IDE</Layout.TopBar>
      <Layout.ActionBar>
        <button>Files</button>
        <button>Search</button>
      </Layout.ActionBar>
      <Layout.Sidebar side="left">
        File Explorer
      </Layout.Sidebar>
      <Layout.MainContent>
        Editor Area
      </Layout.MainContent>
      <Layout.Console>
        Terminal Output
      </Layout.Console>
      <Layout.BottomBar>
        Status: Ready
      </Layout.BottomBar>
    </Layout>
  );
}
```

### Icons

Access a comprehensive set of Lucide icons:

```tsx
import { FileIcon, FolderIcon, SearchIcon } from '@nativeai/ui';

function FileTree() {
  return (
    <div>
      <FolderIcon size={16} /> src/
      <FileIcon size={16} /> App.tsx
    </div>
  );
}
```

## Components

### Layout & Surface Components
- **Layout** - Main container with slot projection
- **ActionBar** - Vertical toolbar (like VS Code)
- **TopBar** - Application header
- **BottomBar** - Status bar
- **Sidebar** - Collapsible side panels
- **Console** - Terminal-style output panel
- **MainContent** - Primary content area
- **Card** - Content containers with header/footer
- **Panel** - General purpose container panel
- **Section** - Sectioned content with header/footer
- **Container** - Basic content wrapper
- **Flex** - Flexible layout container
- **Stack** - Vertical/horizontal stacking
- **Grid** - CSS Grid layout system
- **Spacer** - Spacing component
- **Divider** - Visual content separator
- **Separator** - Semantic content separator
- **Accordion** - Collapsible content sections
- **Drawer** - Side-sliding overlay panel
- **ScrollArea** - Custom scrollable area
- **Sticky** - Position sticky wrapper
- **AspectRatio** - Maintain aspect ratios
- **Chat** - Chat interface with messages

### Form Components
- **Button** - Various styles and states
- **Input** - Form inputs with validation states
- **NumberInput** - Numeric input with controls
- **PasswordInput** - Password input with visibility toggle
- **SearchInput** - Search input with icon
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection
- **Checkbox** - Checkbox input
- **Radio** - Radio button input
- **Switch** - Toggle switch input
- **Slider** - Range slider input
- **ColorPicker** - Color selection input
- **DatePicker** - Date selection input
- **FileUpload** - File upload component
- **Form** - Form wrapper with validation
- **FormField** - Individual form field wrapper
- **FormSection** - Form section grouping
- **FieldArray** - Dynamic form arrays
- **ErrorMessage** - Form error display
- **HelperText** - Form helper text
- **ValidationIndicator** - Validation status indicator

### Navigation Components
- **Breadcrumb** - Navigation breadcrumb trail
- **Menu** - Context and dropdown menus
- **NavGroup** - Navigation group container
- **NavItem** - Individual navigation item
- **Link** - Navigation links
- **Tabs** - Tabbed navigation
- **Pagination** - Page navigation controls
- **Stepper** - Step-by-step navigation
- **Tree** - Hierarchical navigation tree
- **CommandMenu** - Command palette interface

### Content Components
- **Article** - Article content wrapper
- **Typography** - Text styling components
- **Code** - Code syntax display
- **Quote** - Quotation display
- **Callout** - Highlighted content blocks
- **List** - Styled list components
- **Table** - Data table components

### Media Components
- **Image** - Enhanced image display
- **ImageGallery** - Image gallery component
- **Avatar** - User avatar display
- **AvatarGroup** - Multiple avatars
- **Badge** - Status and label badges
- **BadgeGroup** - Multiple badges
- **Figure** - Media figures with captions
- **FigureGallery** - Figure galleries
- **Audio** - Audio player component
- **Video** - Video player component

### Overlay Components
- **Modal** - Modal dialog overlay
- **Popover** - Contextual popover overlay
- **Tooltip** - Hover tooltip overlay

### Feedback Components
- **Alert** - Alert notifications
- **Toast** - Toast notifications
- **Progress** - Progress indicators
- **Spinner** - Loading spinners
- **Skeleton** - Content loading placeholders

### Icons
- **50+ Icons** - Comprehensive icon set from Lucide
- **Consistent Design** - All icons follow the same design language
- **Customizable** - Size, color, and styling options
- **File & Folder Icons** - Dedicated file system icons
- **UI Action Icons** - Common interface actions
- **Status Icons** - State and status indicators

## Styling

The library uses Tailwind CSS and includes both light and dark theme support:

```tsx
// Import the base styles
import '@nativeai/ui/styles';

// Your app content
function App() {
  return (
    <div className="dark"> {/* or light theme */}
      <Button variant="primary">Themed Button</Button>
    </div>
  );
}
```

## Development

### Setup

```bash
git clone <repository>
cd packages/ui
npm install
```

### Scripts

```bash
npm run dev          # Start development build
npm run build        # Build for production
npm run test         # Run tests
npm run storybook    # Start Storybook
npm run lint         # Lint code
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

-  [Documentation](https://github.com/nativeai/ui)
-  [Issue Tracker](https://github.com/nativeai/ui/issues)
-  [Discussions](https://github.com/nativeai/ui/discussions)

---
*This documentation is automatically generated from the ui package README. [View source](https://github.com/ai-standards/native-ai/tree/main/packages/ui)*
