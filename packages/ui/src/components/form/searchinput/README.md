# SearchInput Component

Search input field with autocomplete suggestions, debounced search, and keyboard navigation.

## Features

- **Autocomplete Suggestions** - Dropdown with searchable options
- **Debounced Search** - Configurable search delay to prevent excessive API calls
- **Keyboard Navigation** - Arrow keys, Enter, and Escape support
- **Search & Clear Buttons** - Optional action buttons with loading states
- **Suggestion Filtering** - Automatic filtering based on input
- **Custom Suggestions** - Support for categories and descriptions
- **Size Variants** - Small, medium, and large sizes
- **Accessibility** - Screen reader compatible with proper ARIA labels

## Usage

```tsx
import { SearchInput } from '@/components/form';

// Basic search
<SearchInput placeholder="Search..." />

// With autocomplete
<SearchInput 
  label="Search Products"
  suggestions={suggestions}
  onSuggestionSelect={handleSelect}
  placeholder="Type to search"
/>

// With search handler
<SearchInput 
  label="Search"
  onSearch={handleSearch}
  debounceMs={500}
  loading={isLoading}
/>

// Full featured
<SearchInput 
  label="Advanced Search"
  suggestions={suggestions}
  onSearch={handleSearch}
  onSuggestionSelect={handleSelect}
  showSearchButton
  showClearButton
  maxSuggestions={8}
  debounceMs={300}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `error` | `string` | - | Error message |
| `helperText` | `string` | - | Helper text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `suggestions` | `SearchOption[]` | `[]` | Autocomplete suggestions |
| `onSearch` | `(query: string) => void` | - | Search handler (debounced) |
| `onSuggestionSelect` | `(suggestion: SearchOption) => void` | - | Suggestion selection handler |
| `debounceMs` | `number` | `300` | Search debounce delay |
| `showSearchButton` | `boolean` | `true` | Show search button |
| `showClearButton` | `boolean` | `true` | Show clear button |
| `loading` | `boolean` | `false` | Loading state |
| `maxSuggestions` | `number` | `10` | Maximum suggestions to show |
| `filterSuggestions` | `boolean` | `true` | Auto-filter suggestions |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | auto-generated | Input ID |

## SearchOption Interface

```tsx
interface SearchOption {
  value: string;        // Option value
  label: string;        // Display text
  description?: string; // Optional description
  category?: string;    // Optional category
}
```

## Suggestion Examples

```tsx
const suggestions = [
  {
    value: 'react',
    label: 'React',
    description: 'JavaScript library for building UIs',
    category: 'Framework'
  },
  {
    value: 'vue',
    label: 'Vue.js', 
    description: 'Progressive JavaScript framework',
    category: 'Framework'
  }
];
```

## Keyboard Navigation

- **Arrow Down/Up** - Navigate through suggestions
- **Enter** - Select highlighted suggestion or perform search
- **Escape** - Close suggestion dropdown
- **Tab** - Move focus (closes dropdown)

## Search Behavior

### Debouncing
Search calls are automatically debounced to prevent excessive API requests:

```tsx
<SearchInput 
  onSearch={handleSearch}
  debounceMs={500} // Wait 500ms after typing stops
/>
```

### Suggestion Filtering
By default, suggestions are filtered based on input text:

```tsx
// Auto-filtering enabled (default)
<SearchInput suggestions={allOptions} />

// Disable auto-filtering (show all suggestions)
<SearchInput 
  suggestions={allOptions} 
  filterSuggestions={false} 
/>
```

## Loading States

Show loading spinner during async operations:

```tsx
const [loading, setLoading] = useState(false);

const handleSearch = async (query) => {
  setLoading(true);
  try {
    const results = await searchAPI(query);
    // Handle results
  } finally {
    setLoading(false);
  }
};

<SearchInput 
  onSearch={handleSearch}
  loading={loading}
/>
```

## Accessibility

- Proper ARIA labels for search functionality
- Keyboard navigation support
- Screen reader announcements for suggestions
- Focus management for suggestion selection
- Loading state announcements