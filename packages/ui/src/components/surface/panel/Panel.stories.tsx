import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Surface/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collapsible content panel with title, variants, and state management. Perfect for organizing content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the panel header',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state (uncontrolled)',
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapsed state (controlled)',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the panel can be collapsed',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Text size variant',
    },
    children: {
      control: false,
      description: 'Panel content',
    },
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Panel Title',
    children: (
      <div className="space-y-3">
        <p>This is the panel content. It can contain any React elements.</p>
        <p>Click the header to collapse or expand the panel.</p>
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    collapsible: false,
    children: (
      <div className="space-y-3">
        <h3 className="font-semibold">Content Only Panel</h3>
        <p>This panel has no title bar and is not collapsible.</p>
      </div>
    ),
  },
};

export const DefaultCollapsed: Story = {
  args: {
    title: 'Collapsed Panel',
    defaultCollapsed: true,
    children: (
      <div className="space-y-3">
        <p>This panel starts in a collapsed state.</p>
        <p>Click the header to expand it.</p>
      </div>
    ),
  },
};

export const NonCollapsible: Story = {
  args: {
    title: 'Always Visible',
    collapsible: false,
    children: (
      <div className="space-y-3">
        <p>This panel cannot be collapsed.</p>
        <p>The header is not clickable and shows no chevron.</p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      {(['default', 'outlined', 'filled'] as const).map((variant) => (
        <Panel key={variant} variant={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Panel`}>
          <p>This panel uses the "{variant}" variant style.</p>
        </Panel>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Panel key={size} size={size} title={`${size.toUpperCase()} Size Panel`}>
          <p>This panel uses the "{size}" size variant.</p>
        </Panel>
      ))}
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <Panel title="Personal Information" variant="outlined">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </Panel>

      <Panel title="Preferences" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-sm">Subscribe to newsletter</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="notifications" className="mr-2" />
            <label htmlFor="notifications" className="text-sm">Enable notifications</label>
          </div>
        </div>
      </Panel>

      <Panel title="Advanced Settings" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
        </div>
      </Panel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels in a form layout with collapsible sections.',
      },
    },
  },
};

export const SettingsPage: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      <Panel title="Account Settings" variant="filled">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Configure
            </button>
          </div>
        </div>
      </Panel>

      <Panel title="Privacy Settings" variant="filled" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Profile Visibility</span>
            <select className="px-2 py-1 border rounded text-sm">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span>Search Engine Indexing</span>
            <input type="checkbox" />
          </div>
        </div>
      </Panel>

      <Panel title="Danger Zone" variant="outlined">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-medium text-red-900">Delete Account</h4>
            <p className="text-sm text-red-700 mt-1">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
            <button className="mt-3 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </Panel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels for a settings page with different importance levels.',
      },
    },
  },
};