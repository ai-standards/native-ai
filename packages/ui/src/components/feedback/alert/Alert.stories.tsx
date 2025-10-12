import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A static or dismissible message banner for status updates, warnings, or errors.',
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

// Basic Alert
export const Basic: Story = {
  args: {
    children: 'This is an informational alert message.',
  },
};

// With Title
export const WithTitle: Story = {
  args: {
    title: 'Information',
    children: 'This alert has a title to provide additional context.',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert variant="info" title="Information">
        This is an informational message providing helpful context.
      </Alert>
      
      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>
      
      <Alert variant="warning" title="Warning">
        Please review your information before proceeding.
      </Alert>
      
      <Alert variant="error" title="Error">
        There was an error processing your request.
      </Alert>
    </div>
  ),
};

// Dismissible Alerts
export const Dismissible: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert 
        variant="success" 
        title="Success" 
        dismissible
        onDismiss={() => console.log('Alert dismissed')}
      >
        Your profile has been updated successfully.
      </Alert>
      
      <Alert 
        variant="warning" 
        dismissible
        onDismiss={() => console.log('Warning dismissed')}
      >
        Your session will expire in 5 minutes.
      </Alert>
    </div>
  ),
};

// Without Icons
export const WithoutIcon: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert variant="info" showIcon={false}>
        This alert doesn't show an icon.
      </Alert>
      
      <Alert variant="error" showIcon={false} title="Error">
        This error alert also has no icon.
      </Alert>
    </div>
  ),
};

// Custom Icon
export const CustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Custom Icon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    children: 'This alert uses a custom icon instead of the default.',
  },
};

// Rich Content
export const RichContent: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert variant="info" title="Update Available">
        <p className="mb-2">
          A new version of the application is available.
        </p>
        <div className="flex gap-2">
          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
            Update Now
          </button>
          <button className="text-sm border border-blue-600 text-blue-600 px-3 py-1 rounded">
            Later
          </button>
        </div>
      </Alert>
      
      <Alert variant="warning" title="Storage Almost Full" dismissible>
        <p className="mb-2">
          You're using 95% of your storage space.
        </p>
        <a href="#" className="text-sm underline">
          Manage your storage
        </a>
      </Alert>
    </div>
  ),
};

// Real-world Examples
export const Examples: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      {/* Form validation error */}
      <Alert variant="error" title="Validation Error" dismissible>
        Please correct the following errors:
        <ul className="list-disc list-inside mt-2">
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
        </ul>
      </Alert>

      {/* Success message */}
      <Alert variant="success" dismissible>
        Your account has been created successfully. Please check your email for verification.
      </Alert>

      {/* System maintenance warning */}
      <Alert variant="warning" title="Scheduled Maintenance">
        System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST. 
        Some features may be temporarily unavailable.
      </Alert>

      {/* Information banner */}
      <Alert variant="info" title="New Feature">
        <div className="flex items-center justify-between">
          <span>Try our new dark mode! Enable it in your settings.</span>
          <button className="ml-4 text-sm bg-blue-600 text-white px-3 py-1 rounded">
            Try it
          </button>
        </div>
      </Alert>
    </div>
  ),
};