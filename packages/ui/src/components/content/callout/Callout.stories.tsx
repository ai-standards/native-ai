import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta = {
  title: 'Content/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert-style callouts for displaying important messages, notices, and status information.',
      },
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a neutral callout with default styling. Use it for general information and notices.',
  },
};

export const Variants: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Callout variant="info">
        This is an informational callout. Use it to provide helpful tips and additional context.
      </Callout>
      
      <Callout variant="success">
        This is a success callout. Perfect for confirmation messages and positive feedback.
      </Callout>
      
      <Callout variant="warning">
        This is a warning callout. Use it to alert users about potential issues or important considerations.
      </Callout>
      
      <Callout variant="error">
        This is an error callout. Use it to communicate problems that need immediate attention.
      </Callout>
      
      <Callout variant="neutral">
        This is a neutral callout. Good for general information that doesn't fit other categories.
      </Callout>
    </div>
  ),
};

export const WithTitles: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Callout variant="info" title="Pro Tip">
        You can significantly improve performance by enabling caching in your application settings.
      </Callout>
      
      <Callout variant="success" title="Account Created">
        Your account has been successfully created! Check your email for verification instructions.
      </Callout>
      
      <Callout variant="warning" title="Maintenance Window">
        The system will undergo maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be unavailable.
      </Callout>
      
      <Callout variant="error" title="Authentication Failed">
        Invalid credentials provided. Please check your username and password and try again.
      </Callout>
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Callout size="sm" variant="info">
        Small callout size for compact layouts and minimal messaging.
      </Callout>
      
      <Callout size="md" variant="success" title="Medium Size">
        Medium callout size is the default and works well for most use cases.
      </Callout>
      
      <Callout size="lg" variant="warning" title="Large Callout">
        Large callout size for prominent messaging and important announcements that need more visual weight.
      </Callout>
    </div>
  ),
};

export const CustomIcons: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Callout variant="info" icon="📝" title="Documentation">
        Check out the updated documentation for the latest API changes and examples.
      </Callout>
      
      <Callout variant="success" icon="🚀" title="Feature Launch">
        The new dashboard feature is now live! Explore the enhanced analytics and reporting tools.
      </Callout>
      
      <Callout variant="warning" icon="⚡" title="Performance Impact">
        This action may affect system performance. Consider running it during off-peak hours.
      </Callout>
      
      <Callout variant="neutral" icon="🔧" title="Under Development">
        This feature is currently in beta. Some functionality may change in future releases.
      </Callout>
    </div>
  ),
};

export const Dismissible: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Callout variant="info" title="Cookie Notice" dismissible>
        We use cookies to improve your experience. You can manage your preferences in the settings.
      </Callout>
      
      <Callout variant="success" title="Update Available" dismissible>
        A new version is available! Click here to update to the latest release.
      </Callout>
      
      <Callout 
        variant="warning" 
        title="Trial Expiring" 
        dismissible
        onDismiss={() => console.log('Trial warning dismissed')}
      >
        Your trial expires in 3 days. Upgrade now to continue using all premium features.
      </Callout>
    </div>
  ),
};

export const ComplexContent: Story = {
  args: { children: 'Content' },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Callout variant="info" title="API Rate Limits" size="lg">
        <div className="space-y-3">
          <p>
            Our API implements rate limiting to ensure fair usage and system stability. 
            Here are the current limits for your plan:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Standard Plan: 1,000 requests per hour</li>
            <li>Pro Plan: 10,000 requests per hour</li>
            <li>Enterprise Plan: 100,000 requests per hour</li>
          </ul>
          <p className="text-sm">
            <strong>Need higher limits?</strong>{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Contact our sales team
            </a>{' '}
            to discuss custom plans.
          </p>
        </div>
      </Callout>
      
      <Callout variant="warning" title="Breaking Changes in v2.0" dismissible>
        <div className="space-y-3">
          <p>
            Version 2.0 introduces several breaking changes that may affect your integration:
          </p>
          <div className="bg-yellow-100 border border-yellow-200 rounded p-3 text-sm">
            <ul className="space-y-1">
              <li>• Authentication headers have changed</li>
              <li>• Response format for user endpoints updated</li>
              <li>• Deprecated endpoints will be removed</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
              View Migration Guide
            </button>
            <button className="px-3 py-1 border border-yellow-600 text-yellow-700 rounded text-sm hover:bg-yellow-50">
              Schedule Update
            </button>
          </div>
        </div>
      </Callout>
      
      <Callout variant="success" title="Deployment Successful" icon="🎉">
        <div className="space-y-2">
          <p>Your application has been deployed successfully to production!</p>
          <div className="flex items-center gap-4 text-sm">
            <span>🌐 <strong>URL:</strong> https://myapp.com</span>
            <span>⏱️ <strong>Deploy time:</strong> 2m 34s</span>
          </div>
          <div className="mt-3 p-2 bg-green-100 border border-green-200 rounded text-sm">
            <strong>Next steps:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Monitor application health</li>
              <li>Update DNS records if needed</li>
              <li>Notify team members</li>
            </ul>
          </div>
        </div>
      </Callout>
    </div>
  ),
};