import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

const meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A lightweight tooltip component that displays helpful text on hover or focus. Perfect for providing contextual information and UI guidance.',
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <div className="min-h-[200px] flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          This is a helpful tooltip
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const FormHelp: Story = {
  args: { children: null },
  render: () => (
    <div className="min-h-[300px] flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
            <Tooltip>
              <TooltipTrigger>
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-sm">ℹ️</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                We'll never share your email with anyone else.
              </TooltipContent>
            </Tooltip>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
            <Tooltip>
              <TooltipTrigger>
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-sm"></span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
              </TooltipContent>
            </Tooltip>
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
      </div>
    </div>
  ),
};

export const IconTooltips: Story = {
  args: { children: null },
  render: () => (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="flex space-x-1 border border-gray-200 rounded p-1">
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <strong className="text-sm">B</strong>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Bold (Ctrl+B)
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <em className="text-sm">I</em>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Italic (Ctrl+I)
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <u className="text-sm">U</u>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Underline (Ctrl+U)
          </TooltipContent>
        </Tooltip>
        
        <div className="w-px bg-gray-200 mx-1" />
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <span className="text-sm"></span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Insert Link (Ctrl+K)
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  args: { children: null },
  render: () => (
    <div className="min-h-[200px] flex items-center justify-center space-x-4">
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="mr-1"></span>
            Success
          </span>
        </TooltipTrigger>
        <TooltipContent>
          All systems operational. Last check: 2 minutes ago.
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <span className="mr-1"></span>
            Warning
          </span>
        </TooltipTrigger>
        <TooltipContent>
          High memory usage detected. Consider restarting the service.
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <span className="mr-1"></span>
            Error
          </span>
        </TooltipTrigger>
        <TooltipContent>
          Connection failed. Check network settings and try again.
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};