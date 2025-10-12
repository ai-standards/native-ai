import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface BottomBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  side?: 'left' | 'right';
  width?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export interface ConsoleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  height?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export interface MainContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

// Context for layout state management
interface LayoutContextType {
  leftSidebarCollapsed: boolean;
  rightSidebarCollapsed: boolean;
  consoleCollapsed: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  toggleConsole: () => void;
}

const LayoutContext = React.createContext<LayoutContextType | null>(null);

export const useLayout = () => {
  const context = React.useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a Layout component');
  }
  return context;
};

// Optional version of useLayout that returns null if not within context
export const useLayoutOptional = () => {
  return React.useContext(LayoutContext);
};

interface LayoutComponent extends React.FC<LayoutProps> {
  ActionBar: React.FC<ActionBarProps>;
  TopBar: React.FC<TopBarProps>;
  BottomBar: React.FC<BottomBarProps>;
  Sidebar: React.FC<SidebarProps>;
  Console: React.FC<ConsoleProps>;
  MainContent: React.FC<MainContentProps>;
}

const LayoutBase: React.FC<LayoutProps> = ({ children, className, ...props }) => {
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false);
  const [consoleCollapsed, setConsoleCollapsed] = useState(false);

  const toggleLeftSidebar = () => setLeftSidebarCollapsed(!leftSidebarCollapsed);
  const toggleRightSidebar = () => setRightSidebarCollapsed(!rightSidebarCollapsed);
  const toggleConsole = () => setConsoleCollapsed(!consoleCollapsed);

  const contextValue: LayoutContextType = {
    leftSidebarCollapsed,
    rightSidebarCollapsed,
    consoleCollapsed,
    toggleLeftSidebar,
    toggleRightSidebar,
    toggleConsole,
  };

  // Slot projection: automatically arrange children based on their types
  const slots = {
    actionBar: null as React.ReactNode,
    topBar: null as React.ReactNode,
    leftSidebar: null as React.ReactNode,
    rightSidebar: null as React.ReactNode,
    mainContent: null as React.ReactNode,
    console: null as React.ReactNode,
    bottomBar: null as React.ReactNode,
  };

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const displayName = (child.type as any)?.displayName || (child.type as any)?.name;
    
    switch (displayName) {
      case 'ActionBar':
        slots.actionBar = child;
        break;
      case 'TopBar':
        slots.topBar = child;
        break;
      case 'Sidebar':
        const side = (child.props as SidebarProps)?.side || 'left';
        if (side === 'left') {
          slots.leftSidebar = child;
        } else {
          slots.rightSidebar = child;
        }
        break;
      case 'Console':
        slots.console = child;
        break;
      case 'BottomBar':
        slots.bottomBar = child;
        break;
      case 'MainContent':
        slots.mainContent = child;
        break;
      default:
        // If no specific component type, treat as main content
        if (!slots.mainContent) {
          slots.mainContent = child;
        }
        break;
    }
  });

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cn('h-screen w-full flex flex-col bg-gray-50', className)} {...props}>
        {/* Top Bar */}
        {slots.topBar}
        
        {/* Main content area with action bar and sidebars */}
        <div className="flex flex-1 overflow-hidden">
          {/* Action Bar */}
          {slots.actionBar}
          
          {/* Left Sidebar */}
          {slots.leftSidebar}
          
          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {slots.mainContent}
            {slots.console}
          </div>
          
          {/* Right Sidebar */}
          {slots.rightSidebar}
        </div>
        
        {/* Bottom Bar */}
        {slots.bottomBar}
      </div>
    </LayoutContext.Provider>
  );
};

export const Layout = LayoutBase as LayoutComponent;

export const ActionBar: React.FC<ActionBarProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'w-12 bg-gray-900 flex flex-col items-center py-2 border-r border-gray-700',
        'flex-shrink-0 z-30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
ActionBar.displayName = 'ActionBar';

export const TopBar: React.FC<TopBarProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'h-8 bg-gray-800 text-white flex items-center px-4 border-b border-gray-600',
        'flex-shrink-0 z-20 text-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
TopBar.displayName = 'TopBar';

export const BottomBar: React.FC<BottomBarProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'h-6 bg-blue-600 text-white flex items-center px-4 border-t border-blue-500',
        'flex-shrink-0 z-20 text-xs',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
BottomBar.displayName = 'BottomBar';

export const Sidebar: React.FC<SidebarProps> = ({ 
  children, 
  className, 
  side = 'left', 
  width = '240px',
  collapsible = true,
  defaultCollapsed = false,
  ...props
}) => {
  const layout = useLayoutOptional();
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  
  // Use layout context if available, otherwise use internal state
  const collapsed = collapsible ? (
    layout ? (
      side === 'left' ? layout.leftSidebarCollapsed : 
      side === 'right' ? layout.rightSidebarCollapsed : 
      internalCollapsed
    ) : internalCollapsed
  ) : false;

  const toggleCollapsed = collapsible ? (
    layout ? (
      side === 'left' ? layout.toggleLeftSidebar :
      side === 'right' ? layout.toggleRightSidebar :
      () => setInternalCollapsed(!internalCollapsed)
    ) : () => setInternalCollapsed(!internalCollapsed)
  ) : undefined;

  return (
    <div
      className={cn(
        'bg-gray-100 border-gray-300 flex-shrink-0 transition-all duration-200 ease-in-out',
        side === 'left' ? 'border-r' : 'border-l',
        collapsed ? 'w-0 overflow-hidden' : '',
        className
      )}
      style={{ width: collapsed ? '0' : width }}
      {...props}
    >
      <div className="h-full flex flex-col">
        {collapsible && (
          <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center justify-between px-2">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              {side} Panel
            </span>
            <button
              onClick={toggleCollapsed}
              className="p-1 hover:bg-gray-300 rounded text-gray-500 hover:text-gray-700"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 p-3 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
Sidebar.displayName = 'Sidebar';

export const Console: React.FC<ConsoleProps> = ({ 
  children, 
  className, 
  height = '200px',
  collapsible = true,
  defaultCollapsed = false,
  ...props
}) => {
  const layout = useLayoutOptional();
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  
  const collapsed = collapsible ? (layout ? layout.consoleCollapsed : internalCollapsed) : false;
  const toggleCollapsed = collapsible ? (layout ? layout.toggleConsole : () => setInternalCollapsed(!internalCollapsed)) : undefined;

  return (
    <div
      className={cn(
        'bg-gray-900 text-green-400 border-t border-gray-700 flex-shrink-0',
        'transition-all duration-200 ease-in-out font-mono',
        collapsed ? 'h-0 overflow-hidden' : '',
        className
      )}
      style={{ height: collapsed ? '0' : height }}
      {...props}
    >
      <div className="h-full flex flex-col">
        {collapsible && (
          <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                Console
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <button
              onClick={toggleCollapsed}
              className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-gray-200"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 p-3 overflow-y-auto text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};
Console.displayName = 'Console';

export const MainContent: React.FC<MainContentProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex-1 bg-white overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
};
MainContent.displayName = 'MainContent';

// Compound component for easier usage
Layout.ActionBar = ActionBar;
Layout.TopBar = TopBar;
Layout.BottomBar = BottomBar;
Layout.Sidebar = Sidebar;
Layout.Console = Console;
Layout.MainContent = MainContent;