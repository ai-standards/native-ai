import type { Meta, StoryObj } from '@storybook/react';
import { Text, Heading, Link } from './Typography';

const meta = {
  title: 'Content/Typography',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography components for consistent text rendering and semantic structure.',
      },
    },
  },
} satisfies Meta;

export default meta;

// Text Stories
export const TextVariants: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <div>
        <Text variant="large">Large text for prominent content</Text>
      </div>
      <div>
        <Text variant="body">Body text for main content and paragraphs</Text>
      </div>
      <div>
        <Text variant="label">Label text for form fields and UI elements</Text>
      </div>
      <div>
        <Text variant="caption">Caption text for supplementary information</Text>
      </div>
      <div>
        <Text variant="small">Small text for fine print and details</Text>
      </div>
    </div>
  ),
};

export const TextWeights: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-lg">
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const TextColors: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-lg">
      <Text color="default">Default color text</Text>
      <Text color="muted">Muted color text</Text>
      <Text color="subtle">Subtle color text</Text>
      <Text color="accent">Accent color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="error">Error color text</Text>
    </div>
  ),
};

export const TextAlignment: StoryObj = {
  render: () => (
    <div className="space-y-4 w-80 border p-4">
      <Text align="left">Left aligned text content</Text>
      <Text align="center">Center aligned text content</Text>
      <Text align="right">Right aligned text content</Text>
      <Text align="justify">
        Justified text content that spreads evenly across the available width, 
        creating clean edges on both sides of the paragraph.
      </Text>
    </div>
  ),
};

// Heading Stories
export const HeadingLevels: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const HeadingSizes: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Heading size="4xl">4XL Size Heading</Heading>
      <Heading size="3xl">3XL Size Heading</Heading>
      <Heading size="2xl">2XL Size Heading</Heading>
      <Heading size="xl">XL Size Heading</Heading>
      <Heading size="lg">Large Size Heading</Heading>
      <Heading size="md">Medium Size Heading</Heading>
      <Heading size="sm">Small Size Heading</Heading>
      <Heading size="xs">Extra Small Size Heading</Heading>
    </div>
  ),
};

export const HeadingVariations: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Heading level={2} weight="bold" color="accent">
        Bold Accent Heading
      </Heading>
      <Heading level={3} weight="medium" color="muted" align="center">
        Centered Muted Heading
      </Heading>
      <Heading level={4} mb="lg">
        Heading with Large Bottom Margin
      </Heading>
      <Text>Following content...</Text>
    </div>
  ),
};

// Link Stories
export const LinkVariants: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-lg">
      <div>
        <Link href="#" variant="default">Default link style</Link>
      </div>
      <div>
        <Link href="#" variant="muted">Muted link style</Link>
      </div>
      <div>
        <Link href="#" variant="accent">Accent link style</Link>
      </div>
      <div>
        <Link href="#" variant="subtle">Subtle link style</Link>
      </div>
    </div>
  ),
};

export const LinkUnderlines: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-lg">
      <div>
        <Link href="#" underline="always">Always underlined link</Link>
      </div>
      <div>
        <Link href="#" underline="hover">Underlined on hover (default)</Link>
      </div>
      <div>
        <Link href="#" underline="none">Never underlined link</Link>
      </div>
    </div>
  ),
};

export const ExternalLinks: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-lg">
      <div>
        <Link href="https://example.com">Internal-style link</Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          External link with indicator
        </Link>
      </div>
    </div>
  ),
};

// Combined Example
export const TypographyShowcase: StoryObj = {
  render: () => (
    <article className="max-w-2xl space-y-6 p-6">
      <Heading level={1} mb="lg">Typography Showcase</Heading>
      
      <div className="space-y-4">
        <Heading level={2}>Introduction</Heading>
        <Text>
          This is a comprehensive example of typography components working together. 
          The components provide consistent styling while maintaining semantic HTML structure.
        </Text>
      </div>
      
      <div className="space-y-4">
        <Heading level={3} color="accent">Key Features</Heading>
        <Text>
          Typography components include support for various text sizes, weights, and colors. 
          You can also use <Link href="#" variant="accent">inline links</Link> and 
          <Link href="https://example.com" external>external links</Link> within text content.
        </Text>
        
        <Text variant="caption" color="muted">
          This caption text demonstrates how different variants work together 
          to create visual hierarchy.
        </Text>
      </div>
      
      <div className="space-y-2">
        <Heading level={4} mb="sm">Contact Information</Heading>
        <Text as="div">
          <Text variant="label" as="span">Email:</Text>{' '}
          <Link href="mailto:example@domain.com">example@domain.com</Link>
        </Text>
        <Text as="div">
          <Text variant="label" as="span">Website:</Text>{' '}
          <Link href="https://example.com" external>example.com</Link>
        </Text>
      </div>
    </article>
  ),
};