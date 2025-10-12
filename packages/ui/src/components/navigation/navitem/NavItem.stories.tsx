import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Navigation/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const Badge = ({ count }: { count: number }) => (
  <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center">
    {count}
  </span>
);

export const Default: Story = {
  args: {
    children: 'Navigation Item',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Home',
    icon: <HomeIcon />,
  },
};

export const Active: Story = {
  args: {
    children: 'Current Page',
    icon: <HomeIcon />,
    isActive: true,
  },
};

export const WithBadge: Story = {
  args: {
    children: 'Messages',
    badge: <Badge count={5} />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Item',
    icon: <HomeIcon />,
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div>
        <h3 className="mb-2 font-semibold">Default</h3>
        <div className="space-y-1">
          <NavItem variant="default">Regular Item</NavItem>
          <NavItem variant="default" isActive>Active Item</NavItem>
          <NavItem variant="default" disabled>Disabled Item</NavItem>
        </div>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Ghost</h3>
        <div className="space-y-1">
          <NavItem variant="ghost">Regular Item</NavItem>
          <NavItem variant="ghost" isActive>Active Item</NavItem>
          <NavItem variant="ghost" disabled>Disabled Item</NavItem>
        </div>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Subtle</h3>
        <div className="space-y-1">
          <NavItem variant="subtle">Regular Item</NavItem>
          <NavItem variant="subtle" isActive>Active Item</NavItem>
          <NavItem variant="subtle" disabled>Disabled Item</NavItem>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <NavItem size="sm" icon={<HomeIcon />}>Small Item</NavItem>
      <NavItem size="md" icon={<HomeIcon />}>Medium Item</NavItem>
      <NavItem size="lg" icon={<HomeIcon />}>Large Item</NavItem>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <NavItem 
        href="/dashboard"
        icon={<HomeIcon />}
        badge={<Badge count={3} />}
      >
        Dashboard (Link)
      </NavItem>
      
      <NavItem 
        onClick={() => alert('Settings clicked!')}
        icon={<HomeIcon />}
      >
        Settings (Button)
      </NavItem>
      
      <NavItem 
        onClick={() => alert('Profile clicked!')}
        icon={<HomeIcon />}
        isActive
      >
        Profile (Active)
      </NavItem>
    </div>
  ),
};

export const NavigationList: Story = {
  render: () => (
    <nav className="w-64 p-4 bg-gray-50 rounded-lg">
      <div className="space-y-1">
        <NavItem 
          href="/dashboard" 
          icon={<HomeIcon />}
          variant="ghost"
          isActive
        >
          Dashboard
        </NavItem>
        <NavItem 
          href="/projects" 
          icon={<HomeIcon />}
          variant="ghost"
          badge={<Badge count={12} />}
        >
          Projects
        </NavItem>
        <NavItem 
          href="/team" 
          icon={<HomeIcon />}
          variant="ghost"
        >
          Team
        </NavItem>
        <NavItem 
          href="/settings" 
          icon={<HomeIcon />}
          variant="ghost"
          disabled
        >
          Settings
        </NavItem>
      </div>
    </nav>
  ),
};