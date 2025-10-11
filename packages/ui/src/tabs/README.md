# Tabs Component

A flexible, accessible tabs component with multiple variants, sizes, and customization options. Built with React and TypeScript, designed for modern web applications.

##### Layout and Scrolling

The TabGroup component is designed as a block-level element that fills its parent container:

```tsx
// Full height container
<div className="h-screen">
  <TabGroup defaultValue="content">
    <TabsList>
      <Tab value="content">Long Content</Tab>
    </TabsList>
    <TabPanel value="content">
      {/* This content will scroll if it exceeds the available height */}
      <div className="space-y-4">
        {/* Long content... */}
      </div>
    </TabPanel>
  </TabGroup>
</div>
```

1. **Custom CSS Classes**: Pass `className` prop to any component
2. **Tailwind Utilities**: Override default styles with Tailwind classes
3. **CSS Variables**: Customize colors and spacing through CSS custom properties

### Example Customizationures

- **Multiple Components**: TabGroup, TabsList, Tab, and TabPanel for flexible composition
- **Block-level Layout**: TabGroup expands to fill parent container with automatic height management
- **Scrollable Content**: Tab panels automatically scroll when content exceeds available space
- **Variants**: Default, pills, and underline styles
- **Size Options**: Small, medium, and large sizes
- **Controlled & Uncontrolled**: Support for both controlled and uncontrolled usage patterns
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- **TypeScript**: Complete TypeScript support with proper type definitions
- **Disabled State**: Individual tabs can be disabled

## Usage

### Basic Usage

```tsx
import { TabGroup, TabsList, Tab, TabPanel } from '@/lib/ui/tabs';

<TabGroup defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Overview</Tab>
    <Tab value="tab2">Settings</Tab>
    <Tab value="tab3">Usage</Tab>
  </TabsList>
  <TabPanel value="tab1">
    <p>Overview content goes here</p>
  </TabPanel>
  <TabPanel value="tab2">
    <p>Settings content goes here</p>
  </TabPanel>
  <TabPanel value="tab3">
    <p>Usage instructions go here</p>
  </TabPanel>
</TabGroup>
```

### Variants

#### Default
```tsx
<TabGroup variant="default" defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabsList>
  {/* ... panels */}
</TabGroup>
```

#### Pills
```tsx
<TabGroup variant="pills" defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabsList>
  {/* ... panels */}
</TabGroup>
```

#### Underline
```tsx
<TabGroup variant="underline" defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabsList>
  {/* ... panels */}
</TabGroup>
```

### Sizes

```tsx
// Small
<TabGroup size="sm" defaultValue="tab1">
  {/* ... */}
</TabGroup>

// Medium (default)
<TabGroup size="md" defaultValue="tab1">
  {/* ... */}
</TabGroup>

// Large
<TabGroup size="lg" defaultValue="tab1">
  {/* ... */}
</TabGroup>
```

### Controlled Component

```tsx
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <TabGroup value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
      </TabsList>
      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
    </TabGroup>
  );
}
```

### Disabled Tabs

```tsx
<TabGroup defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Active Tab</Tab>
    <Tab value="tab2" disabled>Disabled Tab</Tab>
    <Tab value="tab3">Another Tab</Tab>
  </TabsList>
  {/* ... panels */}
</TabGroup>
```

## Component API

### TabGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Required. Tab components and panels |
| `defaultValue` | `string` | `''` | Default active tab (uncontrolled) |
| `value` | `string` | - | Active tab (controlled) |
| `onValueChange` | `(value: string) => void` | - | Callback when active tab changes |
| `variant` | `'default' \| 'pills' \| 'underline'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the tabs |
| `className` | `string` | - | Additional CSS classes |

### TabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Required. Tab components |
| `className` | `string` | - | Additional CSS classes |

### Tab

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Required. Unique identifier for the tab |
| `children` | `ReactNode` | - | Required. Tab label content |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |
| `className` | `string` | - | Additional CSS classes |

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`

### TabPanel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Required. Must match a Tab's value |
| `children` | `ReactNode` | - | Required. Panel content |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

The tabs component follows WAI-ARIA guidelines for accessibility:

- **Keyboard Navigation**: Arrow keys navigate between tabs, Space/Enter activates tabs
- **Screen Reader Support**: Proper ARIA labels and relationships
- **Focus Management**: Appropriate focus indicators and tab order
- **Role Attributes**: Correct `role` attributes for tabs and panels

### Keyboard Shortcuts

- **Left/Right Arrow**: Navigate between tabs
- **Home**: Jump to first tab
- **End**: Jump to last tab
- **Space/Enter**: Activate focused tab
- **Tab**: Move to tab panel content

## Styling

The component uses Tailwind CSS classes and can be customized through:

1. **Custom CSS Classes**: Pass `className` prop to any component
2. **Tailwind Utilities**: Override default styles with Tailwind classes
3. **CSS Variables**: Customize colors and spacing through CSS custom properties

### Example Customization

```tsx
<TabGroup 
  variant="pills" 
  className="bg-gray-50 p-2"
>
  <TabsList className="gap-2">
    <Tab 
      value="custom" 
      className="text-purple-600 hover:text-purple-700"
    >
      Custom Styled Tab
    </Tab>
  </TabsList>
  <TabPanel 
    value="custom" 
    className="bg-white shadow-lg rounded-lg p-6"
  >
    Custom styled content
  </TabPanel>
</TabGroup>
```

## Examples

See the Storybook documentation for interactive examples of all variants, sizes, and usage patterns.