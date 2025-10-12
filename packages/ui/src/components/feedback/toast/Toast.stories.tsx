import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer } from './Toast';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A temporary, non-blocking notification component for transient messages or status updates.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Toast
export const Basic: Story = {
  args: {
    title: 'Notification',
    children: 'This is a basic toast message.',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Toast variant="info" title="Information">
        This is an informational toast.
      </Toast>
      
      <Toast variant="success" title="Success">
        Operation completed successfully.
      </Toast>
      
      <Toast variant="warning" title="Warning">
        Please review your changes.
      </Toast>
      
      <Toast variant="error" title="Error">
        An error occurred while processing.
      </Toast>
    </div>
  ),
};

// Without Auto-dismiss
export const Persistent: Story = {
  args: {
    title: 'Persistent Toast',
    children: 'This toast will not auto-dismiss.',
    duration: 0,
  },
};

// Without Close Button
export const NotClosable: Story = {
  args: {
    title: 'System Message',
    children: 'This toast cannot be manually closed.',
    closable: false,
    duration: 0,
  },
};

// Custom Duration
export const CustomDuration: Story = {
  args: {
    title: 'Quick Toast',
    children: 'This toast disappears quickly (2 seconds).',
    duration: 2000,
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; variant: 'info' | 'success' | 'warning' | 'error'; title: string; message: string }>>([]);

    const addToast = (variant: 'info' | 'success' | 'warning' | 'error', title: string, message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, variant, title, message }]);
    };

    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => addToast('info', 'Information', 'This is an info toast')}
            className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
          >
            Add Info Toast
          </button>
          <button
            onClick={() => addToast('success', 'Success', 'Operation completed!')}
            className="px-3 py-2 bg-green-600 text-white rounded text-sm"
          >
            Add Success Toast
          </button>
          <button
            onClick={() => addToast('warning', 'Warning', 'Please be careful')}
            className="px-3 py-2 bg-yellow-600 text-white rounded text-sm"
          >
            Add Warning Toast
          </button>
          <button
            onClick={() => addToast('error', 'Error', 'Something went wrong')}
            className="px-3 py-2 bg-red-600 text-white rounded text-sm"
          >
            Add Error Toast
          </button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              title={toast.title}
              onClose={() => removeToast(toast.id)}
            >
              {toast.message}
            </Toast>
          ))}
        </ToastContainer>
      </div>
    );
  },
};

// Toast Container Positions
export const Positions: Story = {
  render: () => {
    const [activePosition, setActivePosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] as const).map(position => (
            <button
              key={position}
              onClick={() => setActivePosition(position)}
              className={`px-3 py-2 rounded text-sm ${
                activePosition === position 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {position}
            </button>
          ))}
        </div>

        <ToastContainer position={activePosition}>
          <Toast variant="success" title="Toast Position">
            This toast is positioned at {activePosition}
          </Toast>
        </ToastContainer>
      </div>
    );
  },
};

// Real-world Examples
export const Examples: Story = {
  render: () => (
    <div className="space-y-4">
      {/* File upload success */}
      <Toast variant="success" title="Upload Complete">
        Your file has been uploaded successfully.
      </Toast>

      {/* Error with action */}
      <Toast variant="error" title="Connection Failed" duration={0}>
        <div>
          <p className="mb-2">Unable to connect to server.</p>
          <button className="text-sm bg-red-600 text-white px-3 py-1 rounded">
            Retry
          </button>
        </div>
      </Toast>

      {/* Simple info */}
      <Toast variant="info">
        New message received
      </Toast>

      {/* Warning with progress */}
      <Toast variant="warning" title="Storage Almost Full" closable={false}>
        You're using 90% of your storage space.
      </Toast>
    </div>
  ),
};