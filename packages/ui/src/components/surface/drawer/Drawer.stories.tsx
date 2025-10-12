import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer, DrawerHeader, DrawerContent, DrawerFooter } from './Drawer';

const meta = {
  title: 'Surface/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A sliding panel component that appears from screen edges. Perfect for navigation menus, filters, and mobile-friendly interfaces.',
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerDemo = ({ side = 'right', size = 'md', children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Drawer
      </button>
      
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} side={side} size={size}>
        {children}
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: null,
  },
  render: () => (
    <DrawerDemo side="right" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Default Drawer</h2>
      </DrawerHeader>
      <DrawerContent>
        <p className="text-gray-600 mb-4">
          This is the default drawer sliding from the right side.
        </p>
        <p className="text-sm text-gray-500">
          Click outside or press Escape to close.
        </p>
      </DrawerContent>
    </DrawerDemo>
  ),
};

export const LeftSide: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => (
    <DrawerDemo side="left" size="sm">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Left Navigation</h2>
      </DrawerHeader>
      <DrawerContent>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Products
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Orders
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Customers
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Settings
          </a>
        </nav>
      </DrawerContent>
    </DrawerDemo>
  ),
};

export const BottomSheet: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => (
    <DrawerDemo side="bottom" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Share Options</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              T
            </div>
            <span className="text-sm">Twitter</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              F
            </div>
            <span className="text-sm">Facebook</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              W
            </div>
            <span className="text-sm">WhatsApp</span>
          </button>
        </div>
      </DrawerContent>
    </DrawerDemo>
  ),
};

export const TopDrawer: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => (
    <DrawerDemo side="top" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Notifications</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-600">John sent you a message about the project</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-gray-600">Your export has finished processing</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerDemo>
  ),
};

export const ShoppingCart: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const [cartItems] = useState([
      { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: '' },
      { id: 2, name: 'Smartphone Case', price: 24.99, quantity: 2, image: '' },
      { id: 3, name: 'USB Cable', price: 12.99, quantity: 1, image: '' },
    ]);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
      <DrawerDemo side="right" size="md">
        <DrawerHeader>
          <h2 className="text-lg font-semibold">Shopping Cart ({cartItems.length})</h2>
        </DrawerHeader>
        
        <DrawerContent>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DrawerContent>
        
        <DrawerFooter>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </DrawerFooter>
      </DrawerDemo>
    );
  },
};