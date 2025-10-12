import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { useState } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A visual representation of task or process completion. Useful for file uploads, form submissions, and long-running operations.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Progress
export const Basic: Story = {
  args: {
    value: 65,
  },
};

// With Label
export const WithLabel: Story = {
  args: {
    value: 75,
    label: 'Upload Progress',
    showValue: true,
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress size="sm" value={40} label="Small" />
      <Progress size="md" value={60} label="Medium" />
      <Progress size="lg" value={80} label="Large" />
    </div>
  ),
};

// Color Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress variant="primary" value={25} label="Primary" />
      <Progress variant="success" value={50} label="Success" />
      <Progress variant="warning" value={75} label="Warning" />
      <Progress variant="error" value={90} label="Error" />
    </div>
  ),
};

// Indeterminate
export const Indeterminate: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress indeterminate label="Processing..." />
      <Progress indeterminate variant="success" label="Syncing..." />
    </div>
  ),
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const startProgress = () => {
      setIsLoading(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };

    return (
      <div className="space-y-4 w-80">
        <Progress 
          value={progress} 
          label="File Upload"
          showValue
          variant={progress === 100 ? 'success' : 'primary'}
        />
        <button
          onClick={startProgress}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isLoading ? 'Uploading...' : 'Start Upload'}
        </button>
      </div>
    );
  },
};

// Real-world Examples
export const Examples: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      {/* File upload */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">File Upload</h3>
        <Progress 
          value={73} 
          label="document.pdf (2.4 MB)"
          showValue
          variant="primary"
        />
      </div>

      {/* Form completion */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Form Completion</h3>
        <Progress 
          value={40} 
          label="Profile Setup"
          showValue
          size="sm"
        />
        <p className="text-xs text-gray-500 mt-1">2 of 5 steps completed</p>
      </div>

      {/* System process */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">System Process</h3>
        <Progress 
          indeterminate
          label="Optimizing images..."
          variant="success"
        />
      </div>

      {/* Multi-step progress */}
      <div className="p-4 border rounded-lg space-y-3">
        <h3 className="font-medium">Installation Progress</h3>
        <Progress value={100} label="Download" variant="success" size="sm" />
        <Progress value={60} label="Install" variant="primary" size="sm" />
        <Progress value={0} label="Configure" variant="primary" size="sm" />
      </div>
    </div>
  ),
};