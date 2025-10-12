import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tree } from './Tree';

const meta: Meta<typeof Tree> = {
  title: 'Navigation/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const FolderIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const sampleData = [
  {
    id: 'root',
    label: 'Project Root',
    icon: <FolderIcon />,
    defaultExpanded: true,
    children: [
      {
        id: 'src',
        label: 'src',
        icon: <FolderIcon />,
        children: [
          {
            id: 'components',
            label: 'components',
            icon: <FolderIcon />,
            children: [
              { id: 'button', label: 'Button.tsx', icon: <FileIcon /> },
              { id: 'input', label: 'Input.tsx', icon: <FileIcon /> },
              { id: 'modal', label: 'Modal.tsx', icon: <FileIcon /> },
            ],
          },
          {
            id: 'utils',
            label: 'utils',
            icon: <FolderIcon />,
            children: [
              { id: 'helpers', label: 'helpers.ts', icon: <FileIcon /> },
              { id: 'constants', label: 'constants.ts', icon: <FileIcon /> },
            ],
          },
          { id: 'app', label: 'App.tsx', icon: <FileIcon /> },
          { id: 'main', label: 'main.tsx', icon: <FileIcon /> },
        ],
      },
      {
        id: 'public',
        label: 'public',
        icon: <FolderIcon />,
        children: [
          { id: 'index', label: 'index.html', icon: <FileIcon /> },
          { id: 'favicon', label: 'favicon.ico', icon: <FileIcon /> },
        ],
      },
      { id: 'package', label: 'package.json', icon: <FileIcon /> },
      { id: 'readme', label: 'README.md', icon: <FileIcon /> },
    ],
  },
];

const TreeWrapper = (props: any) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [expandedIds, setExpandedIds] = React.useState<string[]>([]);

  return (
    <div className="w-80">
      <Tree
        {...props}
        selectedIds={selectedIds}
        expandedIds={expandedIds}
        onSelect={(nodeId) => {
          if (props.multiSelect) {
            setSelectedIds(prev => 
              prev.includes(nodeId) 
                ? prev.filter(id => id !== nodeId)
                : [...prev, nodeId]
            );
          } else {
            setSelectedIds([nodeId]);
          }
        }}
        onExpandedChange={setExpandedIds}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <TreeWrapper data={sampleData} />,
};

export const WithLines: Story = {
  render: () => <TreeWrapper data={sampleData} showLines />,
};

export const MultiSelect: Story = {
  render: () => <TreeWrapper data={sampleData} multiSelect />,
};

export const Minimal: Story = {
  render: () => <TreeWrapper data={sampleData} variant="minimal" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-semibold">Small</h3>
        <TreeWrapper data={sampleData} size="sm" />
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Medium</h3>
        <TreeWrapper data={sampleData} size="md" />
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Large</h3>
        <TreeWrapper data={sampleData} size="lg" />
      </div>
    </div>
  ),
};

export const WithDisabledNodes: Story = {
  render: () => {
    const dataWithDisabled = [
      {
        id: 'folder1',
        label: 'Available Folder',
        icon: <FolderIcon />,
        children: [
          { id: 'file1', label: 'Available File', icon: <FileIcon /> },
          { id: 'file2', label: 'Disabled File', icon: <FileIcon />, disabled: true },
        ],
      },
      {
        id: 'folder2',
        label: 'Disabled Folder',
        icon: <FolderIcon />,
        disabled: true,
        children: [
          { id: 'file3', label: 'Nested File', icon: <FileIcon /> },
        ],
      },
    ];
    
    return <TreeWrapper data={dataWithDisabled} />;
  },
};

export const DeepNesting: Story = {
  render: () => {
    const deepData = [
      {
        id: 'level1',
        label: 'Level 1',
        icon: <FolderIcon />,
        defaultExpanded: true,
        children: [
          {
            id: 'level2',
            label: 'Level 2',
            icon: <FolderIcon />,
            children: [
              {
                id: 'level3',
                label: 'Level 3',
                icon: <FolderIcon />,
                children: [
                  {
                    id: 'level4',
                    label: 'Level 4',
                    icon: <FolderIcon />,
                    children: [
                      { id: 'deep-file', label: 'Deep File', icon: <FileIcon /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    
    return <TreeWrapper data={deepData} showLines />;
  },
};

export const FileExplorer: Story = {
  render: () => {
    const fileData = [
      {
        id: 'documents',
        label: 'Documents',
        icon: <FolderIcon />,
        children: [
          { id: 'resume', label: 'Resume.pdf', icon: <FileIcon /> },
          { id: 'cover-letter', label: 'Cover Letter.docx', icon: <FileIcon /> },
          {
            id: 'projects',
            label: 'Projects',
            icon: <FolderIcon />,
            children: [
              { id: 'project1', label: 'Website Redesign.zip', icon: <FileIcon /> },
              { id: 'project2', label: 'Mobile App.sketch', icon: <FileIcon /> },
            ],
          },
        ],
      },
      {
        id: 'images',
        label: 'Images',
        icon: <FolderIcon />,
        children: [
          { id: 'vacation', label: 'Vacation Photos', icon: <FolderIcon /> },
          { id: 'work', label: 'Work Screenshots', icon: <FolderIcon /> },
          { id: 'avatar', label: 'avatar.png', icon: <FileIcon /> },
        ],
      },
      {
        id: 'downloads',
        label: 'Downloads',
        icon: <FolderIcon />,
        children: [
          { id: 'installer', label: 'installer.dmg', icon: <FileIcon /> },
          { id: 'archive', label: 'backup.zip', icon: <FileIcon /> },
        ],
      },
    ];
    
    return <TreeWrapper data={fileData} variant="minimal" />;
  },
};