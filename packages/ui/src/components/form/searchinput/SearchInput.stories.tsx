import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Form/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-96 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    showSearchButton: {
      control: { type: 'boolean' },
    },
    showClearButton: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    filterSuggestions: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSuggestions = [
  { value: 'react', label: 'React', description: 'JavaScript library for building user interfaces', category: 'Framework' },
  { value: 'vue', label: 'Vue.js', description: 'Progressive JavaScript framework', category: 'Framework' },
  { value: 'angular', label: 'Angular', description: 'Platform for building mobile and desktop apps', category: 'Framework' },
  { value: 'typescript', label: 'TypeScript', description: 'Typed superset of JavaScript', category: 'Language' },
  { value: 'javascript', label: 'JavaScript', description: 'High-level programming language', category: 'Language' },
  { value: 'html', label: 'HTML', description: 'Markup language for web pages', category: 'Markup' },
  { value: 'css', label: 'CSS', description: 'Style sheet language', category: 'Styling' },
];

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Search Technologies',
    placeholder: 'Enter technology name',
    id: 'tech-search',
  },
};

export const WithSuggestions: Story = {
  args: {
    label: 'Search with Autocomplete',
    placeholder: 'Type to see suggestions',
    suggestions: sampleSuggestions,
    id: 'suggestions',
  },
};

export const WithoutButtons: Story = {
  args: {
    label: 'Minimal Search',
    placeholder: 'No buttons, just search',
    showSearchButton: false,
    showClearButton: false,
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'minimal',
  },
};

export const LoadingState: Story = {
  args: {
    label: 'Loading Search',
    placeholder: 'Search is loading...',
    loading: true,
    defaultValue: 'searching...',
    id: 'loading',
  },
};

export const WithError: Story = {
  args: {
    label: 'Search with Error',
    placeholder: 'This search has an error',
    error: 'Search service is currently unavailable',
    id: 'error',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Search',
    placeholder: 'Compact search',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Search',
    placeholder: 'Big search input',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'large',
  },
};

export const CustomDebounce: Story = {
  args: {
    label: 'Fast Debounce (100ms)',
    placeholder: 'Quick search response',
    debounceMs: 100,
    suggestions: sampleSuggestions,
    helperText: 'Search triggers quickly after typing',
    id: 'fast',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [searchResults, setSearchResults] = React.useState<string[]>([]);
    const [selectedItem, setSelectedItem] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSearch = async (query: string) => {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const results = sampleSuggestions
          .filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
          .map(item => item.label);
        setSearchResults(results);
        setIsLoading(false);
      }, 800);
    };

    const handleSuggestionSelect = (suggestion: any) => {
      setSelectedItem(suggestion.label);
    };

    return (
      <div className="space-y-4">
        <SearchInput
          label="Interactive Search"
          placeholder="Search technologies..."
          suggestions={sampleSuggestions}
          onSearch={handleSearch}
          onSuggestionSelect={handleSuggestionSelect}
          loading={isLoading}
          id="interactive"
        />
        
        <div className="space-y-2">
          {selectedItem && (
            <div className="p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-900">Selected:</p>
              <p className="text-blue-700">{selectedItem}</p>
            </div>
          )}
          
          {searchResults.length > 0 && (
            <div className="p-3 bg-green-50 rounded">
              <p className="text-sm font-medium text-green-900">Search Results:</p>
              <ul className="mt-1 text-green-700 text-sm">
                {searchResults.map((result, index) => (
                  <li key={index}>• {result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  },
};

export const ProductSearch: Story = {
  render: () => {
    const products = [
      { value: 'iphone-14', label: 'iPhone 14', description: '$799 - Latest Apple smartphone', category: 'Electronics' },
      { value: 'macbook-pro', label: 'MacBook Pro', description: '$1299 - Professional laptop', category: 'Electronics' },
      { value: 'nike-shoes', label: 'Nike Air Max', description: '$120 - Running shoes', category: 'Fashion' },
      { value: 'coffee-mug', label: 'Coffee Mug', description: '$15 - Ceramic mug', category: 'Home' },
      { value: 'wireless-headphones', label: 'Wireless Headphones', description: '$199 - Noise cancelling', category: 'Electronics' },
    ];

    const [cart, setCart] = React.useState<any[]>([]);

    const handleProductSelect = (product: any) => {
      const existingItem = cart.find(item => item.value === product.value);
      if (existingItem) {
        setCart(cart.map(item => 
          item.value === product.value 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };

    return (
      <div className="space-y-6">
        <SearchInput
          label="Product Search"
          placeholder="Search for products..."
          suggestions={products}
          onSuggestionSelect={handleProductSelect}
          helperText="Select products to add to cart"
          id="product-search"
        />
        
        {cart.length > 0 && (
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-900 mb-3">Shopping Cart</h3>
            <div className="space-y-2">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium">Qty: {item.quantity}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setCart([])}
              className="mt-3 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    );
  },
};