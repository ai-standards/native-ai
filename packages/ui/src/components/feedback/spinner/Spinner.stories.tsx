import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A lightweight loading indicator for ongoing background processes, async actions, or pending UI updates.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    display: {
      control: { type: 'select' },
      options: ['inline', 'block'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Spinner
export const Basic: Story = {
  args: {},
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

// Color Variants
export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="success" />
      <Spinner variant="warning" />
      <Spinner variant="error" />
    </div>
  ),
};

// Display Modes
export const DisplayModes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        Inline spinner: <Spinner display="inline" size="sm" /> Loading content...
      </div>
      <div>
        Block spinner:
        <Spinner display="block" />
      </div>
    </div>
  ),
};

// In Context Examples
export const InContext: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      {/* Button with spinner */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
        <Spinner size="sm" variant="secondary" />
        Saving...
      </button>

      {/* Card loading state */}
      <div className="p-4 border rounded-lg">
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-2 text-sm text-gray-600">Loading data...</p>
          </div>
        </div>
      </div>

      {/* Inline loading text */}
      <p className="text-sm text-gray-600">
        Processing your request <Spinner size="xs" />
      </p>
    </div>
  ),
};