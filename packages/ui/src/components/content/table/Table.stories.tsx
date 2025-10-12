import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

const meta = {
  title: 'Content/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Responsive table components with support for sorting, variants, and flexible sizing.',
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
  args: { children: null },
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mike Johnson</TableCell>
          <TableCell>mike@example.com</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableVariants: Story = {
  args: { children: null },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Table</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Bordered Table</h3>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Striped Table</h3>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget C</TableCell>
              <TableCell>$39.99</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

export const TableSizes: Story = {
  args: { children: null },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Small Table</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Item A</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Item B</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Large Table</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Item A</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Item B</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

export const SortableTable: Story = {
  args: { children: null },
  render: () => (
    <Table hoverable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortable sortDirection="asc">Name</TableHeaderCell>
          <TableHeaderCell sortable>Email</TableHeaderCell>
          <TableHeaderCell sortable sortDirection="desc">Join Date</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Cooper</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>2024-03-15</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Wilson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>2024-03-10</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carol Davis</TableCell>
          <TableCell>carol@example.com</TableCell>
          <TableCell>2024-03-12</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ComplexTable: Story = {
  args: { children: null },
  render: () => (
    <Table variant="bordered" hoverable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell sortable>Price</TableHeaderCell>
          <TableHeaderCell sortable>Stock</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Rating</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                📱
              </div>
              <div>
                <div className="font-medium">iPhone 15 Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$999.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              25 in stock
            </span>
          </TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.8)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                💻
              </div>
              <div>
                <div className="font-medium">MacBook Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$1,999.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
              Out of stock
            </span>
          </TableCell>
          <TableCell>Computers</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.9)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                🎧
              </div>
              <div>
                <div className="font-medium">AirPods Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$249.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
              5 left
            </span>
          </TableCell>
          <TableCell>Audio</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.6)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};