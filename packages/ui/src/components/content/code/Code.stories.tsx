import type { Meta, StoryObj } from '@storybook/react';
import { Code, CodeBlock } from './Code';

const meta = {
  title: 'Content/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Inline and block code display with syntax highlighting and copy functionality.',
      },
    },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineCode: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="max-w-lg space-y-4">
      <p>
        Use the <Code>useState</Code> hook to manage component state in React.
      </p>
      <p>
        The <Code>console.log()</Code> function outputs messages to the browser console.
      </p>
      <p>
        Install dependencies with <Code>npm install package-name</Code>.
      </p>
    </div>
  ),
};

export const BlockCode: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-96">
      <Code variant="block">
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
      </Code>
    </div>
  ),
};

export const WithLanguage: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">JavaScript</h3>
        <Code variant="block" language="javascript">
{`const users = await fetch('/api/users')
  .then(res => res.json())
  .catch(err => console.error(err));`}
        </Code>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">TypeScript</h3>
        <Code variant="block" language="typescript">
{`interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (data: User): Promise<User> => {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data)
  });
};`}
        </Code>
      </div>
    </div>
  ),
};

export const WithLineNumbers: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-96">
      <Code variant="block" showLineNumbers>
{`import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {children}
    </button>
  );
};`}
      </Code>
    </div>
  ),
};

export const Copyable: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Hover to see copy button</h3>
        <Code variant="block" copyable>
{`git clone https://github.com/user/repo.git
cd repo
npm install
npm start`}
        </Code>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">With line numbers and copy</h3>
        <Code variant="block" copyable showLineNumbers language="bash">
{`# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build`}
        </Code>
      </div>
    </div>
  ),
};

export const CodeBlockExample: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-96">
      <h3 className="text-sm font-medium mb-2">Using CodeBlock convenience component</h3>
      <CodeBlock language="json" copyable showLineNumbers>
{`{
  "name": "@company/ui-library",
  "version": "1.0.0",
  "description": "A comprehensive React UI component library",
  "main": "dist/index.js",
  "scripts": {
    "build": "rollup -c",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  }
}`}
      </CodeBlock>
    </div>
  ),
};

export const LongCodeExample: Story = {
  args: { children: 'Code' },
  render: () => (
    <div className="w-full max-w-4xl">
      <h3 className="text-lg font-semibold mb-4">Complete React Component Example</h3>
      <CodeBlock language="typescript" copyable showLineNumbers>
{`import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
  className?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate,
  className,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={cn('bg-white rounded-lg shadow p-6', className)}>
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
          {user.bio && (
            <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
          )}
          
          <p className="mt-2 text-xs text-gray-500">
            Member since {user.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};`}
      </CodeBlock>
    </div>
  ),
};