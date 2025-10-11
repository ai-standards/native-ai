import type { Meta, StoryObj } from '@storybook/react';
import { FormSection } from './FormSection';
import { FormField } from '../formfield/FormField';

const meta: Meta<typeof FormSection> = {
  title: 'Form/FormSection',
  component: FormSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form section component for grouping related form fields with optional dividers, titles, and collapsible functionality.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormSection>;

const SampleField = ({ label }: { label: string }) => (
  <FormField label={label}>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
  </FormField>
);

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
      </div>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Personal Information',
    children: (
      <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
        <SampleField label="Date of Birth" />
      </div>
    ),
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    title: 'Contact Details',
    description: 'Please provide your primary contact information for account verification.',
    children: (
      <div className="space-y-4">
        <SampleField label="Email Address" />
        <SampleField label="Phone Number" />
        <SampleField label="Address" />
      </div>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    title: 'Billing Information',
    showDivider: true,
    children: (
      <div className="space-y-4">
        <SampleField label="Card Number" />
        <SampleField label="Expiry Date" />
        <SampleField label="CVV" />
      </div>
    ),
  },
};

export const Collapsible: Story = {
  args: {
    title: 'Advanced Settings',
    description: 'Optional configuration settings for power users.',
    collapsible: true,
    children: (
      <div className="space-y-4">
        <SampleField label="API Key" />
        <SampleField label="Webhook URL" />
        <SampleField label="Timeout" />
      </div>
    ),
  },
};

export const CollapsibleDefaultClosed: Story = {
  args: {
    title: 'Optional Information',
    description: 'Additional details that can be provided later.',
    collapsible: true,
    defaultCollapsed: true,
    children: (
      <div className="space-y-4">
        <SampleField label="Company" />
        <SampleField label="Job Title" />
        <SampleField label="LinkedIn" />
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <FormSection title="Small Section" size="sm">
        <div className="space-y-3">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
      
      <FormSection title="Medium Section" size="md">
        <div className="space-y-4">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
      
      <FormSection title="Large Section" size="lg">
        <div className="space-y-6">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
    </div>
  ),
};

export const MultipleSection: Story = {
  render: () => (
    <form className="max-w-2xl space-y-0">
      <FormSection title="Personal Information" size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <SampleField label="First Name" />
            <SampleField label="Last Name" />
          </div>
          <SampleField label="Email Address" />
          <SampleField label="Phone Number" />
        </div>
      </FormSection>
      
      <FormSection 
        title="Address" 
        description="Your primary residence address" 
        showDivider
      >
        <div className="space-y-4">
          <SampleField label="Street Address" />
          <div className="grid grid-cols-3 gap-4">
            <SampleField label="City" />
            <SampleField label="State" />
            <SampleField label="ZIP Code" />
          </div>
        </div>
      </FormSection>
      
      <FormSection 
        title="Preferences" 
        description="Optional settings and preferences"
        showDivider 
        collapsible
        defaultCollapsed
      >
        <div className="space-y-4">
          <SampleField label="Language" />
          <SampleField label="Timezone" />
          <SampleField label="Newsletter" />
        </div>
      </FormSection>
    </form>
  ),
};