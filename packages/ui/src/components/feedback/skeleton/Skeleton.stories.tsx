import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A placeholder component that mimics the layout of content while data is loading, improving perceived performance.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['rectangular', 'circular', 'text'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Skeleton
export const Basic: Story = {
  args: {
    width: '200px',
    height: '20px',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Rectangular</h4>
        <Skeleton variant="rectangular" width="200px" height="100px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Circular</h4>
        <Skeleton variant="circular" width="60px" height="60px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Text (Single Line)</h4>
        <Skeleton variant="text" width="300px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Text (Multiple Lines)</h4>
        <Skeleton variant="text" lines={3} />
      </div>
    </div>
  ),
};

// Animation Types
export const Animations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Pulse</h4>
        <Skeleton animation="pulse" width="200px" height="20px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Wave</h4>
        <Skeleton animation="wave" width="200px" height="20px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">None</h4>
        <Skeleton animation="none" width="200px" height="20px" />
      </div>
    </div>
  ),
};

// Card Loading State
export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 p-4 border rounded-lg space-y-3">
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height="120px" />
      <Skeleton variant="text" lines={2} />
    </div>
  ),
};

// List Loading State
export const ListSkeleton: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-3 border rounded">
          <Skeleton variant="circular" width="32px" height="32px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
          </div>
          <Skeleton variant="rectangular" width="60px" height="24px" />
        </div>
      ))}
    </div>
  ),
};

// Table Loading State
export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex space-x-4 pb-2 border-b">
        <Skeleton variant="text" width="120px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="80px" />
        <Skeleton variant="text" width="60px" />
      </div>
      
      {/* Rows */}
      <div className="space-y-3 pt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex space-x-4">
            <Skeleton variant="text" width="120px" />
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="80px" />
            <Skeleton variant="text" width="60px" />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Article Loading State
export const ArticleSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      {/* Title */}
      <Skeleton variant="text" width="80%" height="32px" />
      
      {/* Meta info */}
      <div className="flex items-center space-x-2">
        <Skeleton variant="circular" width="24px" height="24px" />
        <Skeleton variant="text" width="120px" />
        <Skeleton variant="text" width="80px" />
      </div>
      
      {/* Featured image */}
      <Skeleton variant="rectangular" width="100%" height="200px" />
      
      {/* Content paragraphs */}
      <div className="space-y-3">
        <Skeleton variant="text" lines={4} />
        <Skeleton variant="text" lines={3} />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  ),
};