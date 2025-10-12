# Grid Component

A flexible CSS Grid component with comprehensive layout options, responsive behavior, and grid item positioning. Built with Tailwind CSS for consistent grid layouts.

## Features

- **Flexible Grid System**: Support for 1-12 columns and 1-6 rows with auto and subgrid options
- **Comprehensive Gap Control**: Five gap sizes from none to xl
- **Responsive Behavior**: Built-in responsive grid patterns
- **Grid Item Positioning**: Precise control over item placement with GridItem component
- **Alignment & Justification**: Control item alignment and distribution
- **TypeScript Support**: Fully typed with comprehensive prop interfaces
- **Tailwind Integration**: Built with Tailwind CSS Grid utilities

## Components

### Grid
The main grid container component.

### GridItem
A wrapper component for precise grid item positioning and spanning.

## Usage

### Basic Grid

```tsx
import { Grid } from './Grid';

function App() {
  return (
    <Grid cols={3} gap="md">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Grid>
  );
}
```

### Responsive Grid

```tsx
<Grid responsive gap="lg">
  {items.map(item => (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow">
      {item.content}
    </div>
  ))}
</Grid>
```

### Advanced Grid with Positioning

```tsx
import { Grid, GridItem } from './Grid';

<Grid cols={4} rows={3} gap="md">
  <GridItem colSpan={2} rowSpan={2}>
    <div>Large item (2x2)</div>
  </GridItem>
  
  <GridItem>
    <div>Regular item</div>
  </GridItem>
  
  <GridItem colStart={4} rowStart={1} rowEnd={3}>
    <div>Sidebar item</div>
  </GridItem>
  
  <GridItem colSpan="full">
    <div>Full width footer</div>
  </GridItem>
</Grid>
```

## Props

### Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12 \| 'auto' \| 'subgrid'` | `'auto'` | Number of columns in the grid |
| `rows` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 'auto' \| 'subgrid'` | - | Number of rows in the grid |
| `gap` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Gap between grid items |
| `responsive` | `boolean` | `false` | Enable responsive grid behavior |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | - | Vertical alignment of grid items |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | - | Horizontal alignment of grid items |
| `children` | `React.ReactNode` | - | Grid items to display |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### GridItem Props

| Prop | Type | Description |
|------|------|-------------|
| `colSpan` | `1-12 \| 'full' \| 'auto'` | Number of columns the item should span |
| `rowSpan` | `1-6 \| 'full' \| 'auto'` | Number of rows the item should span |
| `colStart` | `1-13 \| 'auto'` | Starting column position |
| `colEnd` | `1-13 \| 'auto'` | Ending column position |
| `rowStart` | `1-7 \| 'auto'` | Starting row position |
| `rowEnd` | `1-7 \| 'auto'` | Ending row position |
| `children` | `React.ReactNode` | Content to display |
| `className` | `string` | Additional CSS classes |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | All standard div attributes |

## Grid Configurations

### Column Options
- `1-12`: Fixed number of columns
- `'auto'`: Automatically sized columns (default)
- `'subgrid'`: Use parent grid's column structure

### Row Options
- `1-6`: Fixed number of rows
- `'auto'`: Automatically sized rows
- `'subgrid'`: Use parent grid's row structure

### Gap Sizes
- `'none'`: No gap (0px)
- `'sm'`: Small gap (8px)
- `'md'`: Medium gap (16px) - Default
- `'lg'`: Large gap (24px)
- `'xl'`: Extra large gap (32px)

## Responsive Behavior

When `responsive={true}`, the grid automatically adjusts:
- **Small screens**: 1 column
- **Medium screens**: 2 columns
- **Large screens**: 3 columns
- **Extra large screens**: 4 columns

```tsx
<Grid responsive gap="lg">
  {/* Items will automatically wrap based on screen size */}
