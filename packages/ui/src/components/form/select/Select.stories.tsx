import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible select dropdown component with labels, validation, and multiple variants. Built with accessibility in mind.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown as first disabled option',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the select',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the select',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'The visual style variant of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

const priorityOptions = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'urgent', label: 'Urgent', disabled: true },
];

// Default select
export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Select Country',
    options: countryOptions,
    placeholder: 'Choose your country',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Priority Level',
    options: priorityOptions,
    placeholder: 'Select priority',
    helperText: 'Choose the appropriate priority level for this task.',
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Required Field',
    options: sampleOptions,
    error: 'This field is required.',
    placeholder: 'Please select an option',
  },
};

// Filled variant
export const FilledVariant: Story = {
  args: {
    label: 'Category',
    variant: 'filled',
    options: [
      { value: 'tech', label: 'Technology' },
      { value: 'design', label: 'Design' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
    ],
    placeholder: 'Select category',
  },
};

// With disabled options
export const WithDisabledOptions: Story = {
  args: {
    label: 'Subscription Plan',
    options: [
      { value: 'free', label: 'Free Plan' },
      { value: 'basic', label: 'Basic Plan - $9/month' },
      { value: 'pro', label: 'Pro Plan - $29/month' },
      { value: 'enterprise', label: 'Enterprise Plan - Contact us', disabled: true },
    ],
    placeholder: 'Choose your plan',
    helperText: 'Enterprise plan requires custom pricing.',
  },
};

// Disabled select
export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    disabled: true,
    defaultValue: 'option2',
  },
};

// Pre-selected value
export const WithDefaultValue: Story = {
  args: {
    label: 'Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
    ],
    defaultValue: 'en',
  },
};

// Large option list
export const LargeOptionList: Story = {
  args: {
    label: 'Select State',
    options: [
      { value: 'AL', label: 'Alabama' },
      { value: 'AK', label: 'Alaska' },
      { value: 'AZ', label: 'Arizona' },
      { value: 'AR', label: 'Arkansas' },
      { value: 'CA', label: 'California' },
      { value: 'CO', label: 'Colorado' },
      { value: 'CT', label: 'Connecticut' },
      { value: 'DE', label: 'Delaware' },
      { value: 'FL', label: 'Florida' },
      { value: 'GA', label: 'Georgia' },
    ],
    placeholder: 'Choose your state',
  },
};

// Filled with error
export const FilledWithError: Story = {
  args: {
    label: 'Payment Method',
    variant: 'filled',
    options: [
      { value: 'card', label: 'Credit Card' },
      { value: 'paypal', label: 'PayPal' },
      { value: 'bank', label: 'Bank Transfer' },
    ],
    error: 'Please select a payment method.',
    placeholder: 'Select payment method',
  },
};