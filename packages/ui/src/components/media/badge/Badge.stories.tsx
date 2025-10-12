import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeGroup } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Media/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'info', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge shape="square">Square</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge 
        variant="success"
        icon={
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        }
      >
        Success
      </Badge>
      
      <Badge 
        variant="error"
        icon={
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        }
      >
        Error
      </Badge>
      
      <Badge 
        variant="info"
        icon={
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        }
        iconPosition="right"
      >
        Right Icon
      </Badge>
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    const handleRemove = (label: string) => {
      alert(`Removed ${label} badge`);
    };

    return (
      <div className="flex gap-2 flex-wrap">
        <Badge 
          variant="default" 
          removable 
          onRemove={() => handleRemove('Default')}
        >
          Default
        </Badge>
        <Badge 
          variant="success" 
          removable 
          onRemove={() => handleRemove('Success')}
        >
          Success
        </Badge>
        <Badge 
          variant="warning" 
          removable 
          onRemove={() => handleRemove('Warning')}
        >
          Warning
        </Badge>
        <Badge 
          variant="error" 
          removable 
          onRemove={() => handleRemove('Error')}
        >
          Error
        </Badge>
      </div>
    );
  },
};

export const DotBadges: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Position Variants</h3>
        <div className="grid grid-cols-2 gap-8">
          <Badge dot dotPosition="top-right" variant="success">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TR
            </div>
          </Badge>
          
          <Badge dot dotPosition="top-left" variant="error">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TL
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-right" variant="warning">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BR
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-left" variant="info">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BL
            </div>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Badge Examples</h3>
        <div className="flex gap-6 items-center">
          <Badge dot variant="success">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h5v12z" />
            </svg>
          </Badge>
          
          <Badge dot variant="error">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Badge>
          
          <Badge dot variant="warning">
            <span className="text-lg"></span>
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const BadgeGroupStory: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Group</h3>
        <BadgeGroup>
          <Badge variant="default">React</Badge>
          <Badge variant="info">TypeScript</Badge>
          <Badge variant="success">Tailwind</Badge>
          <Badge variant="warning">Beta</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Column Layout</h3>
        <BadgeGroup direction="column">
          <Badge variant="default">Feature A</Badge>
          <Badge variant="success">Feature B</Badge>
          <Badge variant="warning">Feature C</Badge>
          <Badge variant="error">Feature D</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Large Spacing</h3>
        <BadgeGroup spacing="lg">
          <Badge variant="outline" size="lg">Design</Badge>
          <Badge variant="outline" size="lg">Development</Badge>
          <Badge variant="outline" size="lg">Testing</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Many Badges (Wrapping)</h3>
        <div className="max-w-md">
          <BadgeGroup>
            {['React', 'Vue', 'Angular', 'Svelte', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Java', 'C++'].map(tech => (
              <Badge key={tech} variant="default" size="sm">{tech}</Badge>
            ))}
          </BadgeGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Status Indicators</h3>
        <BadgeGroup spacing="md">
          <Badge variant="success" icon={
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          }>
            Available
          </Badge>
          
          <Badge variant="warning" icon={
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          }>
            Limited
          </Badge>
          
          <Badge variant="error" icon={
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          }>
            Unavailable
          </Badge>
        </BadgeGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const InteractiveBadges: Story = {
  render: () => {
    const tags = ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js'];
    const [activeTags, setActiveTags] = React.useState(tags);

    const removeTag = (tagToRemove: string) => {
      setActiveTags(activeTags.filter(tag => tag !== tagToRemove));
    };

    const addTag = (tag: string) => {
      if (!activeTags.includes(tag)) {
        setActiveTags([...activeTags, tag]);
      }
    };

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Active Tags</h3>
          <BadgeGroup>
            {activeTags.map(tag => (
              <Badge 
                key={tag}
                variant="info" 
                removable 
                onRemove={() => removeTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {activeTags.length === 0 && (
              <span className="text-gray-500 text-sm">No tags selected</span>
            )}
          </BadgeGroup>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Available Tags</h3>
          <BadgeGroup>
            {tags.filter(tag => !activeTags.includes(tag)).map(tag => (
              <Badge 
                key={tag}
                variant="outline" 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => addTag(tag)}
              >
                + {tag}
              </Badge>
            ))}
          </BadgeGroup>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};