import React from 'react';
import { cn } from '@/utils/cn';
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

// SVG Icon props interface
export interface SvgIconProps extends IconProps {
  /** SVG path data (e.g., "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z") */
  path?: string;
  /** Raw SVG source code as a string */
  svg?: string;
  /** Path to an SVG file (URL or file path) */
  src?: string;
  /** Custom viewBox for the SVG (defaults to "0 0 24 24") */
  viewBox?: string;
  /** Fill color (defaults to "currentColor") */
  fill?: string;
  /** Stroke color */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number | string;
  /** Alt text for accessibility when using src */
  alt?: string;
}

// SVG Icon component that accepts path, raw SVG, or file source
export const SvgIcon: React.FC<SvgIconProps> = ({
  size = 24,
  className,
  color = 'currentColor',
  path,
  svg,
  src,
  viewBox = '0 0 24 24',
  fill = 'currentColor',
  stroke,
  strokeWidth,
  alt,
  ...props
}) => {
  // If SVG source is provided, render it directly
  if (svg) {
    return (
      <span 
        className={cn('inline-flex items-center justify-center', className)}
        style={{ color }}
        {...props}
      >
        <div
          style={{ width: size, height: size }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </span>
    );
  }

  // If src is provided, render as img element
  if (src) {
    return (
      <span 
        className={cn('inline-flex items-center justify-center', className)}
        style={{ color }}
        {...props}
      >
        <img
          src={src}
          alt={alt || 'SVG icon'}
          width={size}
          height={size}
          style={{ 
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </span>
    );
  }

  // If path is provided, render as SVG path
  if (path) {
    return (
      <span 
        className={cn('inline-flex items-center justify-center', className)}
        style={{ color }}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox={viewBox}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} />
        </svg>
      </span>
    );
  }

  console.warn('SvgIcon: Either "path", "svg", or "src" prop must be provided');
  return null;
};