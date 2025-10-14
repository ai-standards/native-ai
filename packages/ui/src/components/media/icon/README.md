# Icon Component

A collection of icons using react-icons/lucide for native-looking VS Code-style interfaces, with the ability to inject additional icons from any react-icons package.

## Basic Usage

```tsx
import { FileIcon, FolderIcon, SearchIcon } from '@/lib/ui';

// Direct usage of Lucide icons
<FileIcon size={16} />
<FolderIcon className="text-blue-500" />
<SearchIcon color="#666" />
```

## Advanced Usage - Custom Icon Injection

### Register Icons from Any React-Icons Package

```tsx
import { registerIcon, registerIcons, DynamicIcon, Icon } from '@/lib/ui';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { MdDashboard } from 'react-icons/md';

// Register a single icon
registerIcon('react', FaReact);

// Register multiple icons at once
registerIcons({
  'nodejs': FaNodeJs,
  'typescript': SiTypescript,
  'dashboard': MdDashboard,
});

// Use registered icons by name
<DynamicIcon name="react" size={24} color="#61dafb" />
<DynamicIcon name="typescript" size={24} />
```

### Direct Icon Usage

```tsx
import { Icon } from '@/lib/ui';
import { FaGithub } from 'react-icons/fa';

// Pass icon directly as prop
<Icon icon={FaGithub} size={24} color="#333" />

// Use as children
<Icon size={24}>
  <FaGithub color="#333" />
</Icon>

// Use registered icon by name
<Icon name="github" size={24} />
```

### Icon Management Methods

```tsx
import { 
  registerIcon, 
  registerIcons, 
  getRegisteredIcon, 
  getRegisteredIcons,
  clearIconRegistry 
} from '@/lib/ui';

// Register icons
registerIcon('custom', MyCustomIcon);
registerIcons({ icon1: Icon1, icon2: Icon2 });

// Retrieve icons
const myIcon = getRegisteredIcon('custom');
const allIcons = getRegisteredIcons();

// Clear registry (useful for testing)
clearIconRegistry();
```

## Available Icons

### File System
- `FileIcon` - Document/file icon  
- `FolderIcon` - Folder icon
- `FolderOpenIcon` - Open folder icon

### Navigation  
- `ChevronLeftIcon` - Left arrow
- `ChevronRightIcon` - Right arrow
- `ChevronUpIcon` - Up arrow
- `ChevronDownIcon` - Down arrow
- `MenuIcon` - Hamburger menu
- `CloseIcon` - X/close icon

### Actions
- `PlayIcon` - Play button
- `PauseIcon` - Pause button  
- `StopIcon` - Stop button
- `SearchIcon` - Search/magnifying glass
- `SettingsIcon` - Gear/settings
- `SaveIcon` - Save/disk icon
- `EditIcon` - Pencil icon
- `CopyIcon` - Copy icon
- `TrashIcon` - Delete icon

### Development
- `TerminalIcon` - Terminal/console
- `CodeIcon` - Code brackets
- `GitBranchIcon` - Git branch
- `BugIcon` - Debug icon
- `ExtensionIcon` - Puzzle piece

### Status & Feedback
- `CheckIcon` - Checkmark
- `WarningIcon` - Warning triangle
- `ErrorIcon` - Error circle
- `InfoIcon` - Information
- `LoaderIcon` - Loading spinner

### UI Elements
- `PlusIcon` - Add/plus
- `MinusIcon` - Remove/minus
- `EyeIcon` - Show/visible
- `EyeOffIcon` - Hide/invisible
- `DownloadIcon` - Download
- `UploadIcon` - Upload
- `HomeIcon` - Home

## Props

All icons accept standard react-icons props:
- `size` - Icon size (number or string, default: 24)
- `className` - CSS classes
- `color` - Icon color (default: 'currentColor')
- Standard HTML/SVG attributes

## SVG Icon Component

For custom SVG graphics, use the `SvgIcon` component with three different input methods:

### Using SVG Path Data

```tsx
import { SvgIcon } from '@/lib/ui';

// Star icon using path data
<SvgIcon 
  path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  size={24}
  fill="gold"
/>
```

### Using Raw SVG Source

```tsx
// Complete SVG markup as string
const svgSource = `
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
`;

<SvgIcon svg={svgSource} size={32} />
```

### Using SVG File Source

```tsx
// Load SVG from file path or URL
<SvgIcon 
  src="/assets/icons/custom-icon.svg" 
  size={24} 
  alt="Custom icon"
/>

<SvgIcon 
  src="https://example.com/icon.svg" 
  size={20}
  alt="Remote icon"
/>
```

### SvgIcon Props

- `path` - SVG path data string
- `svg` - Raw SVG source code as string  
- `src` - Path to SVG file (URL or file path)
- `size` - Icon size (default: 24)
- `viewBox` - Custom viewBox (default: "0 0 24 24")
- `fill` - Fill color (default: "currentColor")
- `stroke` - Stroke color
- `strokeWidth` - Stroke width
- `alt` - Alt text for accessibility (when using src)
- `className` - CSS classes
- `color` - Icon color (affects wrapper)

## Customization

Icons use Lucide's clean, consistent design and inherit the current text color by default. Override with `color` prop or CSS classes for custom styling.