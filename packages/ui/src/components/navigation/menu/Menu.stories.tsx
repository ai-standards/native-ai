import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator, MenuSub } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger>
        Open Menu
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('Profile clicked')}>Profile</MenuItem>
        <MenuItem onSelect={() => alert('Settings clicked')}>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Logout clicked')}>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menu>
      <MenuTrigger>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('Edit')}>Edit</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Copy</MenuItem>
        <MenuItem disabled>Delete (disabled)</MenuItem>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Share')}>Share</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger>File Menu</MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('New File')}>New File</MenuItem>
        <MenuItem onSelect={() => alert('Open')}>Open</MenuItem>
        <MenuSeparator />
        <MenuSub trigger="Recent Files">
          <MenuItem onSelect={() => alert('File 1')}>document.txt</MenuItem>
          <MenuItem onSelect={() => alert('File 2')}>spreadsheet.xlsx</MenuItem>
          <MenuItem onSelect={() => alert('File 3')}>presentation.pptx</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Exit')}>Exit</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const DifferentPlacements: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Menu>
        <MenuTrigger>Bottom Start</MenuTrigger>
        <MenuContent placement="bottom-start">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger>Bottom End</MenuTrigger>
        <MenuContent placement="bottom-end">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger>Top Start</MenuTrigger>
        <MenuContent placement="top-start">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <div className="space-y-4">
        <div>
          <button 
            onClick={() => setOpen(!open)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Toggle Menu Externally
          </button>
          <span className="ml-2">Menu is {open ? 'open' : 'closed'}</span>
        </div>
        
        <Menu open={open} onOpenChange={setOpen}>
          <MenuTrigger>Controlled Menu</MenuTrigger>
          <MenuContent>
            <MenuItem onSelect={() => alert('Item 1')}>Item 1</MenuItem>
            <MenuItem onSelect={() => alert('Item 2')}>Item 2</MenuItem>
            <MenuItem onSelect={() => alert('Item 3')}>Item 3</MenuItem>
          </MenuContent>
        </Menu>
      </div>
    );
  },
};