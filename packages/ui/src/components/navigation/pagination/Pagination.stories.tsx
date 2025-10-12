import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationWrapper = ({ totalPages, ...args }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 50,
  },
};

export const FewPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 5,
  },
};

export const WithoutFirstLast: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 20,
    showFirstLast: false,
  },
};

export const WithoutPrevNext: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 20,
    showPrevNext: false,
  },
};

export const CustomLabels: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 15,
    previousLabel: 'Prev',
    nextLabel: 'Next',
  },
};

export const HighSiblingCount: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 30,
    siblingCount: 3,
  },
};

export const Disabled: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10,
    disabled: true,
  },
};

export const SinglePage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 1,
  },
};