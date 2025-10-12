import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Form/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Field wrapper component that provides consistent labeling, error handling, and layout for form controls.',
      },
    },
  },
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['top', 'left', 'floating'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

const SampleInput = () => (
  <input
    type="text"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    placeholder="Enter text..."
  />
);

export const Default: Story = {
  args: {
    label: 'Username',
    children: <SampleInput />,
  },
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    required: true,
    children: <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="you@example.com" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    required: true,
    error: 'Password must be at least 8 characters',
    children: <input type="password" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Full Name',
    helperText: 'Enter your first and last name',
    children: <SampleInput />,
  },
};

export const LeftLabel: Story = {
  args: {
    label: 'Company',
    labelPosition: 'left',
    children: <SampleInput />,
  },
};

export const FloatingLabel: Story = {
  args: {
    label: 'Description',
    labelPosition: 'floating',
    children: (
      <textarea
        className="w-full px-3 py-2 pt-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
        rows={4}
        placeholder=" "
      />
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <FormField label="Small Size" size="sm">
        <SampleInput />
      </FormField>
      <FormField label="Medium Size" size="md">
        <SampleInput />
      </FormField>
      <FormField label="Large Size" size="lg">
        <SampleInput />
      </FormField>
    </div>
  ),
};

export const WithoutRequiredIndicator: Story = {
  args: {
    label: 'Optional Field',
    required: true,
    showRequiredIndicator: false,
    helperText: 'This field is required but indicator is hidden',
    children: <SampleInput />,
  },
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <FormField label="First Name" required>
        <SampleInput />
      </FormField>
      
      <FormField label="Last Name" required>
        <SampleInput />
      </FormField>
      
      <FormField 
        label="Email" 
        required 
        helperText="We'll never share your email"
      >
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </FormField>
      
      <FormField 
        label="Phone" 
        error="Please enter a valid phone number"
      >
        <input type="tel" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white" />
      </FormField>
      
      <FormField label="Bio" labelPosition="left">
        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none" rows={3} />
      </FormField>
    </form>
  ),
};