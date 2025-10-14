import type { Meta, StoryObj } from '@storybook/react';
import { 
  Icon,
  DynamicIcon,
  SvgIcon,
  registerIcon,
  registerIcons,
  FileIcon, 
  FolderIcon, 
  FolderOpenIcon,
  SearchIcon, 
  SettingsIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  MenuIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TerminalIcon,
  CodeIcon,
  SaveIcon,
  GitBranchIcon,
  BugIcon,
  ExtensionIcon,
  EditIcon,
  TrashIcon,
  CheckIcon,
  WarningIcon,
  ErrorIcon,
  InfoIcon
} from './Icon';

// Import icons from different react-icons packages for demonstration
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython } from 'react-icons/si';
import { MdDashboard, MdNotifications } from 'react-icons/md';
import { BiCoffee, BiRocket } from 'react-icons/bi';

const meta: Meta<typeof Icon> = {
  title: 'Media/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <FileIcon size={24} />
      <FolderIcon size={24} />
      <SearchIcon size={24} />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-8 gap-4 p-4">
      <div className="flex flex-col items-center space-y-2">
        <FileIcon size={24} />
        <span className="text-xs">File</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <FolderIcon size={24} />
        <span className="text-xs">Folder</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SearchIcon size={24} />
        <span className="text-xs">Search</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SettingsIcon size={24} />
        <span className="text-xs">Settings</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <PlayIcon size={24} />
        <span className="text-xs">Play</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <PauseIcon size={24} />
        <span className="text-xs">Pause</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StopIcon size={24} />
        <span className="text-xs">Stop</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MenuIcon size={24} />
        <span className="text-xs">Menu</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CloseIcon size={24} />
        <span className="text-xs">Close</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ChevronLeftIcon size={24} />
        <span className="text-xs">Left</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ChevronRightIcon size={24} />
        <span className="text-xs">Right</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ChevronUpIcon size={24} />
        <span className="text-xs">Up</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ChevronDownIcon size={24} />
        <span className="text-xs">Down</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <TerminalIcon size={24} />
        <span className="text-xs">Terminal</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CodeIcon size={24} />
        <span className="text-xs">Code</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SaveIcon size={24} />
        <span className="text-xs">Save</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <GitBranchIcon size={24} />
        <span className="text-xs">Git</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BugIcon size={24} />
        <span className="text-xs">Debug</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ExtensionIcon size={24} />
        <span className="text-xs">Extensions</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <EditIcon size={24} />
        <span className="text-xs">Edit</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <TrashIcon size={24} />
        <span className="text-xs">Delete</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CheckIcon size={24} />
        <span className="text-xs">Check</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <WarningIcon size={24} />
        <span className="text-xs">Warning</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ErrorIcon size={24} />
        <span className="text-xs">Error</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4 p-4">
      <FileIcon size={12} />
      <FileIcon size={16} />
      <FileIcon size={24} />
      <FileIcon size={32} />
      <FileIcon size={48} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center space-x-4 p-4">
      <SettingsIcon size={24} color="#ef4444" />
      <SettingsIcon size={24} color="#f97316" />
      <SettingsIcon size={24} color="#eab308" />
      <SettingsIcon size={24} color="#22c55e" />
      <SettingsIcon size={24} color="#3b82f6" />
      <SettingsIcon size={24} color="#8b5cf6" />
    </div>
  ),
};

// Register some additional icons for demonstration
registerIcons({
  'react': FaReact,
  'nodejs': FaNodeJs,
  'github': FaGithub,
  'typescript': SiTypescript,
  'javascript': SiJavascript,
  'python': SiPython,
  'dashboard': MdDashboard,
  'notifications': MdNotifications,
  'coffee': BiCoffee,
  'rocket': BiRocket,
});

export const CustomIconsByName: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4 p-4">
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="react" size={32} color="#61dafb" />
        <span className="text-xs">React</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="nodejs" size={32} color="#339933" />
        <span className="text-xs">Node.js</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="typescript" size={32} color="#3178c6" />
        <span className="text-xs">TypeScript</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="javascript" size={32} color="#f7df1e" />
        <span className="text-xs">JavaScript</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="python" size={32} color="#3776ab" />
        <span className="text-xs">Python</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="github" size={32} color="#333" />
        <span className="text-xs">GitHub</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="dashboard" size={32} color="#1976d2" />
        <span className="text-xs">Dashboard</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="notifications" size={32} color="#ff9800" />
        <span className="text-xs">Notifications</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="coffee" size={32} color="#8b4513" />
        <span className="text-xs">Coffee</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DynamicIcon name="rocket" size={32} color="#ff4081" />
        <span className="text-xs">Rocket</span>
      </div>
    </div>
  ),
};

