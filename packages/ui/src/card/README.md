# Card Component

A flexible, composable card component with multiple variants, padding options, and sub-components for structured content layout.

## Features

- **Multiple Variants**: Default, outlined, elevated, and flat styles
- **Padding Options**: None, small, medium, and large padding sizes
- **Composable Sub-components**: CardHeader, CardContent, and CardFooter for structured layouts
- **Accessibility**: Proper semantic structure and ARIA support
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Tailwind CSS**: Built with utility-first CSS framework for consistent styling

## Usage

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/lib/ui/card';

// Basic usage
<Card>
  <p>Simple card content</p>
</Card>

// With variants and padding
<Card variant="elevated" padding="lg">
  <h2>Elevated card with large padding</h2>
</Card>

// Composed card with all sub-components
<Card>
  <CardHeader>
    <h2 className="text-xl font-bold">Product Details</h2>
    <p className="text-gray-500">Premium subscription</p>
  </CardHeader>
  <CardContent>
    <p>This product includes all premium features and priority support.</p>
    <ul className="mt-2 space-y-1">
      <li>✓ Advanced analytics</li>
      <li>✓ Priority support</li>
      <li>✓ Custom integrations</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Learn More</Button>
    <Button>Subscribe Now</Button>
  </CardFooter>
</Card>
```

## Props

### Card Props

| Prop      | Type                                      | Default   | Description                           |
|-----------|-------------------------------------------|-----------|---------------------------------------|
| variant   | 'default' \| 'outlined' \| 'elevated' \| 'flat' | 'default' | Visual style variant of the card      |
| padding   | 'none' \| 'sm' \| 'md' \| 'lg'          | 'md'      | Internal padding of the card          |
| children  | React.ReactNode                           | -         | Content to display inside the card    |
| className | string                                    | -         | Additional CSS classes                |

### CardHeader Props

| Prop      | Type            | Default | Description                        |
|-----------|-----------------|---------|----------------------------------- |
| children  | React.ReactNode | -       | Content for the card header       |
| className | string          | -       | Additional CSS classes            |

### CardContent Props

| Prop      | Type            | Default | Description                        |
|-----------|-----------------|---------|----------------------------------- |
| children  | React.ReactNode | -       | Content for the card body         |
| className | string          | -       | Additional CSS classes            |

### CardFooter Props

| Prop      | Type            | Default | Description                        |
|-----------|-----------------|---------|----------------------------------- |
| children  | React.ReactNode | -       | Content for the card footer       |
| className | string          | -       | Additional CSS classes            |

## Variants

### Default
The default card with subtle border and shadow.

```tsx
<Card variant="default">
  Default card styling
</Card>
```

### Outlined
A card with a prominent border and no shadow.

```tsx
<Card variant="outlined">
  Outlined card styling
</Card>
```

### Elevated
A card with prominent shadow for depth perception.

```tsx
<Card variant="elevated">
  Elevated card styling
</Card>
```

### Flat
A minimal card with no border or shadow.

```tsx
<Card variant="flat">
  Flat card styling
</Card>
```

## Padding Options

### None
No internal padding - useful for image cards or custom layouts.

```tsx
<Card padding="none">
  <img src="image.jpg" alt="Full width image" />
</Card>
```

### Small (sm)
Reduced padding for compact layouts.

```tsx
<Card padding="sm">
  Compact card content
</Card>
```

### Medium (md) - Default
Standard padding for most use cases.

```tsx
<Card padding="md">
  Standard card content
</Card>
```

### Large (lg)
Increased padding for spacious layouts.

```tsx
<Card padding="lg">
  Spacious card content
</Card>
```

## Examples

### Image Card
```tsx
<Card padding="none">
  <img src="hero.jpg" alt="Hero image" className="w-full h-48 object-cover" />
  <div className="p-6">
    <CardHeader className="p-0 border-0">
      <h3 className="text-lg font-semibold">Beautiful Landscape</h3>
    </CardHeader>
    <CardContent className="p-0">
      <p>A stunning view captured at sunset.</p>
    </CardContent>
  </div>
</Card>
```

### Action Card
```tsx
<Card variant="outlined">
  <CardContent>
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">Get Started</h3>
      <p className="text-gray-600 mb-4">Ready to begin your journey?</p>
    </div>
  </CardContent>
  <CardFooter className="justify-center">
    <Button>Start Now</Button>
  </CardFooter>
</Card>
```

### Product Card
```tsx
<Card>
  <CardHeader>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">Premium Plan</h3>
        <p className="text-sm text-gray-500">Most popular</p>
      </div>
      <span className="text-2xl font-bold">$29/mo</span>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2">
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
        Unlimited projects
      </li>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
        Priority support
      </li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Choose Plan</Button>
  </CardFooter>
</Card>
```

## Accessibility

- Uses semantic HTML structure
- Supports proper focus management
- Compatible with screen readers
- Follows WCAG guidelines for color contrast
- Keyboard navigation friendly

## Customization

The card components are built with Tailwind CSS and can be easily customized:

```tsx
// Custom styling
<Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <CardHeader className="border-white/20">
    <h2 className="text-white">Custom Styled Card</h2>
  </CardHeader>
  <CardContent>
    <p>This card has custom gradient background.</p>
  </CardContent>
</Card>
```