import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabGroup, TabsList, Tab, TabPanel } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: TabGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible tabs component with tab groups, individual tabs, and content panels. Supports multiple variants and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'The visual style variant of the tabs',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback when active tab changes',
    },
  },
  args: {
    defaultValue: 'tab1',
  },
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md', 
    defaultValue: 'tab1',
    children: null,
  },
  render: (args) => (
    <TabGroup {...args}>
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Usage</Tab>
        <Tab value="tab4" disabled>Disabled</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p>This is the overview tab content. It provides a general introduction and key information.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p>Configure your preferences and options here. All settings are saved automatically.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Usage</h3>
          <p>Learn how to use this component effectively in your applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Disabled Tab</h3>
          <p>This content is not accessible when the tab is disabled.</p>
        </div>
      </TabPanel>
    </TabGroup>
  ),
};

// Variant Stories
export const Pills: Story = {
  args: {
    variant: 'pills',
    size: 'md',
    defaultValue: 'features',
    children: null,
  },
  render: (args) => (
    <TabGroup {...args}>
      <TabsList>
        <Tab value="features">Features</Tab>
        <Tab value="pricing">Pricing</Tab>
        <Tab value="support">Support</Tab>
      </TabsList>
      <TabPanel value="features">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Accessible tab navigation</li>
            <li>Multiple visual variants</li>
            <li>Keyboard navigation support</li>
            <li>TypeScript support</li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value="pricing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Pricing</h3>
          <p>Our component library is free and open source. No hidden costs!</p>
        </div>
      </TabPanel>
      <TabPanel value="support">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Support</h3>
          <p>Get help through our documentation, GitHub issues, or community forums.</p>
        </div>
      </TabPanel>
    </TabGroup>
  ),
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    size: 'md',
    defaultValue: 'design',
    children: null,
  },
  render: (args) => (
    <TabGroup {...args}>
      <TabsList>
        <Tab value="design">Design</Tab>
        <Tab value="development">Development</Tab>
        <Tab value="testing">Testing</Tab>
      </TabsList>
      <TabPanel value="design">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Design Guidelines</h3>
          <p>Follow our design system principles for consistent user interfaces.</p>
        </div>
      </TabPanel>
      <TabPanel value="development">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Development Setup</h3>
          <p>Instructions for setting up your development environment.</p>
        </div>
      </TabPanel>
      <TabPanel value="testing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Testing Strategy</h3>
          <p>Best practices for testing your components and applications.</p>
        </div>
      </TabPanel>
    </TabGroup>
  ),
};

// Size Stories
export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    defaultValue: 'home',
    children: null,
  },
  render: (args) => (
    <TabGroup {...args}>
      <TabsList>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="messages">Messages</Tab>
      </TabsList>
      <TabPanel value="home">
        <div className="p-3 border rounded text-sm">
          <p>Small tabs are perfect for compact interfaces and sidebars.</p>
        </div>
      </TabPanel>
      <TabPanel value="profile">
        <div className="p-3 border rounded text-sm">
          <p>User profile information and settings.</p>
        </div>
      </TabPanel>
      <TabPanel value="messages">
        <div className="p-3 border rounded text-sm">
          <p>View and manage your messages here.</p>
        </div>
      </TabPanel>
    </TabGroup>
  ),
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    defaultValue: 'dashboard',
    children: null,
  },
  render: (args) => (
    <TabGroup {...args}>
      <TabsList>
        <Tab value="dashboard">Dashboard</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="reports">Reports</Tab>
      </TabsList>
      <TabPanel value="dashboard">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Dashboard Overview</h3>
          <p>Large tabs work well for primary navigation in applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="analytics">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Analytics</h3>
          <p>Detailed analytics and performance metrics.</p>
        </div>
      </TabPanel>
      <TabPanel value="reports">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Reports</h3>
          <p>Generate and view various reports and summaries.</p>
        </div>
      </TabPanel>
    </TabGroup>
  ),
};

// Controlled Example
export const Controlled: Story = {
  args: {
    variant: 'pills',
    size: 'md',
    children: null,
  },
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState('tab1');
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('tab1')}
            className="px-3 py-1 text-sm bg-blue-100 rounded"
          >
            Switch to Tab 1
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className="px-3 py-1 text-sm bg-blue-100 rounded"
          >
            Switch to Tab 2
          </button>
          <button
            onClick={() => setActiveTab('tab3')}
            className="px-3 py-1 text-sm bg-blue-100 rounded"
          >
            Switch to Tab 3
          </button>
        </div>
        
        <TabGroup {...args} value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabsList>
          <TabPanel value="tab1">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 1. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab2">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 2. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab3">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 3. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
        </TabGroup>
      </div>
    );
  },
};

// Scrolling Content Example
export const ScrollableContent: Story = {
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'long-content',
    children: null,
  },
  render: (args) => (
    <div className="h-96 border rounded-lg p-4">
      <h3 className="mb-4 text-lg font-semibold">Fixed Height Container (384px)</h3>
      <TabGroup {...args}>
        <TabsList>
          <Tab value="long-content">Long Content</Tab>
          <Tab value="data-table">Data Table</Tab>
          <Tab value="code-editor">Code Editor</Tab>
        </TabsList>
        <TabPanel value="long-content">
          <div className="p-4 space-y-4">
            <h3 className="font-semibold text-lg">Long Scrollable Content</h3>
            <p>This content is longer than the container and will scroll.</p>
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="p-3 border rounded bg-gray-50">
                <h4 className="font-medium">Section {i + 1}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  This is some content for section {i + 1}. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="data-table">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Scrollable Data Table</h3>
            <div className="space-y-2">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 p-2 border-b text-sm">
                  <span>Item {i + 1}</span>
                  <span>Category {((i % 5) + 1)}</span>
                  <span>${(Math.random() * 100).toFixed(2)}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                    i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="code-editor">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Code Editor Simulation</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 30 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 30; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// Additional code to create scrollable content
class DataProcessor {
  constructor(data) {
    this.data = data;
    this.processed = false;
  }

  process() {
    if (this.processed) {
      console.log('Data already processed');
      return this.data;
    }

    console.log('Processing data...');
    const result = this.data.map((item, index) => ({
      id: index,
      value: item,
      processed: true,
      timestamp: new Date().toISOString()
    }));

    this.processed = true;
    return result;
  }

  reset() {
    this.processed = false;
    console.log('Data processor reset');
  }
}

// Example usage
const processor = new DataProcessor(fibNumbers);
const processedData = processor.process();

// More code to demonstrate scrolling...
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test sorting algorithms
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', testArray);
console.log('Bubble sorted:', bubbleSort([...testArray]));
console.log('Quick sorted:', quickSort([...testArray]));`}
            </pre>
          </div>
        </TabPanel>
      </TabGroup>
    </div>
  ),
};