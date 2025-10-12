import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';

const meta = {
  title: 'Content/Quote',
  component: Quote,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Blockquote component for displaying quotations and highlighted text.',
      },
    },
  },
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The best way to predict the future is to invent it.',
    cite: 'Alan Kay'
  },
};

export const Variants: Story = {
  args: { children: 'Quote text' },
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Quote>
          The only way to do great work is to love what you do.
        </Quote>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Bordered</h3>
        <Quote variant="bordered" cite="Steve Jobs">
          Innovation distinguishes between a leader and a follower.
        </Quote>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Highlighted</h3>
        <Quote variant="highlighted" cite="Albert Einstein">
          Imagination is more important than knowledge.
        </Quote>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: 'Quote text' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Quote size="sm" cite="Small Quote">
        Small quote for compact layouts and sidebars.
      </Quote>
      
      <Quote size="md" cite="Medium Quote">
        Medium quote for standard content areas and articles.
      </Quote>
      
      <Quote size="lg" cite="Large Quote">
        Large quote for emphasis and featured testimonials.
      </Quote>
    </div>
  ),
};

export const CitationAlignment: Story = {
  args: { children: 'Quote text' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Quote variant="bordered" cite="Left Citation" citeAlign="left">
        Quote with left-aligned citation.
      </Quote>
      
      <Quote variant="bordered" cite="Center Citation" citeAlign="center">
        Quote with center-aligned citation.
      </Quote>
      
      <Quote variant="bordered" cite="Right Citation" citeAlign="right">
        Quote with right-aligned citation (default).
      </Quote>
    </div>
  ),
};

export const LongQuote: Story = {
  args: { children: 'Quote text' },
  render: () => (
    <div className="max-w-2xl">
      <Quote variant="highlighted" size="lg" cite="Maya Angelou">
        I've learned that people will forget what you said, people will forget what you did, 
        but people will never forget how you made them feel. This quote demonstrates how 
        the quote component handles longer text content with proper line wrapping and spacing.
      </Quote>
    </div>
  ),
};