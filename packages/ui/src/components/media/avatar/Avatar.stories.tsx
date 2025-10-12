import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Media/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['default', 'soft', 'outline'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'User avatar',
  },
};

export const WithFallback: Story = {
  args: {
    src: '', // Broken URL to show fallback
    alt: 'John Doe',
    fallback: 'JD',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="xs"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Extra small"
      />
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Small"
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Medium"
      />
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Large"
      />
      <Avatar
        size="xl"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Extra large"
      />
      <Avatar
        size="2xl"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="2X Large"
      />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        shape="circle"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Circle"
      />
      <Avatar
        shape="rounded"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Rounded"
      />
      <Avatar
        shape="square"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Square"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="default" fallback="DF" />
      <Avatar variant="soft" fallback="SF" />
      <Avatar variant="outline" fallback="OL" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="Online user"
        status="online"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        alt="Away user"
        status="away"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        alt="Busy user"
        status="busy"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        alt="Offline user"
        status="offline"
      />
    </div>
  ),
};

export const CustomStatusColor: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'User with custom status',
    statusColor: '#8b5cf6',
  },
};

export const AvatarGroupStory: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Group</h3>
        <AvatarGroup>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User 1"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="User 2"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User 3"
          />
          <Avatar fallback="JD" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">With Overflow (max=3)</h3>
        <AvatarGroup max={3}>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User 1"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="User 2"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User 3"
          />
          <Avatar fallback="AB" />
          <Avatar fallback="CD" />
          <Avatar fallback="EF" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
        <div className="space-y-4">
          <AvatarGroup size="sm">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="User 1"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="User 2"
            />
            <Avatar fallback="JD" />
          </AvatarGroup>
          <AvatarGroup size="lg">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="User 1"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="User 2"
            />
            <Avatar fallback="JD" />
          </AvatarGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Spacing</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Tight spacing</p>
            <AvatarGroup spacing="tight">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="User 1"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="User 2"
              />
              <Avatar fallback="JD" />
            </AvatarGroup>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Loose spacing</p>
            <AvatarGroup spacing="loose">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="User 1"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="User 2"
              />
              <Avatar fallback="JD" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};