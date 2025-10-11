import React from 'react';
import { cn } from '../utils/cn';
import type { IconType } from 'react-icons';

// Icon registry for additional icons
type IconRegistry = Record<string, IconType>;
const iconRegistry: IconRegistry = {};

// Methods to manage additional icons
export const registerIcon = (name: string, icon: IconType) => {
  iconRegistry[name] = icon;
};

export const registerIcons = (icons: IconRegistry) => {
  Object.assign(iconRegistry, icons);
};

export const getRegisteredIcon = (name: string): IconType | undefined => {
  return iconRegistry[name];
};

export const getRegisteredIcons = (): IconRegistry => {
  return { ...iconRegistry };
};

export const clearIconRegistry = () => {
  Object.keys(iconRegistry).forEach(key => delete iconRegistry[key]);
};

// Re-export commonly used icons from react-icons/lucide for VS Code-like interface
export { 
  LuFile as FileIcon,
  LuFolder as FolderIcon, 
  LuFolderOpen as FolderOpenIcon,
  LuSearch as SearchIcon,
  LuSettings as SettingsIcon,
  LuPlay as PlayIcon,
  LuPause as PauseIcon,
  LuSquare as StopIcon,
  LuMenu as MenuIcon,
  LuX as CloseIcon,
  LuChevronLeft as ChevronLeftIcon,
  LuChevronRight as ChevronRightIcon,
  LuChevronUp as ChevronUpIcon,
  LuChevronDown as ChevronDownIcon,
  LuTerminal as TerminalIcon,
  LuCode as CodeIcon,
  LuSave as SaveIcon,
  LuGitBranch as GitBranchIcon,
  LuBug as BugIcon,
  LuPuzzle as ExtensionIcon,
  LuRefreshCw as RefreshIcon,
  LuHome as HomeIcon,
  LuTrash2 as TrashIcon,
  LuPencil as EditIcon,
  LuCopy as CopyIcon,
  LuEye as EyeIcon,
  LuEyeOff as EyeOffIcon,
  LuDownload as DownloadIcon,
  LuUpload as UploadIcon,
  LuPlus as PlusIcon,
  LuMinus as MinusIcon,
  LuCheck as CheckIcon,
  LuAlertTriangle as WarningIcon,
  LuInfo as InfoIcon,
  LuAlertCircle as ErrorIcon,
  LuLoader as LoaderIcon,
} from 'react-icons/lu';

// Common icon props interface - extends Lucide's IconType props
export interface IconProps {
  size?: number | string;
  className?: string;
  color?: string;
}

// Extended icon props for dynamic icon rendering
export interface DynamicIconProps extends IconProps {
  name?: string;
  icon?: IconType;
  children?: React.ReactNode;
}

// Base Icon wrapper for consistent styling
export const Icon: React.FC<DynamicIconProps> = ({ 
  size = 16, 
  className, 
  color = 'currentColor',
  name,
  icon,
  children,
  ...props 
}) => {
  // Determine which icon to render
  let IconComponent: IconType | null = null;
  
  if (icon) {
    // Use provided icon directly
    IconComponent = icon;
  } else if (name) {
    // Look up icon in registry
    IconComponent = getRegisteredIcon(name) || null;
  }

  return (
    <span 
      className={cn('inline-flex items-center justify-center', className)}
      style={{ color }}
      {...props}
    >
      {IconComponent ? (
        <IconComponent size={size} color={color} />
      ) : (
        children
      )}
    </span>
  );
};

// Convenience component for rendering registered icons by name
export const DynamicIcon: React.FC<IconProps & { name: string }> = ({ 
  name, 
  ...props 
}) => {
  const IconComponent = getRegisteredIcon(name);
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry. Use registerIcon() to add it.`);
    return null;
  }
  
  return <Icon icon={IconComponent} {...props} />;
};