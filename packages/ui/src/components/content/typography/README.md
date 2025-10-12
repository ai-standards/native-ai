# Typography Components

Comprehensive text and heading components for consistent, semantic, and accessible typography.

## Components

### Text
Flexible text component for body content, labels, captions, and more.

### Heading  
Semantic heading component with customizable visual sizing and styling.

### Link
Accessible link component with variants and external link indicators.

## Features

- **Semantic HTML**: Proper heading hierarchy and text elements
- **Flexible Styling**: Independent visual sizing from semantic structure
- **Consistent Scale**: Unified typography system across all text
- **Color System**: Integrated color variants for different contexts
- **Accessibility**: Focus states, proper contrast, external link indicators
- **Responsive**: Adapts to different viewport sizes

## Usage

```tsx
import { Text, Heading, Link } from '@/components/content/typography';

// Basic text
<Text>Default body text</Text>

// Text variants
<Text variant="caption" color="muted">Caption text</Text>
<Text weight="bold" align="center">Bold centered text</Text>

// Semantic headings
<Heading level={1}>Page Title</Heading>
<Heading level={2} size="lg">Visual size override</Heading>

// Links
<Link href="/about">Internal link</Link>
<Link href="https://example.com" external>External link</Link>
```

## Text Component

### Variants
- **body**: Default paragraph text (16px)
- **large**: Prominent text (18px) 
- **label**: Form labels and UI text (14px, medium weight)
- **caption**: Supplementary information (12px)
- **small**: Fine print and details (12px)

### Colors
- **default**: Primary text color (gray-900)
- **muted**: Secondary text color (gray-600) 
- **subtle**: Tertiary text color (gray-500)
- **accent**: Brand color (blue-600)
- **success**: Success state (green-600)
- **warning**: Warning state (yellow-600)
- **error**: Error state (red-600)

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'body' \| 'caption' \| 'label' \| 'small' \| 'large'` | `'body'` | Text size variant |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Font weight |
| `color` | `'default' \| 'muted' \| 'subtle' \| 'accent' \| 'success' \| 'warning' \| 'error'` | `'default'` | Text color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `as` | `'p' \| 'span' \| 'div' \| 'label'` | `'p'` | HTML element |

## Heading Component

### Semantic Levels
- **H1-H6**: Proper heading hierarchy for accessibility and SEO

### Visual Sizes
- **xs**: 14px - Smallest heading
- **sm**: 16px - Small heading
- **md**: 18px - Medium heading  
- **lg**: 20px - Large heading
- **xl**: 24px - Extra large heading
- **2xl**: 30px - 2X large heading
- **3xl**: 36px - 3X large heading
- **4xl**: 48px - 4X large heading

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | Semantic heading level |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | auto | Visual size override |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'semibold'` | Font weight |
| `color` | `'default' \| 'muted' \| 'accent'` | `'default'` | Text color |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `mb` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Bottom margin |

## Link Component

### Variants
- **default**: Primary link style (blue-600)
- **muted**: Secondary link style (gray-600)
- **accent**: Accent link style (blue-600)
- **subtle**: Subtle link style (gray-500)

### Underline Styles
- **hover**: Underline on hover (default)
- **always**: Always underlined
- **none**: Never underlined

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'muted' \| 'accent' \| 'subtle'` | `'default'` | Link color variant |
| `underline` | `'always' \| 'hover' \| 'none'` | `'hover'` | Underline behavior |
| `external` | `boolean` | `false` | Opens in new tab with indicator |

## Examples

### Content Hierarchy
```tsx
<article>
  <Heading level={1}>Article Title</Heading>
  <Text color="muted" variant="caption">Published on March 15, 2024</Text>
  
  <Text>
    This is the article introduction with a <Link href="#section1">link to section 1</Link>.
  </Text>
  
  <Heading level={2}>Main Section</Heading>
  <Text>Section content goes here...</Text>
  
  <Heading level={3} color="accent">Subsection</Heading>
  <Text variant="small" color="subtle">
    Additional details and fine print.
  </Text>
</article>
```

### Form Labels
```tsx
<div>
  <Text as="label" variant="label" htmlFor="email">
    Email Address
  </Text>
  <input id="email" type="email" />
  <Text variant="caption" color="muted">
    We'll never share your email address.
  </Text>
</div>
```

## Best Practices

- Use semantic heading levels (H1-H6) for proper document structure
- Separate visual sizing from semantic meaning when needed
- Provide sufficient color contrast for accessibility
- Use external link indicators for better user experience
- Maintain consistent typography scale throughout the application