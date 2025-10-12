import type { Meta, StoryObj } from '@storybook/react';
import { Article, ArticleHeader, ArticleContent, ArticleFooter } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Content/Article',
  component: Article,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive article component system for displaying rich content with semantic structure, typography integration, and responsive design.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blog', 'documentation', 'news'],
      description: 'Article variant for different content types',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Typography size scale',
    },
    maxWidth: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Maximum width constraint',
    },
    spacing: {
      control: 'select',
      options: ['tight', 'normal', 'loose'],
      description: 'Spacing between elements',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

const sampleContent = (
  <>
    <h2>Introduction</h2>
    <p>
      This is a sample article demonstrating the Article component system. The component provides 
      a structured approach to displaying rich content with proper typography, spacing, and semantic markup.
    </p>
    
    <h3>Key Features</h3>
    <ul>
      <li>Responsive typography scaling</li>
      <li>Semantic HTML structure</li>
      <li>Multiple content variants</li>
      <li>Integrated header and footer components</li>
    </ul>

    <blockquote>
      "Good typography is invisible. Bad typography is everywhere."
    </blockquote>

    <h3>Implementation</h3>
    <p>
      The Article component system consists of several interconnected components that work together 
      to create a cohesive reading experience. Each component can be used independently or as part 
      of a complete article structure.
    </p>

    <pre><code>{`import { Article, ArticleHeader, ArticleContent } from '@/components';

<Article variant="blog" size="md">
  <ArticleHeader title="My Article" />
  <ArticleContent>
    <p>Article content goes here...</p>
  </ArticleContent>
</Article>`}</code></pre>

    <h3>Conclusion</h3>
    <p>
      The Article component provides a flexible foundation for content presentation while maintaining 
      consistency and accessibility across your application.
    </p>
  </>
);

// Basic Article Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: sampleContent,
  },
};

export const BlogVariant: Story = {
  args: {
    variant: 'blog',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: sampleContent,
  },
};

export const DocumentationVariant: Story = {
  args: {
    variant: 'documentation',
    size: 'md',
    maxWidth: 'xl',
    spacing: 'normal',
    children: (
      <>
        <h2>API Documentation</h2>
        <p>
          This documentation covers the complete API surface for the Article component system.
        </p>
        
        <h3>Props</h3>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>string</td>
              <td>'default'</td>
              <td>Visual style variant</td>
            </tr>
            <tr>
              <td>size</td>
              <td>string</td>
              <td>'md'</td>
              <td>Typography size scale</td>
            </tr>
            <tr>
              <td>maxWidth</td>
              <td>string</td>
              <td>'lg'</td>
              <td>Maximum width constraint</td>
            </tr>
          </tbody>
        </table>

        <h3>Examples</h3>
        <p>Here are some common usage patterns:</p>
        
        <pre><code>{`// Basic article
<Article>
  <h1>Title</h1>
  <p>Content</p>
</Article>

// Blog post with header
<Article variant="blog">
  <ArticleHeader 
    title="My Blog Post"
    author={{ name: "John Doe" }}
    publishedAt={new Date()}
  />
  <ArticleContent>
    <p>Blog content...</p>
  </ArticleContent>
</Article>`}</code></pre>
      </>
    ),
  },
};

export const NewsVariant: Story = {
  args: {
    variant: 'news',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: (
      <>
        <h2>Breaking: New Article Component Released</h2>
        <p>
          <strong>Latest Update:</strong> The new Article component system has been officially released, 
          bringing enhanced typography and layout capabilities to the NativeAI UI library.
        </p>
        
        <h3>What's New</h3>
        <ul>
          <li>Four distinct visual variants</li>
          <li>Responsive typography scaling</li>
          <li>Integrated header and footer components</li>
          <li>Share button functionality</li>
          <li>Related articles display</li>
        </ul>

        <p>
          The release includes comprehensive testing and documentation, ensuring developers can 
          integrate the component seamlessly into their applications.
        </p>

        <h3>Industry Impact</h3>
        <p>
          This release positions NativeAI as a leader in component-driven development, providing 
          tools that enhance both developer experience and end-user engagement.
        </p>
      </>
    ),
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small Size</h3>
        <Article size="sm" maxWidth="md">
          <h2>Small Article</h2>
          <p>This article uses the small typography scale for compact content presentation.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Medium Size (Default)</h3>
        <Article size="md" maxWidth="md">
          <h2>Medium Article</h2>
          <p>This article uses the medium typography scale, which is the default size for most content.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Large Size</h3>
        <Article size="lg" maxWidth="md">
          <h2>Large Article</h2>
          <p>This article uses the large typography scale for prominent content display.</p>
        </Article>
      </div>
    </div>
  ),
};

