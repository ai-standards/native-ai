import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Form/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Styled error message component for displaying validation errors and other error states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    animation: {
      control: 'select',
      options: ['fade', 'slide', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'This field is required',
  },
};

export const WithoutIcon: Story = {
  args: {
    message: 'Please enter a valid email address',
    showIcon: false,
  },
};

export const CustomIcon: Story = {
  args: {
    message: 'Password must be at least 8 characters',
    icon: (
      <span className="w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full">
        !
      </span>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Small Error</label>
        <ErrorMessage message="Small error message" size="sm" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium Error</label>
        <ErrorMessage message="Medium error message" size="md" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large Error</label>
        <ErrorMessage message="Large error message" size="lg" />
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-2">Fade Animation</h4>
        <ErrorMessage message="Error with fade animation" animation="fade" />
      </div>
      <div>
        <h4 className="font-medium mb-2">Slide Animation</h4>
        <ErrorMessage message="Error with slide animation" animation="slide" />
      </div>
      <div>
        <h4 className="font-medium mb-2">No Animation</h4>
        <ErrorMessage message="Error with no animation" animation="none" />
      </div>
    </div>
  ),
};

export const LongMessage: Story = {
  args: {
    message: 'This is a longer error message that demonstrates how the component handles multiple lines of text. The message will wrap appropriately and maintain proper spacing with the icon.',
  },
};

export const MultipleErrors: Story = {
  render: () => (
    <div className="space-y-2">
      <ErrorMessage message="This field is required" />
      <ErrorMessage message="Must be a valid email address" />
      <ErrorMessage message="Password must contain at least one number" />
    </div>
  ),
};

export const WithFormField: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          aria-describedby="email-error"
        />
        <div className="mt-1">
          <ErrorMessage message="Please enter a valid email address" fieldId="email" />
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          aria-describedby="password-error"
        />
        <div className="mt-1">
          <ErrorMessage 
            message="Password must be at least 8 characters and contain one number" 
            fieldId="password" 
          />
        </div>
      </div>
    </div>
  ),
};

export const ConditionalDisplay: Story = {
  render: () => {
    const errors = {
      none: undefined,
      required: 'This field is required',
      invalid: 'Please enter a valid value',
      tooShort: 'Must be at least 3 characters',
    };

    return (
      <div className="space-y-4">
        {Object.entries(errors).map(([key, message]) => (
          <div key={key}>
            <h4 className="font-medium mb-2 capitalize">{key} Error:</h4>
            <ErrorMessage message={message} />
            {!message && (
              <span className="text-gray-500 text-sm">No error to display</span>
            )}
          </div>
        ))}
      </div>
    );
  },
};