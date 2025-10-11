# @nativeai/ui

A comprehensive React UI component library with VS Code-inspired design patterns, built for modern applications.

## Features

- 🎨 **VS Code-inspired Design** - Clean, professional interface components
- 🧩 **Modular Architecture** - Import only what you need
- 🎯 **TypeScript First** - Full type safety and excellent IntelliSense
- 🎪 **Storybook Integration** - Interactive component documentation
- 🔧 **Customizable** - Built with Tailwind CSS for easy theming
- ⚡ **Performance Focused** - Optimized bundle size and runtime performance
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest
- 📱 **Responsive** - Mobile-first responsive design

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

Create VS Code-like interfaces with the Layout system:

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

### Core Components
- **Button** - Various styles and states
- **Input** - Form inputs with validation states
- **Card** - Content containers with header/footer

### Layout Components
- **Layout** - Main container with slot projection
- **ActionBar** - Vertical toolbar (like VS Code)
- **TopBar** - Application header
- **BottomBar** - Status bar
- **Sidebar** - Collapsible side panels
- **Console** - Terminal-style output panel
- **MainContent** - Primary content area

### Icons
- **50+ Icons** - Comprehensive icon set from Lucide
- **Consistent Design** - All icons follow the same design language
- **Customizable** - Size, color, and styling options

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

- 📖 [Documentation](https://github.com/nativeai/ui)
- 🐛 [Issue Tracker](https://github.com/nativeai/ui/issues)
- 💬 [Discussions](https://github.com/nativeai/ui/discussions)