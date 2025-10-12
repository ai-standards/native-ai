import type { Meta, StoryObj } from '@storybook/react';
import { Layout, ActionBar, TopBar, BottomBar, Sidebar, Console, MainContent } from './Layout';
import { Button } from '../../form/button';
import { 
  FileIcon, 
  FolderIcon, 
  SearchIcon, 
  CodeIcon, 
  TerminalIcon,
  BugIcon,
  ExtensionIcon
} from '../../media/icon';

const meta = {
  title: 'Surface/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A VS Code-like layout component with action bar, sidebars, console, and main content area. Features collapsible panels and responsive design.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock action bar items
const ActionBarItems = () => {
  const icons = [
    { icon: <FolderIcon size={16} />, title: 'Explorer' },
    { icon: <SearchIcon size={16} />, title: 'Search' },
    { icon: <CodeIcon size={16} />, title: 'Source Control' },
    { icon: <BugIcon size={16} />, title: 'Run and Debug' },
    { icon: <ExtensionIcon size={16} />, title: 'Extensions' },
  ];

  return (
    <div className="space-y-3">
      {icons.map((item, index) => (
        <button
          key={index}
          className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
          title={item.title}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

// Mock sidebar content
const SidebarContent = ({ title }: { title: string }) => (
  <div className="space-y-3">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <div className="space-y-2">
      {['File 1.tsx', 'File 2.js', 'File 3.css', 'File 4.md'].map((file, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-200 rounded cursor-pointer text-sm text-gray-700 flex items-center space-x-2"
        >
          <FileIcon size={14} className="text-gray-500" />
          <span>{file}</span>
        </div>
      ))}
    </div>
  </div>
);

// Mock console content
const ConsoleContent = () => (
  <div className="space-y-1">
    <div className="text-gray-400 flex items-center space-x-2">
      <TerminalIcon size={12} />
      <span>npm start</span>
    </div>
    <div className="text-green-400">✓ Server started on port 3000</div>
    <div className="text-blue-400">ℹ Compiled successfully</div>
    <div className="text-yellow-400">⚠ Warning: Unused variable 'x'</div>
    <div className="text-gray-400 flex items-center space-x-2">
      <TerminalIcon size={12} />
      <span>_</span>
    </div>
  </div>
);

// Basic VS Code-like layout
export const Default: Story = {
  render: () => (
    <Layout>
      <TopBar>
        <div className="flex items-center space-x-4">
          <span className="font-medium">MyApp</span>
          <span className="text-gray-400">|</span>
          <span className="text-xs">src/Surface.tsx</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2 text-xs">
          <span>Ln 42, Col 16</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <span>TypeScript React</span>
        </div>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar side="left" width="250px">
          <SidebarContent title="Explorer" />
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full flex items-center justify-center bg-gray-50">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Welcome to VS Code Layout</h2>
                <p className="text-gray-600 max-w-md">
                  This is the main content area. In a real application, this would contain your editor, 
                  file content, or other primary interface elements.
                </p>
                <Button variant="primary">Open File</Button>
              </div>
            </div>
          </MainContent>
          
          <Console>
            <ConsoleContent />
          </Console>
        </div>
        
        <Sidebar side="right" width="280px" defaultCollapsed>
          <SidebarContent title="Properties" />
        </Sidebar>
      </div>
      
      <BottomBar>
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <span>•</span>
          <span>Git: main</span>
          <span>•</span>
          <span>0 Problems</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <span>TypeScript</span>
          <span>•</span>
          <span>Prettier</span>
        </div>
      </BottomBar>
    </Layout>
  ),
};

// Minimal layout without sidebars
export const Minimal: Story = {
  render: () => (
    <Layout>
      <TopBar>
        <span className="font-medium">Minimal Layout</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Clean & Simple</h2>
                <p className="text-gray-600">No sidebars, just action bar and main content.</p>
              </div>
            </div>
          </MainContent>
          
          <Console height="150px">
            <div className="text-green-400">System ready ✓</div>
          </Console>
        </div>
      </div>
      
      <BottomBar>
        <span>Status: Online</span>
      </BottomBar>
    </Layout>
  ),
};

// Layout with both sidebars expanded
export const FullExpanded: Story = {
  render: () => (
    <Layout>
      <TopBar>
        <span className="font-medium">Full Layout</span>
        <div className="flex-1"></div>
        <span className="text-xs">All panels visible</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar side="left" width="200px">
          <SidebarContent title="Files" />
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full p-6 bg-white">
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-4">Code Editor Area</h2>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div>import React from 'react';</div>
                  <div>import {'{ Layout }'} from './Layout';</div>
                  <div></div>
                  <div>{'const App = () => {'}</div>
                  <div>{'  return ('}</div>
                  <div>    &lt;Layout&gt;</div>
                  <div>      &lt;Layout.TopBar&gt;</div>
                  <div>        My App</div>
                  <div>      &lt;/Layout.TopBar&gt;</div>
                  <div>      {'// ... more components'}</div>
                  <div>    &lt;/Layout&gt;</div>
                  <div>{'  );'}</div>
                  <div>{'};'}</div>
                </div>
              </div>
            </div>
          </MainContent>
          
          <Console height="180px">
            <ConsoleContent />
          </Console>
        </div>
        
        <Sidebar side="right" width="220px">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Outline</h3>
              <div className="space-y-1 text-sm">
                <div className="pl-2 flex items-center space-x-1">
                  <FolderIcon size={12} className="text-blue-500" />
                  <span>components</span>
                </div>
                <div className="pl-4 flex items-center space-x-1">
                  <FileIcon size={12} className="text-gray-500" />
                  <span>Layout.tsx</span>
                </div>
                <div className="pl-4 flex items-center space-x-1">
                  <FileIcon size={12} className="text-gray-500" />
                  <span>Button.tsx</span>
                </div>
                <div className="pl-2 flex items-center space-x-1">
                  <FolderIcon size={12} className="text-blue-500" />
                  <span>utils</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div>2 minutes ago - Updated Layout</div>
                <div>1 hour ago - Added Button component</div>
                <div>Yesterday - Initial commit</div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      
      <BottomBar>
        <div className="flex items-center space-x-3">
          <span>✓ Ready</span>
          <span className="text-blue-200">main</span>
          <span>0 errors, 0 warnings</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-3">
          <span>Ln 24, Col 8</span>
          <span>UTF-8</span>
          <span>React TSX</span>
        </div>
      </BottomBar>
    </Layout>
  ),
};

// Dark theme variation
export const DarkTheme: Story = {
  render: () => (
    <Layout className="bg-gray-800">
      <TopBar className="bg-gray-900 border-gray-700">
        <span className="font-medium text-gray-200">Dark Theme Layout</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar className="bg-gray-900 border-gray-600">
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar 
          side="left" 
          width="240px"
          className="bg-gray-800 border-gray-600"
        >
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-200">Dark Explorer</h3>
            <div className="space-y-2">
              {['index.tsx', 'styles.css', 'utils.ts'].map((file, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-700 rounded cursor-pointer text-sm text-gray-300 flex items-center space-x-2"
                >
                  <FileIcon size={14} className="text-gray-400" />
                  <span>{file}</span>
                </div>
              ))}
            </div>
          </div>
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent className="bg-gray-800">
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-200">Dark Theme</h2>
                <p className="text-gray-400">Perfect for late-night coding sessions.</p>
                <Button variant="outline">Open Terminal</Button>
              </div>
            </div>
          </MainContent>
          
          <Console className="bg-black border-gray-600">
            <div className="space-y-1">
              <div className="text-gray-500">$ npm run dev</div>
              <div className="text-green-400">✓ Development server running</div>
              <div className="text-cyan-400">ℹ Hot reload enabled</div>
              <div className="text-gray-500">$ _</div>
            </div>
          </Console>
        </div>
      </div>
      
      <BottomBar className="bg-gray-900 border-gray-700 text-gray-200">
        <span>Dark Mode Active</span>
        <div className="flex-1"></div>
        <span>TypeScript • Dark+</span>
      </BottomBar>
    </Layout>
  ),
};

// Individual component stories
export const ActionBarOnly: Story = {
  render: () => (
    <div className="h-96 flex">
      <ActionBar>
        <ActionBarItems />
      </ActionBar>
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Action bar on the left</span>
      </div>
    </div>
  ),
};

export const SidebarOnly: Story = {
  render: () => (
    <div className="h-96 flex">
      <Sidebar side="left" width="300px">
        <SidebarContent title="Standalone Sidebar" />
      </Sidebar>
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Sidebar demo</span>
      </div>
    </div>
  ),
};

export const ConsoleOnly: Story = {
  render: () => (
    <div className="h-96 flex flex-col">
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Console at the bottom</span>
      </div>
      <Console height="120px">
        <ConsoleContent />
      </Console>
    </div>
  ),
};