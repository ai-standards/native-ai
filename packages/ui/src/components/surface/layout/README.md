# Layout Component

A comprehensive VS Code-like layout component with action bar, collapsible sidebars, console, and main content area. Perfect for building developer tools, IDEs, or complex dashboard interfaces.

## Features

- **Action Bar**: Left-side vertical toolbar for primary actions
- **Collapsible Sidebars**: Left and right panels with toggle functionality
- **Console Panel**: Bottom terminal-like interface with collapse support
- **Top & Bottom Bars**: Status and navigation areas
- **Main Content Area**: Central workspace for primary content
- **Context API**: Centralized state management for panel visibility
- **Responsive Design**: Adapts to different screen sizes
- **TypeScript Support**: Full type definitions and IntelliSense
- **Customizable**: Extensive styling and behavior options

## Usage

### Basic Layout

```tsx
import { Layout } from '@/lib/ui/layout';

const App = () => (
  <Layout>
    <Layout.TopBar>
      <span>My Application</span>
    </Layout.TopBar>
    
    <div className="flex flex-1">
      <Layout.ActionBar>
        <button></button>
        <button></button>
      </Layout.ActionBar>
      
      <Layout.Sidebar side="left">
        <h3>Explorer</h3>
        <div>File tree goes here</div>
      </Layout.Sidebar>
      
      <div className="flex flex-col flex-1">
        <Layout.MainContent>
          <div>Main editor area</div>
        </Layout.MainContent>
        
        <Layout.Console>
          <div>$ npm start</div>
        </Layout.Console>
      </div>
    </div>
    
    <Layout.BottomBar>
      <span>Ready</span>
    </Layout.BottomBar>
  </Layout>
);
```

### Individual Components

You can also use components independently:

```tsx
import { 
  Layout, 
  ActionBar, 
  Sidebar, 
  Console, 
  MainContent 
} from '@/lib/ui/layout';

// Standalone sidebar
<Layout>
  <Sidebar side="left" width="300px">
    <div>Sidebar content</div>
  </Sidebar>
</Layout>

// Standalone console
<Layout>
  <Console height="150px">
    <div>Console output</div>
  </Console>
</Layout>
```

## Component Props

### Layout

| Prop      | Type            | Default | Description                    |
|-----------|-----------------|---------|--------------------------------|
| children  | React.ReactNode | -       | Child components               |
| className | string          | -       | Additional CSS classes         |

### ActionBar

| Prop      | Type            | Default | Description                    |
|-----------|-----------------|---------|--------------------------------|
| children  | React.ReactNode | -       | Action buttons or icons        |
| className | string          | -       | Additional CSS classes         |

### TopBar & BottomBar

| Prop      | Type            | Default | Description                    |
|-----------|-----------------|---------|--------------------------------|
| children  | React.ReactNode | -       | Status text, navigation, etc.  |
| className | string          | -       | Additional CSS classes         |

### Sidebar

| Prop             | Type               | Default | Description                        |
|------------------|--------------------|---------|----------------------------------- |
| children         | React.ReactNode    | -       | Sidebar content                    |
| className        | string             | -       | Additional CSS classes             |
| side             | 'left' \| 'right'  | 'left'  | Which side to position the sidebar |
| width            | string             | '240px' | Width of the expanded sidebar      |
| collapsible      | boolean            | true    | Whether sidebar can be collapsed   |
| defaultCollapsed | boolean            | false   | Initial collapsed state            |

### Console

| Prop             | Type    | Default | Description                          |
|------------------|---------|---------|--------------------------------------|
| children         | React.ReactNode | -       | Console content                      |
| className        | string          | -       | Additional CSS classes               |
| height           | string          | '200px' | Height of the expanded console       |
| collapsible      | boolean         | true    | Whether console can be collapsed     |
| defaultCollapsed | boolean         | false   | Initial collapsed state              |

### MainContent

| Prop      | Type            | Default | Description                    |
|-----------|-----------------|---------|--------------------------------|
| children  | React.ReactNode | -       | Main application content       |
| className | string          | -       | Additional CSS classes         |

## Layout Context

