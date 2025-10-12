import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSteps = [
  { id: 'step1', label: 'Personal Info', description: 'Enter your details' },
  { id: 'step2', label: 'Address', description: 'Shipping information' },
  { id: 'step3', label: 'Payment', description: 'Payment method' },
  { id: 'step4', label: 'Review', description: 'Confirm your order' },
];

const StepperWrapper = ({ currentStep: initialStep, ...args }: any) => {
  const [currentStep, setCurrentStep] = React.useState(initialStep || 'step1');
  
  return (
    <Stepper
      {...args}
      currentStep={currentStep}
      onStepClick={setCurrentStep}
    />
  );
};

export const Default: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
  },
};

export const Vertical: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    orientation: 'vertical',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-semibold">Default</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Minimal</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" variant="minimal" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Pills</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" variant="pills" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-semibold">Small</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="sm" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Medium</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="md" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Large</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="lg" />
      </div>
    </div>
  ),
};

export const WithCompletedSteps: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: [
      { id: 'step1', label: 'Account', description: 'Create your account', completed: true },
      { id: 'step2', label: 'Profile', description: 'Complete your profile', completed: true },
      { id: 'step3', label: 'Verification', description: 'Verify your email' },
      { id: 'step4', label: 'Done', description: 'All set!', disabled: true },
    ],
    currentStep: 'step3',
  },
};

export const WithoutDescriptions: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step3',
    showDescriptions: false,
  },
};

export const WithoutNumbers: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    showNumbers: false,
  },
};

export const NonClickable: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    clickable: false,
  },
};

export const VerticalComplex: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    steps: [
      { id: 'step1', label: 'Project Setup', description: 'Initialize your project repository', completed: true },
      { id: 'step2', label: 'Configuration', description: 'Set up build tools and environment', completed: true },
      { id: 'step3', label: 'Development', description: 'Write your application code' },
      { id: 'step4', label: 'Testing', description: 'Run tests and quality checks', disabled: true },
      { id: 'step5', label: 'Deployment', description: 'Deploy to production environment', disabled: true },
    ],
    currentStep: 'step3',
    orientation: 'vertical',
    variant: 'pills',
    size: 'lg',
  },
};