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

## Customization

Icons use Lucide's clean, consistent design and inherit the current text color by default. Override with `color` prop or CSS classes for custom styling.