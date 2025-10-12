import type { Meta, StoryObj } from '@storybook/react';
import { NavNavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Navigation/NavLink',
  component: NavLink,
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
    children: 'Default NavLink',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <NavLink href="#" variant="default">Default</NavLink>
        <NavLink href="#" variant="primary">Primary</NavLink>
        <NavLink href="#" variant="secondary">Secondary</NavLink>
        <NavLink href="#" variant="muted">Muted</NavLink>
        <NavLink href="#" variant="destructive">Destructive</NavLink>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-x-4">
      <NavLink href="#" size="sm">Small NavLink</NavLink>
      <NavLink href="#" size="md">Medium NavLink</NavLink>
      <NavLink href="#" size="lg">Large NavLink</NavLink>
    </div>
  ),
};

export const UnderlineOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <div><NavLink href="#" underline="none">No underline</NavLink></div>
      <div><NavLink href="#" underline="hover">Underline on hover</NavLink></div>
      <div><NavLink href="#" underline="always">Always underlined</NavLink></div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div><NavLink href="#" isActive>Active NavLink</NavLink></div>
      <div><NavLink href="#" disabled>Disabled NavLink</NavLink></div>
    </div>
  ),
};

export const ExternalNavLinks: Story = {
  render: () => (
    <div className="space-y-4">
      <div><NavLink href="https://example.com">Automatic external</NavLink></div>
      <div><NavLink href="#" external>Manually external</NavLink></div>
      <div><NavLink href="https://example.com" showExternalIcon={false}>No icon</NavLink></div>
      <div><NavLink href="mailto:test@example.com">Email link</NavLink></div>
      <div><NavLink href="tel:+1234567890">Phone link</NavLink></div>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-gray-700">
      This is a paragraph with a <NavLink href="#">link in the middle</NavLink> of the text.
      You can also have <NavLink href="https://example.com">external links</NavLink> that 
      open in new tabs.
    </p>
  ),
};