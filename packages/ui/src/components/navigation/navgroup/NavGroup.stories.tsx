import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from '../navitem/NavItem';

const meta: Meta<typeof NavGroup> = {
  title: 'Navigation/NavGroup',
  component: NavGroup,
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

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AddButton = () => (
  <button className="text-gray-400 hover:text-gray-600 p-1">
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
);

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <NavGroup title="Main Navigation">
        <NavItem icon={<HomeIcon />} variant="ghost">Dashboard</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Projects</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost" isActive>Team</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Settings</NavItem>
      </NavGroup>
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <div className="w-64">
      <NavGroup 
        title="Projects" 
        icon={<FolderIcon />}
        collapsible
        action={<AddButton />}
      >
        <NavItem variant="ghost">Website Redesign</NavItem>
        <NavItem variant="ghost">Mobile App</NavItem>
        <NavItem variant="ghost" isActive>API Integration</NavItem>
        <NavItem variant="ghost">Documentation</NavItem>
      </NavGroup>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-64">
      <div>
        <h3 className="mb-4 font-semibold">Default</h3>
        <NavGroup title="Default Group" variant="default">
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Contained</h3>
        <NavGroup title="Contained Group" variant="contained" icon={<FolderIcon />}>
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Minimal</h3>
        <NavGroup title="Minimal Group" variant="minimal">
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
    </div>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <div className="w-64">
      <NavGroup>
        <NavItem variant="ghost">Ungrouped Item 1</NavItem>
        <NavItem variant="ghost">Ungrouped Item 2</NavItem>
        <NavItem variant="ghost">Ungrouped Item 3</NavItem>
      </NavGroup>
    </div>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-6 w-64">
      <NavGroup title="No Spacing" spacing="none">
        <NavItem variant="ghost">Tight Item 1</NavItem>
        <NavItem variant="ghost">Tight Item 2</NavItem>
        <NavItem variant="ghost">Tight Item 3</NavItem>
      </NavGroup>
      
      <NavGroup title="Large Spacing" spacing="lg">
        <NavItem variant="ghost">Spaced Item 1</NavItem>
        <NavItem variant="ghost">Spaced Item 2</NavItem>
        <NavItem variant="ghost">Spaced Item 3</NavItem>
      </NavGroup>
    </div>
  ),
};

export const ComplexNavigation: Story = {
  render: () => (
    <nav className="w-64 p-4 bg-gray-50 rounded-lg space-y-0">
      <NavGroup title="Overview" variant="minimal">
        <NavItem icon={<HomeIcon />} variant="ghost" isActive>Dashboard</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Analytics</NavItem>
      </NavGroup>
      
      <NavGroup 
        title="Projects" 
        icon={<FolderIcon />}
        collapsible
        action={<AddButton />}
        variant="minimal"
      >
        <NavItem variant="ghost">Website</NavItem>
        <NavItem variant="ghost">Mobile App</NavItem>
        <NavItem variant="ghost">API</NavItem>
      </NavGroup>
      
      <NavGroup title="Team" variant="minimal" collapsible defaultCollapsed>
        <NavItem variant="ghost">Members</NavItem>
        <NavItem variant="ghost">Roles</NavItem>
        <NavItem variant="ghost">Permissions</NavItem>
      </NavGroup>
      
      <NavGroup title="Settings" variant="minimal">
        <NavItem variant="ghost">Profile</NavItem>
        <NavItem variant="ghost">Preferences</NavItem>
        <NavItem variant="ghost" disabled>Billing</NavItem>
      </NavGroup>
    </nav>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    
    return (
      <div className="space-y-4">
        <div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            {collapsed ? 'Expand' : 'Collapse'} Group
          </button>
        </div>
        
        <div className="w-64">
          <NavGroup 
            title="Controlled Group" 
            collapsible
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            icon={<FolderIcon />}
          >
            <NavItem variant="ghost">Item 1</NavItem>
            <NavItem variant="ghost">Item 2</NavItem>
            <NavItem variant="ghost">Item 3</NavItem>
          </NavGroup>
        </div>
      </div>
    );
  },
};