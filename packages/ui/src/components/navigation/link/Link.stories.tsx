import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Link href="#" variant="default">Default</Link>
        <Link href="#" variant="primary">Primary</Link>
        <Link href="#" variant="secondary">Secondary</Link>
        <Link href="#" variant="muted">Muted</Link>
        <Link href="#" variant="destructive">Destructive</Link>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-x-4">
      <Link href="#" size="sm">Small Link</Link>
      <Link href="#" size="md">Medium Link</Link>
      <Link href="#" size="lg">Large Link</Link>
    </div>
  ),
};

export const UnderlineOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <div><Link href="#" underline="none">No underline</Link></div>
      <div><Link href="#" underline="hover">Underline on hover</Link></div>
      <div><Link href="#" underline="always">Always underlined</Link></div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div><Link href="#" isActive>Active Link</Link></div>
      <div><Link href="#" disabled>Disabled Link</Link></div>
    </div>
  ),
};

export const ExternalLinks: Story = {
  render: () => (
    <div className="space-y-4">
      <div><Link href="https://example.com">Automatic external</Link></div>
      <div><Link href="#" external>Manually external</Link></div>
      <div><Link href="https://example.com" showExternalIcon={false}>No icon</Link></div>
      <div><Link href="mailto:test@example.com">Email link</Link></div>
      <div><Link href="tel:+1234567890">Phone link</Link></div>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-gray-700">
      This is a paragraph with a <Link href="#">link in the middle</Link> of the text.
      You can also have <Link href="https://example.com">external links</Link> that 
      open in new tabs.
    </p>
  ),
};