export const MaxWidthOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small Width</h3>
        <Article maxWidth="sm">
          <h2>Narrow Column</h2>
          <p>This article is constrained to a small maximum width, perfect for sidebar content or mobile-first designs.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Large Width</h3>
        <Article maxWidth="xl">
          <h2>Wide Layout</h2>
          <p>This article uses a larger maximum width, allowing for more content per line and better utilization of wide screens.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">No Width Constraint</h3>
        <Article maxWidth="none">
          <h2>Full Width</h2>
          <p>This article has no maximum width constraint and will expand to fill the available space completely.</p>
        </Article>
      </div>
    </div>
  ),
};

// Complete Article Examples
export const CompleteArticle: Story = {
  render: () => (
    <Article variant="blog" size="md" maxWidth="lg">
      <ArticleHeader
        title="Building Modern UI Components"
        subtitle="A comprehensive guide to creating reusable, accessible, and performant React components"
        publishedAt={new Date('2024-01-15')}
        author={{
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          bio: 'Senior Frontend Developer'
        }}
        readingTime="8 min read"
        tags={['React', 'TypeScript', 'UI Components', 'Accessibility']}
      />
      
      <ArticleContent>
        <h2>Introduction</h2>
        <p>
          Creating modern UI components requires balancing functionality, accessibility, and developer experience. 
          In this comprehensive guide, we'll explore the principles and practices that make components truly reusable 
          and maintainable.
        </p>

        <h3>Component Architecture</h3>
        <p>
          A well-architected component system starts with clear separation of concerns. Each component should have 
          a single responsibility and provide a predictable interface for consumers.
        </p>

        <blockquote>
          "The secret to building large apps is never build large apps. Break up your applications into small pieces. 
          Then, assemble those testable, bite-sized pieces into your big application."
        </blockquote>

        <h3>Key Principles</h3>
        <ul>
          <li><strong>Composability:</strong> Components should work well together and be easily combined</li>
          <li><strong>Accessibility:</strong> Every component must be usable by assistive technologies</li>
          <li><strong>Consistency:</strong> Similar patterns should behave similarly across the system</li>
          <li><strong>Performance:</strong> Components should be optimized for real-world usage</li>
        </ul>

        <h3>Implementation Strategy</h3>
        <p>
          When implementing a new component, start with the user's needs and work backward to the technical requirements. 
          This approach ensures that the final API feels natural and intuitive.
        </p>

        <pre><code>{`// Example: A well-designed button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  // Implementation...
};`}</code></pre>

        <h3>Testing and Documentation</h3>
        <p>
          Comprehensive testing and documentation are not optional—they're essential for building trust and adoption. 
          Every component should include unit tests, integration tests, and interactive documentation.
        </p>

        <h3>Conclusion</h3>
        <p>
          Building great UI components is an iterative process that requires attention to detail, user empathy, 
          and technical excellence. By following these principles and continuously refining your approach, 
          you can create components that developers love to use and users love to interact with.
        </p>
      </ArticleContent>
      
      <ArticleFooter
        shareButtons={{
          twitter: true,
          linkedin: true,
          email: true
        }}
        cta={{
          title: 'Ready to Build?',
          description: 'Start creating amazing components with our comprehensive toolkit.',
          button: {
            text: 'Get Started',
            href: '#get-started'
          }
        }}
        relatedArticles={[
          {
            title: 'Component Testing Best Practices',
            href: '#testing-guide',
            summary: 'Learn how to write effective tests for your UI components'
          },
          {
            title: 'Accessibility in Modern Web Apps',
            href: '#accessibility-guide',
            summary: 'Essential techniques for building inclusive user interfaces'
          }
        ]}
      />
    </Article>
  ),
};

export const NewsArticle: Story = {
  render: () => (
    <Article variant="news" size="md" maxWidth="lg">
      <ArticleHeader
        title="NativeAI Announces Major UI Library Update"
        subtitle="New components and enhanced accessibility features now available"
        publishedAt={new Date('2024-01-20')}
        author={{
          name: 'Tech News Team',
          bio: 'Technology Correspondents'
        }}
        readingTime="3 min read"
        tags={['Product Update', 'UI/UX', 'Accessibility']}
      />
      
      <ArticleContent>
        <p>
          <strong>SILICON VALLEY, CA</strong> — NativeAI today announced a significant update to its UI component 
          library, introducing new components and enhanced accessibility features that promise to streamline 
          development workflows and improve user experiences across web applications.
        </p>

        <h3>Key Updates Include:</h3>
        <ul>
          <li><strong>Article Components:</strong> New semantic components for content presentation</li>
          <li><strong>Enhanced Typography:</strong> Improved readability and responsive scaling</li>
          <li><strong>Accessibility Improvements:</strong> WCAG 2.1 AA compliance across all components</li>
          <li><strong>Developer Tools:</strong> Enhanced Storybook documentation and testing utilities</li>
        </ul>

        <h3>Industry Impact</h3>
        <p>
          The update addresses growing demand for accessible, performant UI components in enterprise applications. 
          "We're seeing incredible adoption of component-driven development," said the development team. 
          "These updates ensure developers can build inclusive experiences without compromise."
        </p>

        <h3>Availability</h3>
        <p>
          The updated library is available immediately through npm, with comprehensive migration guides and 
          example implementations provided in the official documentation.
        </p>
      </ArticleContent>
      
      <ArticleFooter
        shareButtons={{
          twitter: true,
          linkedin: true
        }}
        relatedArticles={[
          {
            title: 'Component Library Migration Guide',
            href: '#migration',
            summary: 'Step-by-step instructions for updating to the latest version'
          }
        ]}
      />
    </Article>
  ),
};

