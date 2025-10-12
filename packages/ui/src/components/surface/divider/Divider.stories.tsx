import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Surface/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Visual content separators for organizing interface elements.',
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <div className="p-4 text-sm">Content above</div>
      <Divider />
      <div className="p-4 text-sm">Content below</div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-64">
      <div className="p-4 text-sm">Section 1</div>
      <Divider label="Section Break" />
      <div className="p-4 text-sm">Section 2</div>
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Left" labelPosition="left" />
        <div className="p-4 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Center" labelPosition="center" />
        <div className="p-4 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Right" labelPosition="right" />
        <div className="p-4 text-sm">Content</div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Solid</div>
        <Divider variant="solid" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Dashed</div>
        <Divider variant="dashed" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Dotted</div>
        <Divider variant="dotted" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Double</div>
        <Divider variant="double" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Small</div>
        <Divider size="sm" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Medium</div>
        <Divider size="md" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Large</div>
        <Divider size="lg" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Default</div>
        <Divider color="default" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Muted</div>
        <Divider color="muted" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Accent</div>
        <Divider color="accent" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Destructive</div>
        <Divider color="destructive" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-32 w-64">
      <div className="flex-1 flex items-center justify-center text-sm">Left</div>
      <Divider orientation="vertical" />
      <div className="flex-1 flex items-center justify-center text-sm">Center</div>
      <Divider orientation="vertical" />
      <div className="flex-1 flex items-center justify-center text-sm">Right</div>
    </div>
  ),
};