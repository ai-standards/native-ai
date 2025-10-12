import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Form/HelperText',
  component: HelperText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Helper text component for providing contextual information and guidance to users.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'success'],
    },
    position: {
      control: 'select',
      options: ['below', 'inline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    text: 'Enter your email address to receive notifications',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'This information helps us personalize your experience',
    showIcon: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Default Helper Text</label>
        <HelperText 
          text="Standard helper text for general guidance" 
          showIcon
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Info Helper Text</label>
        <HelperText 
          text="Additional information about this field" 
          variant="info"
          showIcon
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Warning Helper Text</label>
        <HelperText 
          text="Please be careful with this setting" 
          variant="warning"
          showIcon
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Success Helper Text</label>
        <HelperText 
          text="This configuration is recommended" 
          variant="success"
          showIcon
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Small Helper Text</label>
        <HelperText text="Small helper text" size="sm" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium Helper Text</label>
        <HelperText text="Medium helper text" size="md" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large Helper Text</label>
        <HelperText text="Large helper text" size="lg" showIcon />
      </div>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Below Position (Default)</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter text..."
        />
        <HelperText 
          text="Helper text appears below the field" 
          position="below"
        />
      </div>
      <div>
        <div className="flex items-center">
          <label className="block text-sm font-medium mr-2">Inline Position:</label>
          <input
            type="checkbox"
            className="mr-2"
          />
          <HelperText 
            text="Helper text appears inline" 
            position="inline"
            variant="info"
          />
        </div>
      </div>
    </div>
  ),
};

export const CustomIcon: Story = {
  args: {
    text: 'Custom icon helper text',
    showIcon: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer helper text that demonstrates how the component handles multiple lines of content. It should wrap appropriately and maintain proper spacing with icons when present.',
    showIcon: true,
    variant: 'info',
  },
};

export const WithFormFields: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@example.com"
          aria-describedby="email-helper"
        />
        <HelperText 
          text="We'll never share your email address with third parties"
          fieldId="email"
          showIcon
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-describedby="password-helper"
        />
        <HelperText 
          text="Must be at least 8 characters with one number and one special character"
          fieldId="password"
          variant="info"
          showIcon
        />
      </div>
      
      <div>
        <label htmlFor="notifications" className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            className="mr-2"
            aria-describedby="notifications-helper"
          />
          <span className="text-sm font-medium text-gray-700">Email notifications</span>
          <HelperText 
            text="You can change this later in settings"
            fieldId="notifications"
            position="inline"
            variant="success"
          />
        </label>
      </div>
    </div>
  ),
};

export const ContextualHelp: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">API Configuration</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://api.example.com"
        />
        <HelperText 
          text="Enter the base URL for your API endpoint. Must include protocol (http/https)."
          variant="info"
          showIcon
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Timeout Settings</label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="30"
        />
        <HelperText 
          text="Recommended: 30 seconds. Higher values may impact user experience."
          variant="warning"
          showIcon
        />
      </div>
    </div>
  ),
};