The layout provides a context for managing panel states:

```tsx
import { useLayout } from '@/lib/ui/layout';

const ToggleButton = () => {
  const { 
    leftSidebarCollapsed, 
    rightSidebarCollapsed, 
    consoleCollapsed,
    toggleLeftSidebar, 
    toggleRightSidebar, 
    toggleConsole 
  } = useLayout();

  return (
    <div>
      <button onClick={toggleLeftSidebar}>
        {leftSidebarCollapsed ? 'Show' : 'Hide'} Left Panel
      </button>
      <button onClick={toggleRightSidebar}>
        {rightSidebarCollapsed ? 'Show' : 'Hide'} Right Panel
      </button>
      <button onClick={toggleConsole}>
        {consoleCollapsed ? 'Show' : 'Hide'} Console
      </button>
    </div>
  );
};
```

## Examples

### VS Code-like Interface

```tsx
<Layout>
  <TopBar>
    <div className="flex items-center space-x-4">
      <span className="font-medium">MyIDE</span>
      <span className="text-gray-400">|</span>
      <span className="text-xs">src/components/App.tsx</span>
    </div>
    <div className="flex-1"></div>
    <div className="text-xs">Ln 42, Col 16 • UTF-8 • TypeScript</div>
  </TopBar>
  
  <div className="flex flex-1">
    <ActionBar>
      <button title="Explorer"></button>
      <button title="Search"></button>
      <button title="Source Control"></button>
      <button title="Debug"></button>
      <button title="Extensions"></button>
    </ActionBar>
    
    <Sidebar side="left" width="250px">
      <div className="space-y-2">
        <h3 className="font-semibold">Explorer</h3>
        <div className="space-y-1 text-sm">
          <div className="hover:bg-gray-100 p-1 rounded"> src</div>
          <div className="hover:bg-gray-100 p-1 rounded pl-4"> App.tsx</div>
          <div className="hover:bg-gray-100 p-1 rounded pl-4"> index.tsx</div>
        </div>
      </div>
    </Sidebar>
    
    <div className="flex flex-col flex-1">
      <MainContent>
        <div className="h-full p-4 font-mono text-sm">
          <div className="text-blue-600">import React from 'react';</div>
          <div className="text-purple-600">const App = () =&gt; &#123;</div>
          <div className="text-gray-600">  // Your app code here</div>
          <div className="text-purple-600">&#125;;</div>
        </div>
      </MainContent>
      
      <Console height="180px">
        <div className="space-y-1 text-sm">
          <div className="text-gray-400">$ npm run dev</div>
          <div className="text-green-400"> Local: http://localhost:3000</div>
          <div className="text-blue-400">ℹ ready - started server on 0.0.0.0:3000</div>
          <div className="text-yellow-400"> Fast Refresh had to perform a full reload</div>
        </div>
      </Console>
    </div>
    
    <Sidebar side="right" width="280px" defaultCollapsed>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Outline</h3>
          <div className="text-sm space-y-1">
            <div> App</div>
            <div className="pl-4"> useState</div>
            <div className="pl-4"> useEffect</div>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
  
  <BottomBar>
    <div className="flex items-center space-x-4">
      <span> Ready</span>
      <span className="text-blue-200">main</span>
      <span>TypeScript</span>
    </div>
    <div className="flex-1"></div>
    <div className="flex items-center space-x-2">
      <span>UTF-8</span>
      <span>LF</span>
      <span>React TSX</span>
    </div>
  </BottomBar>
</Layout>
```

### Dashboard Interface

