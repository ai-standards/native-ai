import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { Input } from '../input';
import { NumberInput } from '../numberinput';
import { Checkbox } from '../checkbox';
import { Select } from '../select';
import { Textarea } from '../textarea';
import { Switch } from '../switch';
import { Radio } from '../radio';
import { Slider } from '../slider';
import { DatePicker } from '../datepicker';
import { Button } from '../button';

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    debounceMs: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
    },
    validationMode: {
      control: { type: 'radio' },
      options: ['onChange', 'onBlur', 'onSubmit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Form {...args}>
      <Input
        name="firstName"
        label="First Name"
        placeholder="Enter your first name"
        id="firstName"
      />
      <Input
        name="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        id="lastName"
      />
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        id="email"
      />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};

export const WithFormData: Story = {
  render: (args) => {
    const [formData, setFormData] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});

    return (
      <div className="space-y-6">
        <Form
          {...args}
          onChange={setFormData}
          onErrorChange={setFormErrors}
        >
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            id="firstName"
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            id="lastName"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            id="email"
          />
          <NumberInput
            name="age"
            label="Age"
            min={0}
            max={120}
            id="age"
          />
          <Checkbox
            name="newsletter"
            label="Subscribe to newsletter"
            id="newsletter"
          />
        </Form>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">Form Data</h3>
            <pre className="text-xs text-blue-800 overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          
          <div className="p-4 bg-red-50 rounded">
            <h3 className="font-semibold text-red-900 mb-2">Form Errors</h3>
            <pre className="text-xs text-red-800 overflow-auto">
              {JSON.stringify(formErrors, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const AllComponents: Story = {
  render: (args) => {
    const [formData, setFormData] = React.useState({});

    return (
      <div className="space-y-6">
        <Form
          {...args}
          onChange={setFormData}
          defaultValues={{
            name: 'John Doe',
            age: 30,
            active: true,
            country: 'US',
            bio: 'Software developer',
            theme: 'dark',
            notifications: 'email',
            volume: 75,
            birthdate: new Date(1994, 0, 1)
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                name="name"
                label="Full Name"
                placeholder="Enter your name"
                id="name"
              />
              
              <NumberInput
                name="age"
                label="Age"
                min={0}
                max={120}
                id="age"
              />
              
              <Switch
                name="active"
                label="Active Status"
                id="active"
              />
              
              <Select
                name="country"
                label="Country"
                options={[
                  { value: 'US', label: 'United States' },
                  { value: 'CA', label: 'Canada' },
                  { value: 'UK', label: 'United Kingdom' },
                  { value: 'DE', label: 'Germany' },
                  { value: 'FR', label: 'France' },
                ]}
                id="country"
              />
              
              <Textarea
                name="bio"
                label="Biography"
                placeholder="Tell us about yourself"
                id="bio"
              />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Notification Preference
                </label>
                <Radio
                  name="notifications"
                  options={[
                    { value: 'email', label: 'Email' },
                    { value: 'sms', label: 'SMS' },
                    { value: 'push', label: 'Push' },
                    { value: 'none', label: 'None' },
                  ]}
                />
              </div>
              
              <Slider
                name="volume"
                label="Volume Level"
                min={0}
                max={100}
                showValue
                id="volume"
              />
              
              <DatePicker
                name="birthdate"
                label="Birth Date"
                id="birthdate"
              />
              
              <Checkbox
                name="terms"
                label="I agree to the terms and conditions"
                id="terms"
              />
            </div>
          </div>
          
          <div className="flex gap-4 pt-4 border-t">
            <Button type="submit" variant="primary">
              Save Profile
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </Form>

        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-gray-900 mb-2">Live Form Data</h3>
          <pre className="text-xs text-gray-700 overflow-auto max-h-64">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [formData, setFormData] = React.useState<any>({});
    const [formErrors, setFormErrors] = React.useState<any>({});
    const [validationErrors, setValidationErrors] = React.useState<any>({});

    // Simple validation rules
    const validateForm = (data: any) => {
      const errors: any = {};
      
      if (!data.firstName?.trim()) {
        errors.firstName = 'First name is required';
      }
      
      if (!data.lastName?.trim()) {
        errors.lastName = 'Last name is required';
      }
      
      if (!data.email?.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
      }
      
      if (!data.age || data.age < 18) {
        errors.age = 'Must be 18 or older';
      }
      
      if (!data.terms) {
        errors.terms = 'You must accept the terms';
      }
      
      setValidationErrors(errors);
      return errors;
    };

    const handleFormChange = (data: any) => {
      setFormData(data);
      validateForm(data);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const errors = validateForm(formData);
      
      if (Object.keys(errors).length === 0) {
        alert('Form submitted successfully!');
      } else {
        alert('Please fix the validation errors');
      }
    };

    return (
      <div className="space-y-6">
        <Form
          {...args}
          onChange={handleFormChange}
          onErrorChange={setFormErrors}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                name="firstName"
                label="First Name *"
                placeholder="Enter your first name"
                error={!!validationErrors.firstName}
                errorMessage={validationErrors.firstName}
                id="firstName"
              />
              
              <Input
                name="lastName"
                label="Last Name *"
                placeholder="Enter your last name"
                error={!!validationErrors.lastName}
                errorMessage={validationErrors.lastName}
                id="lastName"
              />
            </div>
            
            <div className="space-y-4">
              <Input
                name="email"
                type="email"
                label="Email *"
                placeholder="Enter your email"
                error={!!validationErrors.email}
                errorMessage={validationErrors.email}
                id="email"
              />
              
              <NumberInput
                name="age"
                label="Age *"
                min={0}
                max={120}
                error={!!validationErrors.age}
                errorMessage={validationErrors.age}
                helperText="Must be 18 or older"
                id="age"
              />
            </div>
          </div>
          
          <Checkbox
            name="terms"
            label="I agree to the terms and conditions *"
            error={!!validationErrors.terms}
            errorMessage={validationErrors.terms}
            id="terms"
          />
          
          <Button type="submit" variant="primary" className="w-full">
            Submit Form
          </Button>
        </Form>

        <div className="grid grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-900 mb-2">Form Data</h4>
            <pre className="text-blue-800 overflow-auto max-h-32">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          
          <div className="p-3 bg-red-50 rounded">
            <h4 className="font-semibold text-red-900 mb-2">Validation Errors</h4>
            <pre className="text-red-800 overflow-auto max-h-32">
              {JSON.stringify(validationErrors, null, 2)}
            </pre>
          </div>
          
          <div className="p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Component Errors</h4>
            <pre className="text-gray-800 overflow-auto max-h-32">
              {JSON.stringify(formErrors, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};