import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta = {
  title: 'Surface/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Semantic content divisions for organizing interface sections with proper accessibility.',
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">First Section</h3>
        <p className="text-sm text-gray-600">Some content in the first section.</p>
      </div>
      <Separator />
      <div className="p-4">
        <h3 className="font-semibold">Second Section</h3>
        <p className="text-sm text-gray-600">Content in the second section.</p>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">User Information</h3>
        <p className="text-sm text-gray-600">Basic user details and preferences.</p>
      </div>
      <Separator>Account Settings</Separator>
      <div className="p-4">
        <h3 className="font-semibold">Security Options</h3>
        <p className="text-sm text-gray-600">Password and authentication settings.</p>
      </div>
    </div>
  ),
};

export const Levels: Story = {
  render: () => (
    <div className="w-80 space-y-0">
      <div className="p-4">
        <h2 className="font-bold text-lg">Main Section</h2>
        <p className="text-sm text-gray-600">Primary content area.</p>
      </div>
      
      <Separator level={1} />
      
      <div className="p-4">
        <h3 className="font-semibold">Subsection</h3>
        <p className="text-sm text-gray-600">Secondary content.</p>
      </div>
      
      <Separator level={2} />
      
      <div className="p-4">
        <h4 className="font-medium">Sub-subsection</h4>
        <p className="text-sm text-gray-600">Tertiary content.</p>
      </div>
      
      <Separator level={3} />
      
      <div className="p-4">
        <h5 className="text-sm font-medium">Minor Section</h5>
        <p className="text-sm text-gray-600">Minor details.</p>
      </div>
      
      <Separator level={4} />
      
      <div className="p-4 text-xs text-gray-500">
        Fine print or footnotes.
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="w-80">
      <div className="p-2 text-sm">No spacing</div>
      <Separator spacing="none" />
      <div className="p-2 text-sm">Small spacing</div>
      <Separator spacing="sm" />
      <div className="p-2 text-sm">Medium spacing</div>
      <Separator spacing="md" />
      <div className="p-2 text-sm">Large spacing</div>
      <Separator spacing="lg" />
      <div className="p-2 text-sm">Extra large spacing</div>
      <Separator spacing="xl" />
      <div className="p-2 text-sm">Content after</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-64 w-96">
      <div className="flex-1 p-4">
        <h3 className="font-semibold mb-2">Left Panel</h3>
        <p className="text-sm text-gray-600">Content on the left side of the separator.</p>
      </div>
      
      <Separator orientation="vertical" />
      
      <div className="flex-1 p-4">
        <h3 className="font-semibold mb-2">Right Panel</h3>
        <p className="text-sm text-gray-600">Content on the right side of the separator.</p>
      </div>
    </div>
  ),
};

export const Decorative: Story = {
  render: () => (
    <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">Important Content</h3>
        <p className="text-sm text-gray-600">This content needs semantic separation.</p>
      </div>
      
      <Separator decorative />
      
      <div className="p-4 text-xs text-gray-400">
        This is just visual decoration, not semantically important.
      </div>
    </div>
  ),
};