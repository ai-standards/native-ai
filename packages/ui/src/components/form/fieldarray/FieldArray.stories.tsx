import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FieldArray, FieldArrayItem, FieldArrayHelpers } from './FieldArray';
import { FormField } from '../formfield/FormField';

const meta: Meta<typeof FieldArray> = {
  title: 'Form/FieldArray',
  component: FieldArray,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Dynamic form arrays for repeatable fields with add/remove functionality, validation, and optional drag-and-drop sorting.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldArray>;

const ContactField = (item: FieldArrayItem, index: number, helpers: FieldArrayHelpers) => (
  <div className="grid grid-cols-2 gap-4">
    <FormField label="Name" required>
      <input
        type="text"
        defaultValue={item.name || ''}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Contact name"
      />
    </FormField>
    <FormField label="Email" required>
      <input
        type="email"
        defaultValue={item.email || ''}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="contact@example.com"
      />
    </FormField>
  </div>
);

export const Default: Story = {
  args: {
    children: ContactField,
    addButtonText: 'Add Contact',
    removeButtonText: 'Remove Contact',
  },
};

export const WithInitialItems: Story = {
  args: {
    value: [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
    ],
    children: ContactField,
    addButtonText: 'Add Contact',
  },
};

export const WithMinMax: Story = {
  args: {
    min: 1,
    max: 3,
    children: ContactField,
    addButtonText: 'Add Contact (Max 3)',
  },
};

export const Sortable: Story = {
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([
      { id: '1', task: 'Review documents', priority: 'High' },
      { id: '2', task: 'Update website', priority: 'Medium' },
      { id: '3', task: 'Call clients', priority: 'Low' }
    ]);

    const TaskField = (item: FieldArrayItem, index: number) => (
      <div className="grid grid-cols-3 gap-4">
        <FormField label="Task">
          <input
            type="text"
            defaultValue={item.task || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Task description"
          />
        </FormField>
        <FormField label="Priority">
          <select
            defaultValue={item.priority || 'Medium'}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </FormField>
        <div className="flex items-end">
          <span className="text-sm text-gray-500 pb-2">Item #{index + 1}</span>
        </div>
      </div>
    );

    return (
      <FieldArray
        value={items}
        onChange={setItems}
        sortable
        addButtonText="Add Task"
      >
        {TaskField}
      </FieldArray>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([]);
    
    const validate = (items: FieldArrayItem[]) => {
      if (items.length === 0) return 'At least one skill is required';
      if (items.length > 5) return 'Maximum 5 skills allowed';
      return undefined;
    };

    const SkillField = (item: FieldArrayItem, index: number) => (
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Skill Name" required>
          <input
            type="text"
            defaultValue={item.skill || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g., JavaScript"
          />
        </FormField>
        <FormField label="Experience Level">
          <select
            defaultValue={item.level || 'Beginner'}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
        </FormField>
      </div>
    );

    return (
      <FieldArray
        value={items}
        onChange={setItems}
        validate={validate}
        addButtonText="Add Skill"
        min={1}
        max={5}
      >
        {SkillField}
      </FieldArray>
    );
  },
};

export const SimpleList: Story = {
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([
      { id: '1', value: 'Apple' },
      { id: '2', value: 'Banana' },
      { id: '3', value: 'Cherry' }
    ]);

    const ListItemField = (item: FieldArrayItem, index: number) => (
      <FormField label={`Item ${index + 1}`}>
        <input
          type="text"
          defaultValue={item.value || ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter item"
        />
      </FormField>
    );

    return (
      <FieldArray
        value={items}
        onChange={setItems}
        addButtonText="Add Item"
        sortable
        createItem={() => ({ value: '' })}
      >
        {ListItemField}
      </FieldArray>
    );
  },
};

export const NoAddRemove: Story = {
  args: {
    value: [
      { id: '1', name: 'Required Field 1', value: 'Cannot be removed' },
      { id: '2', name: 'Required Field 2', value: 'Cannot be removed' }
    ],
    showAddButton: false,
    showRemoveButtons: false,
    children: (item: FieldArrayItem, index: number) => (
      <FormField label={item.name}>
        <input
          type="text"
          defaultValue={item.value || ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          readOnly
        />
      </FormField>
    ),
  },
};

export const Disabled: Story = {
  args: {
    value: [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
    ],
    disabled: true,
    children: ContactField,
  },
};

export const ComplexForm: Story = {
  render: () => {
    const [experiences, setExperiences] = useState<FieldArrayItem[]>([
      { 
        id: '1', 
        company: 'Tech Corp', 
        position: 'Developer', 
        startYear: '2020',
        endYear: '2023',
        description: 'Full-stack development'
      }
    ]);

    const ExperienceField = (item: FieldArrayItem, index: number) => (
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">
          Experience #{index + 1}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Company" required>
            <input
              type="text"
              defaultValue={item.company || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Company name"
            />
          </FormField>
          <FormField label="Position" required>
            <input
              type="text"
              defaultValue={item.position || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Job title"
            />
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Start Year">
            <input
              type="number"
              defaultValue={item.startYear || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="2020"
              min="1990"
              max="2030"
            />
          </FormField>
          <FormField label="End Year">
            <input
              type="number"
              defaultValue={item.endYear || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="2023"
              min="1990"
              max="2030"
            />
          </FormField>
        </div>
        <FormField label="Description">
          <textarea
            defaultValue={item.description || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
            rows={3}
            placeholder="Describe your role and responsibilities"
          />
        </FormField>
      </div>
    );

    return (
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
        <FieldArray
          value={experiences}
          onChange={setExperiences}
          addButtonText="Add Experience"
          sortable
          min={1}
        >
          {ExperienceField}
        </FieldArray>
      </div>
    );
  },
};