export const CustomIconsDirectly: Story = {
  render: () => (
    <div className="flex items-center space-x-6 p-4">
      <div className="flex flex-col items-center space-y-2">
        <Icon icon={FaReact} size={32} color="#61dafb" />
        <span className="text-xs">Direct Icon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Icon name="typescript" size={32} />
        <span className="text-xs">By Name</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Icon size={32}>
          <SiJavascript color="#f7df1e" />
        </Icon>
        <span className="text-xs">As Children</span>
      </div>
    </div>
  ),
};

export const RuntimeRegistration: Story = {
  render: () => {
    // Register an icon at runtime
    registerIcon('custom-example', BiRocket);
    
    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        <h3 className="text-lg font-semibold">Runtime Icon Registration</h3>
        <p className="text-sm text-gray-600 max-w-md text-center">
          This demonstrates registering an icon at runtime and then using it by name.
        </p>
        <DynamicIcon name="custom-example" size={48} color="#ff4081" />
        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
          registerIcon('custom-example', BiRocket)
        </code>
      </div>
    );
  },
};

// SvgIcon Examples - Adding to existing Icon stories
export const SvgWithPath: Story = {
  render: () => {
    const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
    
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">SvgIcon with Path Data</h3>
        <div className="flex items-center space-x-4">
          <SvgIcon path={starPath} size={24} fill="gold" />
          <SvgIcon path={starPath} size={32} fill="#3b82f6" />
          <SvgIcon path={starPath} size={40} fill="#ef4444" />
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center">
          SVG rendered using path data - perfect for simple single-path icons.
        </p>
      </div>
    );
  },
};

export const SvgWithSource: Story = {
  render: () => {
    const clockSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="#3b82f6" stroke-width="2" fill="none"/><path d="M12 6v6l4 2" stroke="#3b82f6" stroke-width="2"/></svg>';
    const heartSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444"/></svg>';
    
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">SvgIcon with Raw SVG Source</h3>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <SvgIcon svg={clockSvg} size={32} />
            <p className="text-xs mt-2">Clock</p>
          </div>
          <div className="text-center">
            <SvgIcon svg={heartSvg} size={32} />
            <p className="text-xs mt-2">Heart</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center">
          SVG rendered from complete markup - supports complex multi-element graphics.
        </p>
      </div>
    );
  },
};

export const SvgWithFile: Story = {
  render: () => {
    // Using data URIs as examples since we don't have actual SVG files in Storybook
    const plusIconDataUri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ef4444'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/%3E%3C/svg%3E";
    
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">SvgIcon with File Source</h3>
        <div className="flex items-center space-x-4">
          <SvgIcon src={plusIconDataUri} size={32} alt="Plus icon" />
          <SvgIcon src={plusIconDataUri} size={40} alt="Plus icon" />
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center">
          SVG loaded from file path or URL. In practice, you'd use: <code>src="/assets/icon.svg"</code>
        </p>
      </div>
    );
  },
};

export const SvgWithStroke: Story = {
  render: () => {
    const plusPath = "M12 5v14m-7-7h14";
    const circlePath = "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z";
    
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">SvgIcon with Stroke Styling</h3>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <SvgIcon 
              path={plusPath}
              size={32}
              fill="none"
              stroke="#10b981"
              strokeWidth={2}
              viewBox="0 0 24 24"
            />
            <p className="text-xs mt-2">Plus</p>
          </div>
          <div className="text-center">
            <SvgIcon 
              path={circlePath}
              size={32}
              fill="none"
              stroke="#3b82f6"
              strokeWidth={2}
              viewBox="0 0 24 24"
            />
            <p className="text-xs mt-2">Circle</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center">
          SVG icons with stroke styling - perfect for outline-style graphics.
        </p>
      </div>
    );
  },
};

export const SvgAllMethods: Story = {
  render: () => {
    const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
    const heartSvg = '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444"/></svg>';
    const dataUri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 12l2 2 4-4' stroke='%2310b981' stroke-width='2' fill='none'/%3E%3C/svg%3E";
    
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">All SvgIcon Methods</h3>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <SvgIcon path={starPath} size={32} fill="gold" />
            <p className="text-xs mt-2 font-medium">Path Data</p>
          </div>
          <div className="text-center">
            <SvgIcon svg={heartSvg} size={32} />
            <p className="text-xs mt-2 font-medium">SVG Source</p>
          </div>
          <div className="text-center">
            <SvgIcon src={dataUri} size={32} alt="Check" />
            <p className="text-xs mt-2 font-medium">File Source</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center">
          Comparison of all three SvgIcon methods: path data, raw SVG, and file source.
        </p>
      </div>
    );
  },
};