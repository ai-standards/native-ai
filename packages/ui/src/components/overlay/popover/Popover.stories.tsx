import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Popover } from './Popover';

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A floating overlay component that displays contextual content relative to a trigger element. Perfect for menus, tooltips, and additional information.',
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { open: false, onOpenChange: () => {}, children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Click me
          </button>
          <div className="p-3 min-w-[200px]">
            <p className="text-sm">This is a popover with some content!</p>
            <p className="text-xs text-gray-500 mt-2">Click outside to close.</p>
          </div>
        </Popover>
      </div>
    );
  },
};

export const Hover: Story = {
  args: { open: false, onOpenChange: () => {}, children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Popover 
          open={isOpen} 
          onOpenChange={setIsOpen}
          trigger="hover"
        >
          <span
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="text-blue-600 underline cursor-pointer"
          >
            Hover over me
          </span>
          <div className="p-3 min-w-[180px]">
            <p className="text-sm">This appears on hover!</p>
          </div>
        </Popover>
      </div>
    );
  },
};

export const Menu: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const menuItems = [
      { label: 'Edit', icon: '️' },
      { label: 'Duplicate', icon: '' },
      { label: 'Share', icon: '' },
      { type: 'divider' },
      { label: 'Delete', icon: '️', danger: true },
    ];
    
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 border border-gray-300 rounded text-sm flex items-center space-x-1"
          >
            <span>Actions</span>
            <span className="text-xs">▼</span>
          </button>
          <div className="min-w-[150px] py-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.type === 'divider' ? (
                  <hr className="my-1 border-gray-200" />
                ) : (
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                      item.danger ? 'text-red-600 hover:bg-red-50' : ''
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </Popover>
      </div>
    );
  },
};

export const UserProfile: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const user = {
      name: 'John Doe',
      username: 'johndoe',
      avatar: '',
      bio: 'Frontend developer passionate about creating great user experiences.',
      followers: 1234,
      following: 567,
    };
    
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Popover 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          trigger="hover"
          placement="top"
        >
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer text-lg"
          >
            {user.avatar}
          </div>
          <div className="p-4 max-w-xs">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                {user.avatar}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">@{user.username}</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-3">{user.bio}</p>
            
            <div className="flex space-x-4 text-sm text-gray-600">
              <div>
                <span className="font-medium text-gray-900">{user.followers}</span>
                <span className="ml-1">followers</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">{user.following}</span>
                <span className="ml-1">following</span>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    );
  },
};

export const FilterDropdown: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
      status: '',
      category: '',
      featured: false,
    });
    
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center space-x-2"
          >
            <span></span>
            <span>Filter</span>
          </button>
          <div className="p-4 min-w-[250px]">
            <h3 className="font-medium mb-3 text-sm">Filter Options</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="">All Categories</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center space-x-2 text-xs">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => setFilters({...filters, featured: e.target.checked})}
                    className="w-3 h-3"
                  />
                  <span>Featured only</span>
                </label>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => setFilters({ status: '', category: '', featured: false })}
                className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </Popover>
      </div>
    );
  },
};

export const Placements: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const [activePopover, setActivePopover] = useState<string | null>(null);
    
    const placements = [
      { id: 'top', label: 'Top', placement: 'top' as const },
      { id: 'right', label: 'Right', placement: 'right' as const },
      { id: 'bottom', label: 'Bottom', placement: 'bottom' as const },
      { id: 'left', label: 'Left', placement: 'left' as const },
    ];
    
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          {placements.map((item) => (
            <Popover
              key={item.id}
              isOpen={activePopover === item.id}
              onClose={() => setActivePopover(null)}
              placement={item.placement}
            >
              <button
                onClick={() => setActivePopover(item.id)}
                className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
              >
                {item.label}
              </button>
              <div className="p-3 text-sm">
                <p>Popover positioned to the {item.label.toLowerCase()}</p>
              </div>
            </Popover>
          ))}
        </div>
      </div>
    );
  },
};