# Tree Component

Hierarchical tree navigation component for displaying nested data structures with expand/collapse functionality, selection, and customizable styling.

## Features

- **Hierarchical Display** - Nested tree structure with unlimited depth
- **Expand/Collapse** - Interactive nodes with expand/collapse functionality
- **Selection Support** - Single or multi-select capabilities
- **Connecting Lines** - Optional visual lines showing hierarchy
- **Icon Support** - Custom icons for nodes and folders
- **Keyboard Accessible** - Full keyboard navigation support
- **Controlled/Uncontrolled** - Both usage patterns supported
- **Disabled States** - Individual node disable functionality

## Usage

```tsx
import { Tree } from '@/components/navigation/tree';

const treeData = [
  {
    id: 'root',
    label: 'Project',
    icon: <FolderIcon />,
    children: [
      {
        id: 'src',
        label: 'src',
        icon: <FolderIcon />,
        children: [
          { id: 'app', label: 'App.tsx', icon: <FileIcon /> },
          { id: 'main', label: 'main.tsx', icon: <FileIcon /> },
        ],
      },
      { id: 'readme', label: 'README.md', icon: <FileIcon /> },
    ],
  },
];

// Basic usage
<Tree 
  data={treeData}
  onSelect={(nodeId, node) => console.log('Selected:', nodeId)}
/>

// With selection and expansion control
<Tree 
  data={treeData}
  selectedIds={selectedIds}
  expandedIds={expandedIds}
  onSelect={handleSelect}
  onExpandedChange={setExpandedIds}
  multiSelect
  showLines
/>

// File explorer style
<Tree 
  data={fileData}
  variant="minimal"
  size="sm"
  showLines
/>
```

## Props

- `data` - Array of tree nodes with hierarchical structure
- `selectedIds` - Array of selected node IDs
- `expandedIds` - Array of expanded node IDs (controlled)
- `defaultExpandedIds` - Initial expanded nodes (uncontrolled)
- `onSelect` - Callback when node is selected
- `onExpandedChange` - Callback when expansion state changes
- `multiSelect` - Allow multiple node selection
- `showLines` - Display connecting lines between nodes
- `size` - Size variant: sm, md, lg
- `variant` - Visual style: default, minimal
- `indent` - Indentation per level in pixels

## Tree Node Structure

```tsx
interface TreeNode {
  id: string;              // Unique identifier
  label: string;           // Display text
  icon?: React.ReactNode;  // Optional icon
  children?: TreeNode[];   // Child nodes
  disabled?: boolean;      // Disabled state
  defaultExpanded?: boolean; // Default expansion
  data?: any;             // Custom data
}
```

## Accessibility

- Uses `role="tree"` with proper ARIA attributes
- `aria-expanded` states for expandable nodes
- `aria-multiselectable` for multi-select trees
- Keyboard navigation support
- Screen reader compatible structure
- Proper focus management