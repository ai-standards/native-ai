# Section Component

A versatile section component for organizing page content with different variants, spacing options, and composable sub-components. Built with Tailwind CSS for consistent styling.

## Features

- **Multiple Variants**: Different background styles (default, primary, secondary, accent, muted)
- **Flexible Spacing**: Configurable vertical padding from none to xl
- **Full Height Option**: Optional full viewport height with `min-h-screen`
- **Semantic HTML**: Uses proper `<section>` element for better accessibility
- **Composable Sub-components**: Header, Content, and Footer components
- **Tailwind Integration**: Built with Tailwind CSS utility classes
- **TypeScript Support**: Fully typed with comprehensive prop interfaces

## Usage

### Basic Usage

```tsx
import { Section } from './Section';

function App() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <h2>Section Title</h2>
        <p>This is the main section content.</p>
      </div>
    </Section>
  );
}
```

### With Variant and Spacing

```tsx
<Section variant="primary" spacing="lg">
  <div className="container mx-auto px-4">
    <h2>Featured Section</h2>
    <p>This section has a primary background with large spacing.</p>
  </div>
</Section>
```

### Full Height Hero Section

```tsx
<Section variant="accent" spacing="xl" fullHeight>
  <div className="container mx-auto px-4 flex items-center justify-center h-full">
    <div className="text-center">
      <h1>Welcome</h1>
      <p>Full height hero section</p>
    </div>
  </div>
</Section>
```

### Using Composable Components

```tsx
import { Section, SectionHeader, SectionContent, SectionFooter } from './Section';

<Section>
  <div className="container mx-auto px-4">
    <SectionHeader>
      <h2>Section Title</h2>
      <p>Section description</p>
    </SectionHeader>
    
    <SectionContent>
      <div>Main content goes here</div>
    </SectionContent>
    
    <SectionFooter>
      <button>Call to Action</button>
    </SectionFooter>
  </div>
</Section>
```

## Props

### Section Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'muted'` | `'default'` | Background style variant |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Vertical padding of the section |
| `fullHeight` | `boolean` | `false` | Whether to take full viewport height |
| `children` | `React.ReactNode` | - | Content to display inside the section |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `React.HTMLAttributes<HTMLElement>` | - | All standard section attributes |

### Sub-component Props

All sub-components (`SectionHeader`, `SectionContent`, `SectionFooter`) accept:

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Content to display |
| `className` | `string` | Additional CSS classes |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | All standard div attributes |

## Variants

- **default**: `bg-white` - Clean white background
- **primary**: `bg-blue-50` - Light blue background for emphasis
- **secondary**: `bg-gray-50` - Light gray background for contrast
- **accent**: `bg-purple-50` - Light purple background for highlights
- **muted**: `bg-gray-100` - Muted gray background for subtle sections

## Spacing Options

- **none**: `py-0` - No vertical padding
- **sm**: `py-4` - Small padding (16px)
- **md**: `py-8` - Medium padding (32px) - Default
- **lg**: `py-12` - Large padding (48px)
- **xl**: `py-16` - Extra large padding (64px)

## Examples

### Landing Page Structure

```tsx
function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section variant="primary" spacing="xl" fullHeight>
        <div className="container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome</h1>
            <p className="text-xl mb-8">Amazing product description</p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <h2 className="text-3xl font-bold text-center">Features</h2>
          </SectionHeader>
          
          <SectionContent>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature items */}
            </div>
          </SectionContent>
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="accent" spacing="lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <button className="px-6 py-3 bg-purple-600 text-white rounded">
            Sign Up Now
          </button>
        </div>
      </Section>
    </div>
  );
}
```

### Article Layout

```tsx
<Section variant="default" spacing="lg">
  <div className="container mx-auto px-4 max-w-4xl">
    <SectionHeader>
      <h1 className="text-4xl font-bold">Article Title</h1>
      <p className="text-gray-600 mt-2">Published on March 15, 2024</p>
    </SectionHeader>
    
    <SectionContent>
      <div className="prose prose-lg max-w-none">
        <p>Article content...</p>
      </div>
    </SectionContent>
    
    <SectionFooter>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button>Share</button>
          <button>Like</button>
        </div>
        <p className="text-sm text-gray-500">5 min read</p>
      </div>
    </SectionFooter>
  </div>
</Section>
```

## Accessibility

The Section component promotes good accessibility practices:

- Uses semantic `<section>` HTML element
- Forwards all ARIA attributes (`aria-label`, `aria-describedby`, etc.)
- Supports role attributes
- Compatible with screen readers
- Proper heading hierarchy with sub-components

## Styling

Customize the appearance using:

1. **Variant Props**: Choose from predefined background styles
2. **Custom Classes**: Add additional Tailwind classes via `className`
3. **CSS Overrides**: Use CSS modules or styled-components for advanced styling

```tsx
<Section 
  variant="primary"
  className="border-l-4 border-blue-500 shadow-lg"
  spacing="xl"
>
  <div>Custom styled section</div>
</Section>
```

## Best Practices

1. **Use Semantic Structure**: Organize content logically with Header, Content, Footer
2. **Consistent Spacing**: Use the spacing prop for consistent vertical rhythm
3. **Responsive Design**: Combine with responsive container classes
4. **Accessibility**: Include proper headings and ARIA labels when needed
5. **Performance**: Use appropriate variants to minimize custom CSS