```tsx
<Layout>
  <TopBar className="bg-blue-600 text-white">
    <span className="font-bold">Analytics Dashboard</span>
    <div className="flex-1"></div>
    <span>Last updated: 2 min ago</span>
  </TopBar>
  
  <div className="flex flex-1">
    <ActionBar>
      <button title="Dashboard"></button>
      <button title="Reports"></button>
      <button title="Settings">️</button>
    </ActionBar>
    
    <Sidebar side="left" width="200px">
      <nav className="space-y-2">
        <a href="#" className="block p-2 hover:bg-blue-50 rounded">Overview</a>
        <a href="#" className="block p-2 hover:bg-blue-50 rounded">Traffic</a>
        <a href="#" className="block p-2 hover:bg-blue-50 rounded">Conversions</a>
        <a href="#" className="block p-2 hover:bg-blue-50 rounded">Users</a>
      </nav>
    </Sidebar>
    
    <MainContent>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600">12,345</p>
          </div>
          {/* More dashboard widgets */}
        </div>
      </div>
    </MainContent>
  </div>
  
  <BottomBar className="bg-gray-100 text-gray-700">
    <span>Dashboard v2.1.0</span>
    <div className="flex-1"></div>
    <span>Server: Healthy</span>
  </BottomBar>
</Layout>
```

### Minimal Code Editor

```tsx
<Layout>
  <div className="flex flex-1">
    <ActionBar>
      <button></button>
      <button></button>
    </ActionBar>
    
    <MainContent>
      <textarea 
        className="w-full h-full p-4 font-mono resize-none border-none outline-none"
        placeholder="Start typing your code..."
      />
    </MainContent>
  </div>
  
  <Console height="100px" defaultCollapsed>
    <div>Output will appear here...</div>
  </Console>
</Layout>
```

## Styling

### Custom Themes

```tsx
// Dark theme
<Layout className="bg-gray-900">
  <TopBar className="bg-gray-800 text-white border-gray-700">
    Dark Theme
  </TopBar>
  <ActionBar className="bg-gray-900 border-gray-700">
    {/* Dark action buttons */}
  </ActionBar>
  <Sidebar className="bg-gray-800 border-gray-700 text-white">
    {/* Dark sidebar content */}
  </Sidebar>
  <MainContent className="bg-gray-900 text-white">
    {/* Dark editor */}
  </MainContent>
  <Console className="bg-black border-gray-700">
    {/* Dark console */}
  </Console>
</Layout>

// Light theme with custom colors
<Layout>
  <TopBar className="bg-purple-600 text-white">
    Purple Theme
  </TopBar>
  <ActionBar className="bg-purple-700">
    {/* Purple action buttons */}
  </ActionBar>
</Layout>
```

### Responsive Behavior

```tsx
// Hide sidebars on mobile
<Sidebar 
  side="left" 
  className="hidden md:block"
  width="250px"
>
  Desktop only sidebar
</Sidebar>

// Adjust console height on mobile
<Console 
  height="120px"
  className="md:h-48"
>
  Responsive console
</Console>
```

## Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Focus Management**: Logical tab order and visible focus indicators
- **High Contrast**: Compatible with high contrast themes
- **Reduced Motion**: Respects user's motion preferences

## Tips & Best Practices

1. **State Management**: Use the layout context for coordinated panel states
2. **Performance**: Lazy load sidebar content for better initial load times
3. **Mobile**: Consider hiding complex panels on smaller screens
4. **Keyboard Shortcuts**: Implement shortcuts for toggling panels
5. **Persistence**: Save panel states to localStorage for better UX
6. **Content Overflow**: Always handle content that exceeds panel dimensions

## Advanced Usage

### Custom Panel Controls

```tsx
const CustomControls = () => {
  const { toggleLeftSidebar, toggleConsole } = useLayout();
  
  return (
    <div className="flex space-x-2">
      <button 
        onClick={toggleLeftSidebar}
        className="p-1 hover:bg-gray-200 rounded"
      >
        Toggle Files
      </button>
      <button 
        onClick={toggleConsole}
        className="p-1 hover:bg-gray-200 rounded"
      >
        Toggle Terminal
      </button>
    </div>
  );
};
```

### Panel State Persistence

```tsx
const LayoutWithPersistence = () => {
  const [savedState, setSavedState] = useState(() => 
    JSON.parse(localStorage.getItem('layoutState') || '{}')
  );

  // Use saved state for default collapsed values
  return (
    <Layout>
      <Sidebar 
        defaultCollapsed={savedState.leftSidebarCollapsed}
        // ... other props
      />
      <Console 
        defaultCollapsed={savedState.consoleCollapsed}
        // ... other props
      />
    </Layout>
  );
};
```