import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Surface/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Expandable content sections with single or multiple selection modes. Perfect for FAQs, settings panels, and progressive disclosure.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Selection mode - single or multiple items can be open',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'separated'],
      description: 'Visual style variant',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be collapsed in single mode',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            <p>React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>To get started with React:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Install Node.js</li>
                <li>Create a new React app with <code className="bg-gray-100 px-1 rounded">create-react-app</code></li>
                <li>Start building components</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>What are components?</AccordionTrigger>
          <AccordionContent>
            <p>Components are independent, reusable pieces of UI. They accept inputs (called props) and return React elements that describe what should appear on the screen.</p>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    children: (
      <>
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Component-based architecture</li>
              <li>• Virtual DOM for performance</li>
              <li>• Declarative programming model</li>
              <li>• Large ecosystem</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="benefits">
          <AccordionTrigger>Benefits</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Reusable components</li>
              <li>• Easy to test</li>
              <li>• Strong community</li>
              <li>• Excellent tooling</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="use-cases">
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent>
            <p>React is great for building:</p>
            <ul className="mt-2 space-y-1">
              <li>• Single Page Applications (SPAs)</li>
              <li>• Mobile apps with React Native</li>
              <li>• Desktop apps with Electron</li>
              <li>• Static sites with Next.js</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <Accordion variant="default">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the default variant with bordered container.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outlined Variant</h3>
        <Accordion variant="outlined">
          <AccordionItem value="item-1">
            <AccordionTrigger>Outlined Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the outlined variant with thicker borders.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Separated Variant</h3>
        <Accordion variant="separated">
          <AccordionItem value="item-1">
            <AccordionTrigger>Separated Item 1</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the separated variant.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Separated Item 2</AccordionTrigger>
            <AccordionContent>
              <p>Each item is visually separated with spacing.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem value="shipping">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Shipping times vary by location and shipping method:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Standard:</strong> 5-7 business days</li>
                <li><strong>Express:</strong> 2-3 business days</li>
                <li><strong>Overnight:</strong> 1 business day</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            <p>We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="warranty">
          <AccordionTrigger>Do you offer warranty?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Yes, all our products come with warranty coverage:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Electronics: 1 year manufacturer warranty</li>
                <li>Clothing: 90 days against defects</li>
                <li>Accessories: 6 months limited warranty</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="contact">
          <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>You can reach us through multiple channels:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: support@example.com</li>
                <li>Phone: 1-800-123-4567 (Mon-Fri 9AM-5PM)</li>
                <li>Live chat: Available on our website</li>
                <li>Social media: @example on Twitter and Facebook</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for a FAQ section.',
      },
    },
  },
};

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <Accordion type="multiple" variant="separated">
        <AccordionItem value="profile">
          <AccordionTrigger>Profile Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Display Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" defaultValue="john@example.com" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="notifications">
          <AccordionTrigger>Notification Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Email notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                SMS notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Push notifications
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacy Settings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Profile Visibility</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Allow search engines to index my profile
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for settings with multiple sections open.',
      },
    },
  },
};