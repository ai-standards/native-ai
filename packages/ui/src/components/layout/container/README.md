# Container Component

A responsive container component with configurable sizes, padding, and centering options. Built with Tailwind CSS for consistent layout management.

## Features

- **Responsive Sizing**: Multiple predefined max-width options (sm, md, lg, xl, full)
- **Flexible Padding**: Configurable internal padding from none to xl
- **Center Alignment**: Optional horizontal centering with `mx-auto`
- **Tailwind Integration**: Built with Tailwind CSS utility classes
- **TypeScript Support**: Fully typed with comprehensive prop interfaces
- **Accessibility**: Forwards all standard HTML div attributes and props

## Usage

### Basic Usage

```tsx
import { Container } from './Container';

function App() {
  return (
    <Container>
      <h1>My Content</h1>
      <p>This content is contained within the default container.</p>
    </Container>
  );
}
```

### With Custom Size and Centering

```tsx
<Container size="lg" center>
  <article>
    <h1>Article Title</h1>
    <p>This article content is contained in a large, centered container.</p>
  </article>
</Container>
```

### Custom Padding

```tsx
<Container padding="xl">
  <div>Content with extra large padding</div>
</Container>
```

### Full Width Container

```tsx
<Container size="full" padding="none">
  <div>Full width container with no internal padding</div>
</Container>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'full'` | Maximum width of the container |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Internal padding of the container |
| `center` | `boolean` | `false` | Whether to center the container horizontally |
| `children` | `React.ReactNode` | - | Content to display inside the container |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

## Size Variants

- **sm**: `max-w-sm` (384px)
- **md**: `max-w-md` (448px) 
- **lg**: `max-w-lg` (512px)
- **xl**: `max-w-xl` (576px)
- **full**: `max-w-full` (100%)

## Padding Variants

- **none**: `p-0` (0px)
- **sm**: `p-2` (8px)
- **md**: `p-4` (16px)
- **lg**: `p-6` (24px)
- **xl**: `p-8` (32px)

## Examples

### Article Layout

```tsx
<Container size="lg" padding="lg" center>
  <article className="prose">
    <h1>Blog Post Title</h1>
    <p>Lorem ipsum dolor sit amet...</p>
  </article>
</Container>
```

### Sidebar Content

```tsx
<Container size="sm" padding="md">
  <nav>
    <h2>Navigation</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</Container>
```

### Nested Containers

```tsx
<Container size="full" padding="lg">
  <Container size="xl" center>
    <Container size="md" padding="sm">
      <p>Deeply nested content</p>
    </Container>
  </Container>
</Container>
```

## Accessibility

The Container component forwards all standard HTML div attributes and supports:

- ARIA attributes (`aria-label`, `aria-describedby`, etc.)
- Role attributes (`role`)
- Data attributes (`data-*`)
- Event handlers (`onClick`, `onFocus`, etc.)

## Styling

The component uses Tailwind CSS utility classes and can be customized by:

1. **Custom Classes**: Pass additional classes via the `className` prop
2. **CSS Modules**: Import and apply CSS module classes
3. **Tailwind Variants**: Extend the component with additional Tailwind utilities

```tsx
<Container 
  className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm"
  size="lg" 
  center
>
  <div>Styled container content</div>
</Container>
```