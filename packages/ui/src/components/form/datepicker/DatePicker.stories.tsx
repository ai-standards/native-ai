import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="min-h-96 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Birth Date',
    id: 'birthdate',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Event Date',
    defaultValue: new Date(2024, 5, 15),
    id: 'eventdate',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Pick your date',
    label: 'Custom Placeholder',
    id: 'custom',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date',
    disabled: true,
    defaultValue: new Date(2024, 0, 1),
    id: 'disabled',
  },
};

export const WithError: Story = {
  args: {
    label: 'Date with Error',
    error: true,
    errorMessage: 'Please select a valid date',
    id: 'error',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small DatePicker',
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large DatePicker',
    id: 'large',
  },
};

export const WithMinMaxDate: Story = {
  args: {
    label: 'Date Range',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
    id: 'range',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive DatePicker',
    id: 'interactive',
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    
    return (
      <div className="w-80 space-y-4">
        <DatePicker
          {...args}
          value={selectedDate || undefined}
          onChange={setSelectedDate}
        />
        <div className="text-sm text-gray-600">
          {selectedDate ? (
            <p>Selected: {selectedDate.toLocaleDateString()}</p>
          ) : (
            <p>No date selected</p>
          )}
        </div>
      </div>
    );
  },
};

export const MultipleDatePickers: Story = {
  render: () => {
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);
    
    return (
      <div className="w-80 space-y-6">
        <DatePicker
          label="Start Date"
          value={startDate || undefined}
          onChange={setStartDate}
          maxDate={endDate || undefined}
          id="start"
        />
        <DatePicker
          label="End Date"
          value={endDate || undefined}
          onChange={setEndDate}
          minDate={startDate || undefined}
          id="end"
        />
        <div className="p-4 bg-gray-50 rounded text-sm">
          <p className="font-medium mb-2">Selected Range:</p>
          <p>Start: {startDate?.toLocaleDateString() || 'Not selected'}</p>
          <p>End: {endDate?.toLocaleDateString() || 'Not selected'}</p>
          {startDate && endDate && (
            <p className="mt-2 text-blue-600">
              Duration: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days
            </p>
          )}
        </div>
      </div>
    );
  },
};