</Grid>
```

## Examples

### Product Card Grid

```tsx
<Grid cols={3} gap="lg" responsive>
  {products.map(product => (
    <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</Grid>
```

### Dashboard Layout

```tsx
<Grid cols={6} rows={4} gap="md" className="h-screen p-4">
  {/* Header */}
  <GridItem colSpan="full">
    <header className="bg-gray-800 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </header>
  </GridItem>

  {/* Sidebar */}
  <GridItem rowSpan={2}>
    <nav className="bg-gray-100 p-4 rounded-lg h-full">
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Dashboard</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Analytics</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Settings</a></li>
      </ul>
    </nav>
  </GridItem>

  {/* Main Content */}
  <GridItem colSpan={3}>
    <main className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-xl font-semibold mb-4">Main Content</h2>
      <p>Your main dashboard content goes here.</p>
    </main>
  </GridItem>

  {/* Sidebar Widget */}
  <GridItem colSpan={2}>
    <aside className="bg-blue-50 p-4 rounded-lg h-full">
      <h3 className="font-semibold mb-3">Quick Stats</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Revenue</span>
          <span className="font-bold">$12,345</span>
        </div>
        <div className="flex justify-between">
          <span>Users</span>
          <span className="font-bold">1,234</span>
        </div>
      </div>
    </aside>
  </GridItem>

  {/* Footer */}
  <GridItem colSpan={5}>
    <footer className="bg-gray-50 p-4 rounded-lg">
      <p className="text-sm text-gray-600">© 2024 Your Company. All rights reserved.</p>
    </footer>
  </GridItem>
</Grid>
```

### Photo Gallery

```tsx
<Grid cols={4} gap="sm" className="p-4">
  {photos.map((photo, index) => (
    <GridItem
      key={photo.id}
      colSpan={index % 5 === 0 ? 2 : 1}
      rowSpan={index % 7 === 0 ? 2 : 1}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </GridItem>
  ))}
</Grid>
```

### Article Layout

```tsx
<Grid cols={12} gap="lg" className="max-w-6xl mx-auto p-6">
  {/* Article Header */}
  <GridItem colSpan={8} colStart={3}>
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">Article Title</h1>
      <p className="text-gray-600">Published on March 15, 2024</p>
    </header>
  </GridItem>

  {/* Table of Contents */}
  <GridItem colSpan={2}>
    <nav className="bg-gray-50 p-4 rounded-lg sticky top-4">
      <h3 className="font-semibold mb-3">Contents</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#section1" className="text-blue-600 hover:underline">Introduction</a></li>
        <li><a href="#section2" className="text-blue-600 hover:underline">Main Content</a></li>
        <li><a href="#section3" className="text-blue-600 hover:underline">Conclusion</a></li>
      </ul>
    </nav>
  </GridItem>

  {/* Main Article */}
  <GridItem colSpan={8}>
    <article className="prose prose-lg max-w-none">
      <p>Article content goes here...</p>
    </article>
  </GridItem>

  {/* Sidebar */}
  <GridItem colSpan={2}>
    <aside className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Related Articles</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-blue-600 hover:underline">Related Article 1</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Related Article 2</a></li>
        </ul>
      </div>
    </aside>
  </GridItem>
</Grid>
```

## Accessibility

The Grid components promote good accessibility practices:

- Uses semantic HTML div elements with proper grid roles when needed
- Supports all ARIA attributes and properties
- Compatible with screen readers and keyboard navigation
- Maintains logical tab order across grid items

## Best Practices

1. **Use Semantic HTML**: Place semantic elements inside grid items for better accessibility
2. **Responsive Design**: Use the responsive prop or custom breakpoint classes for mobile-first design
3. **Content-First**: Design grids based on your content needs, not arbitrary layouts
4. **Performance**: Use CSS Grid (this component) for 2D layouts, Flexbox for 1D layouts
5. **Consistent Spacing**: Use the gap prop for consistent spacing rather than margins on items

## Advanced Usage

### Custom Responsive Behavior

```tsx
<Grid 
  className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
  gap="md"
>
  {/* Custom responsive breakpoints */}
</Grid>
```

### Nested Grids

```tsx
<Grid cols={2} gap="lg">
  <div>
    <h2>Section 1</h2>
    <Grid cols={3} gap="sm">
      <div>Nested item 1</div>
      <div>Nested item 2</div>
      <div>Nested item 3</div>
    </Grid>
  </div>
  
  <div>
    <h2>Section 2</h2>
    <Grid cols={2} gap="sm">
      <div>Nested item A</div>
      <div>Nested item B</div>
    </Grid>
  </div>
</Grid>
```