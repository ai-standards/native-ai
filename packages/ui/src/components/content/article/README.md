# Article Components

A comprehensive article component system for displaying rich content with semantic structure, typography integration, and responsive design.

## Components

### Article
The main container component that provides structured layout and typography for article content.

### ArticleHeader  
Header component with title, metadata, author information, and publication details.

### ArticleContent
Container for the main article body content with proper typography styling.

### ArticleFooter
Footer component with share buttons, call-to-action, and related articles.

## Features

- **Semantic HTML Structure**: Uses proper HTML5 semantic elements (`<article>`, `<header>`, `<footer>`)
- **Responsive Typography**: Multiple size variants with responsive scaling
- **Content Variants**: Different visual styles for blogs, documentation, news, and default content
- **Author Support**: Rich author information with avatars and bio
- **Share Functionality**: Built-in social media and email sharing
- **Related Articles**: Automatic related content suggestions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and focus management
- **Flexible Layout**: Configurable width constraints and spacing options

## Usage

### Basic Article

```tsx
import { Article } from '@/components';

<Article>
  <h1>My Article Title</h1>
  <p>Article content goes here...</p>
</Article>
```

### Complete Article Structure

```tsx
import { Article, ArticleHeader, ArticleContent, ArticleFooter } from '@/components';

<Article variant="blog" size="md" maxWidth="lg">
  <ArticleHeader
    title="Building Modern UI Components"
    subtitle="A comprehensive guide to creating reusable components"
    publishedAt={new Date('2024-01-15')}
    author={{
      name: 'Sarah Johnson',
      avatar: '/images/sarah.jpg',
      bio: 'Senior Frontend Developer'
    }}
    readingTime="8 min read"
    tags={['React', 'TypeScript', 'UI Components']}
  />
  
  <ArticleContent>
    <h2>Introduction</h2>
    <p>Creating modern UI components requires...</p>
    
    <h3>Key Principles</h3>
    <ul>
      <li>Composability</li>
      <li>Accessibility</li>
      <li>Consistency</li>
    </ul>
  </ArticleContent>
  
  <ArticleFooter
    shareButtons={{
      twitter: true,
      linkedin: true,
      email: true
    }}
    cta={{
      title: 'Ready to Build?',
      description: 'Start creating amazing components.',
      button: {
        text: 'Get Started',
        href: '/get-started'
      }
    }}
    relatedArticles={[
      {
        title: 'Component Testing Guide',
        href: '/testing-guide',
        summary: 'Learn testing best practices'
      }
    ]}
  />
</Article>
```

## Props

