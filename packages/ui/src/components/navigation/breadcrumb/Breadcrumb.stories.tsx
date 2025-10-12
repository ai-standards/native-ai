import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', isActive: true },
];

const longItems = [
  { label: 'Home', href: '/' },
  { label: 'Category', href: '/category' },
  { label: 'Subcategory', href: '/category/subcategory' },
  { label: 'Products', href: '/category/subcategory/products' },
  { label: 'Item Type', href: '/category/subcategory/products/type' },
  { label: 'Specific Item', href: '/category/subcategory/products/type/item' },
  { label: 'Details', isActive: true },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
      { label: 'Settings', onClick: () => alert('Settings clicked') },
      { label: 'Profile', isActive: true },
    ],
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: basicItems,
    separator: <span className="text-gray-400">/</span>,
  },
};

export const Truncated: Story = {
  args: {
    items: longItems,
    maxItems: 4,
  },
};

export const TruncatedCustom: Story = {
  args: {
    items: longItems,
    maxItems: 5,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2,
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Current Page', isActive: true }],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Root', href: '/' },
      { label: 'Level 1', href: '/level1' },
      { label: 'Level 2', href: '/level1/level2' },
      { label: 'Level 3', href: '/level1/level2/level3' },
      { label: 'Level 4', href: '/level1/level2/level3/level4' },
      { label: 'Level 5', href: '/level1/level2/level3/level4/level5' },
      { label: 'Current', isActive: true },
    ],
    maxItems: 4,
  },
};