export const DocumentationArticle: Story = {
  render: () => (
    <Article variant="documentation" size="md" maxWidth="xl">
      <ArticleHeader
        title="Article Component API Reference"
        subtitle="Complete documentation for the Article component system"
        tags={['API', 'Documentation', 'Reference']}
      />
      
      <ArticleContent>
        <h2>Overview</h2>
        <p>
          The Article component system provides a structured approach to content presentation with semantic HTML, 
          responsive typography, and integrated header/footer functionality.
        </p>

        <h2>Components</h2>
        
        <h3>Article</h3>
        <p>The main container component for article content.</p>
        
        <h4>Props</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>'default' | 'blog' | 'documentation' | 'news'</td>
              <td>'default'</td>
              <td>Visual styling variant</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'sm' | 'md' | 'lg'</td>
              <td>'md'</td>
              <td>Typography size scale</td>
            </tr>
            <tr>
              <td>maxWidth</td>
              <td>'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</td>
              <td>'lg'</td>
              <td>Maximum width constraint</td>
            </tr>
            <tr>
              <td>spacing</td>
              <td>'tight' | 'normal' | 'loose'</td>
              <td>'normal'</td>
              <td>Element spacing</td>
            </tr>
          </tbody>
        </table>

        <h3>ArticleHeader</h3>
        <p>Header component with title, metadata, and author information.</p>

        <h4>Props</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>ReactNode</td>
              <td>Yes</td>
              <td>Article title</td>
            </tr>
            <tr>
              <td>subtitle</td>
              <td>ReactNode</td>
              <td>No</td>
              <td>Article subtitle or description</td>
            </tr>
            <tr>
              <td>publishedAt</td>
              <td>Date</td>
              <td>No</td>
              <td>Publication date</td>
            </tr>
            <tr>
              <td>author</td>
              <td>AuthorObject</td>
              <td>No</td>
              <td>Author information</td>
            </tr>
            <tr>
              <td>readingTime</td>
              <td>string</td>
              <td>No</td>
              <td>Reading time estimate</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>string[]</td>
              <td>No</td>
              <td>Article tags or categories</td>
            </tr>
          </tbody>
        </table>

        <h2>Usage Examples</h2>
        
        <h3>Basic Article</h3>
        <pre><code>{`import { Article } from '@/components';

<Article>
  <h1>My Article</h1>
  <p>Article content goes here...</p>
</Article>`}</code></pre>

        <h3>Complete Article Structure</h3>
        <pre><code>{`import { Article, ArticleHeader, ArticleContent, ArticleFooter } from '@/components';

<Article variant="blog" size="md">
  <ArticleHeader
    title="My Blog Post"
    subtitle="An engaging subtitle"
    publishedAt={new Date()}
    author={{
      name: "John Doe",
      avatar: "/avatar.jpg",
      bio: "Writer"
    }}
    tags={["React", "TypeScript"]}
  />
  
  <ArticleContent>
    <h2>Section</h2>
    <p>Content...</p>
  </ArticleContent>
  
  <ArticleFooter
    shareButtons={{ twitter: true, linkedin: true }}
    relatedArticles={[
      { title: "Related", href: "/related" }
    ]}
  />
</Article>`}</code></pre>

        <h2>Accessibility</h2>
        <p>The Article components include several accessibility features:</p>
        <ul>
          <li>Semantic HTML structure with proper heading hierarchy</li>
          <li>ARIA labels for interactive elements</li>
          <li>Proper focus management for share buttons</li>
          <li>Screen reader friendly date formatting</li>
          <li>High contrast color schemes</li>
        </ul>

        <h2>Styling</h2>
        <p>
          The components use Tailwind CSS's typography plugin for consistent text styling. 
          Custom variants can be created by extending the prose classes or providing custom CSS.
        </p>
      </ArticleContent>
      
      <ArticleFooter
        cta={{
          title: 'Need Help?',
          description: 'Check out our comprehensive guides and examples.',
          button: {
            text: 'View Examples',
            href: '#examples'
          }
        }}
      />
    </Article>
  ),
};