### Article Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'blog' \| 'documentation' \| 'news'` | `'default'` | Visual styling variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Typography size scale |
| `maxWidth` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'lg'` | Maximum width constraint |
| `spacing` | `'tight' \| 'normal' \| 'loose'` | `'normal'` | Spacing between elements |

### ArticleHeader Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `ReactNode` | Yes | Article title |
| `subtitle` | `ReactNode` | No | Article subtitle or description |
| `publishedAt` | `Date` | No | Publication date |
| `author` | `AuthorObject` | No | Author information |
| `readingTime` | `string` | No | Reading time estimate |
| `tags` | `string[]` | No | Article tags or categories |

#### AuthorObject

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | Yes | Author's name |
| `avatar` | `string` | No | URL to author's avatar image |
| `bio` | `string` | No | Brief author biography |

### ArticleFooter Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `shareButtons` | `ShareButtonsObject` | No | Social media share buttons |
| `relatedArticles` | `RelatedArticleObject[]` | No | Related articles to display |
| `cta` | `CTAObject` | No | Call-to-action section |

#### ShareButtonsObject

| Property | Type | Description |
|----------|------|-------------|
| `twitter` | `boolean` | Show Twitter share button |
| `linkedin` | `boolean` | Show LinkedIn share button |
| `facebook` | `boolean` | Show Facebook share button |
| `email` | `boolean` | Show email share button |

#### RelatedArticleObject

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | Article title |
| `href` | `string` | Yes | Link to the article |
| `summary` | `string` | No | Brief article summary |

#### CTAObject

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | CTA title |
| `description` | `string` | No | CTA description |
| `button` | `{text: string, href: string}` | Yes | CTA button configuration |

## Variants

### Content Types

- **`default`**: Standard article styling with neutral colors
- **`blog`**: Blog-focused styling with blue accents
- **`documentation`**: Technical documentation with slate colors
- **`news`**: News article styling with emerald accents

### Typography Sizes

- **`sm`**: Small typography for compact content
- **`md`**: Medium typography (default) for standard readability
- **`lg`**: Large typography for prominent content display

### Width Constraints

- **`none`**: No maximum width constraint
- **`sm`**: Small maximum width (narrow column)
- **`md`**: Medium maximum width (balanced)
- **`lg`**: Large maximum width (default, optimal reading)
- **`xl`**: Extra large maximum width (wide content)
- **`2xl`**: Maximum large width (very wide content)

### Spacing Options

- **`tight`**: Reduced spacing between elements
- **`normal`**: Standard spacing (default)
- **`loose`**: Increased spacing for airy layout

## Accessibility

The Article components include comprehensive accessibility features:

- **Semantic Structure**: Uses proper HTML5 semantic elements
- **ARIA Labels**: Descriptive labels for interactive elements
- **Focus Management**: Proper tab order and focus indicators
- **Screen Reader Support**: Compatible with assistive technologies
- **High Contrast**: Sufficient color contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements

## Styling

The components use Tailwind CSS's typography plugin (`@tailwindcss/typography`) for consistent text styling. The prose classes provide:

- Responsive typography scaling
- Consistent vertical rhythm
- Proper heading hierarchy
- List and table styling
- Code block formatting
- Blockquote styling

### Custom Styling

You can customize the appearance by:

1. **Extending Tailwind Config**: Add custom prose variants
2. **CSS Overrides**: Target specific prose elements
3. **Custom Classes**: Apply additional Tailwind classes
4. **Theme Customization**: Modify the default color palette

## Examples

### Blog Post

```tsx
<Article variant="blog" size="md">
  <ArticleHeader
    title="10 React Best Practices"
    subtitle="Essential patterns for modern React development"
    author={{ name: "Alex Developer" }}
    publishedAt={new Date()}
    tags={["React", "Best Practices"]}
  />
  <ArticleContent>
    <p>In this article, we'll explore...</p>
  </ArticleContent>
</Article>
```

### Documentation Page

```tsx
<Article variant="documentation" maxWidth="xl">
  <ArticleHeader
    title="API Reference: Button Component"
    tags={["API", "Components"]}
  />
  <ArticleContent>
    <h2>Overview</h2>
    <p>The Button component provides...</p>
  </ArticleContent>
</Article>
```

### News Article

```tsx
<Article variant="news" spacing="tight">
  <ArticleHeader
    title="Company Announces New Product"
    publishedAt={new Date()}
    readingTime="2 min read"
  />
  <ArticleContent>
    <p><strong>CITY, STATE</strong> — Company today announced...</p>
  </ArticleContent>
</Article>
```

## Best Practices

1. **Use Semantic Structure**: Always use the complete Article structure for long-form content
2. **Provide Meta Information**: Include publication dates, authors, and reading time when available
3. **Optimize for Readability**: Choose appropriate size and maxWidth for your content
4. **Include Share Options**: Add share buttons for public content
5. **Link Related Content**: Use the related articles feature to improve user engagement
6. **Maintain Heading Hierarchy**: Use proper heading levels (h1, h2, h3) for content structure
7. **Add Alternative Text**: Ensure all images have descriptive alt text
8. **Test with Screen Readers**: Verify accessibility with assistive technology

## Performance Considerations

- **Image Optimization**: Use responsive images for author avatars
- **Lazy Loading**: Consider lazy loading for below-the-fold content
- **Share URL Generation**: Share URLs are generated client-side for better performance
- **Bundle Splitting**: Components can be imported individually to reduce bundle size

## Browser Support

The Article components support all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

For older browser support, ensure your build process includes appropriate polyfills for:
- CSS Grid (for layout)
- ES6 features (for JavaScript)
- Fetch API (for potential future enhancements)