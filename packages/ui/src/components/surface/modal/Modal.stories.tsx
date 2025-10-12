import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Surface/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with backdrop, focus management, and keyboard navigation. Perfect for confirmations, forms, and detailed content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the modal',
    },
    position: {
      control: 'select',
      options: ['center', 'top'],
      description: 'Vertical positioning of the modal',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    onClose: {
      action: 'closed',
      description: 'Called when the modal should close',
    },
    children: {
      control: false,
      description: 'Modal content',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic modal story
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Title</h2>
          </ModalHeader>
          <ModalContent>
            <p>This is a basic modal with header and content sections.</p>
            <p>Click the backdrop, press Escape, or use the close button to dismiss it.</p>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    
    return (
      <div className="flex gap-4 flex-wrap">
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <div key={size}>
            <button
              onClick={() => setActiveModal(size)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {size.toUpperCase()} Modal
            </button>
            
            <Modal 
              isOpen={activeModal === size} 
              onClose={() => setActiveModal(null)}
              size={size}
            >
              <ModalHeader>
                <h2 className="text-xl font-semibold">{size.toUpperCase()} Modal</h2>
              </ModalHeader>
              <ModalContent>
                <p>This is a {size} sized modal.</p>
                <p>Different sizes help accommodate various content types.</p>
              </ModalContent>
              <ModalFooter>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>
        ))}
      </div>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<'center' | 'top' | null>(null);
    
    return (
      <div className="flex gap-4">
        <button
          onClick={() => setPosition('center')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Center Modal
        </button>
        <button
          onClick={() => setPosition('top')}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Top Modal
        </button>
        
        <Modal 
          isOpen={position !== null} 
          onClose={() => setPosition(null)}
          position={position || 'center'}
        >
          <ModalHeader>
            <h2 className="text-xl font-semibold">{position} Position</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal is positioned at the {position} of the screen.</p>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setPosition(null)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Item
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader>
            <h2 className="text-xl font-semibold text-red-900">Confirm Deletion</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>Are you sure you want to delete this item?</p>
              <p className="text-sm text-gray-600">
                This action cannot be undone. The item will be permanently removed.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a confirmation dialog for destructive actions.',
      },
    },
  },
};

export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add User
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader>
            <h2 className="text-xl font-semibold">Add New User</h2>
          </ModalHeader>
          <ModalContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about this user..."
                />
              </div>
            </form>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add User
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a form modal for creating new records.',
      },
    },
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open Modal (No Close Button)
        </button>
        
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          showCloseButton={false}
        >
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Without Close Button</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal doesn't have a close button in the top-right corner.</p>
            <p>You can still close it by clicking the backdrop or pressing Escape.</p>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close Modal
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const PreventClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Open Persistent Modal
        </button>
        
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          closeOnOverlayClick={false}
          closeOnEscape={false}
        >
          <ModalHeader>
            <h2 className="text-xl font-semibold">Persistent Modal</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>This modal cannot be closed by clicking the backdrop or pressing Escape.</p>
              <p>You must use the explicit action buttons to close it.</p>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Use this pattern carefully, as it can be frustrating for users.
                </p>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a modal that prevents accidental closure.',
      },
    },
  },
};