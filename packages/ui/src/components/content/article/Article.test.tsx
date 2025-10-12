import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Article, ArticleHeader, ArticleContent, ArticleFooter } from './Article';

// Mock window and document for URL and title tests
const mockLocation = {
  href: 'https://example.com/test-article'
};
const mockDocument = {
  title: 'Test Article Title'
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true
});

Object.defineProperty(global, 'document', {
  value: mockDocument,
  writable: true
});

describe('Article', () => {
  it('renders with default props', () => {
    render(
      <Article>
        <h1>Test Article</h1>
        <p>Article content</p>
      </Article>
    );

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass('prose', 'prose-gray', 'mx-auto');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article');
  });

  it('applies variant styles correctly', () => {
    const { rerender } = render(
      <Article variant="blog">Test content</Article>
    );

    expect(screen.getByRole('article')).toHaveClass('prose-blue');

    rerender(<Article variant="documentation">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('prose-slate');

    rerender(<Article variant="news">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('prose-emerald');
  });

  it('applies size variants correctly', () => {
    const { rerender } = render(
      <Article size="sm">Test content</Article>
    );

    expect(screen.getByRole('article')).toHaveClass('prose-sm');

    rerender(<Article size="md">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('prose-base');

    rerender(<Article size="lg">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('prose-lg');
  });

  it('applies max width constraints correctly', () => {
    const { rerender } = render(
      <Article maxWidth="none">Test content</Article>
    );

    expect(screen.getByRole('article')).toHaveClass('max-w-none');

    rerender(<Article maxWidth="xl">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('max-w-xl');
  });

  it('applies spacing variants correctly', () => {
    const { rerender } = render(
      <Article spacing="tight">Test content</Article>
    );

    expect(screen.getByRole('article')).toHaveClass('prose-tight');

    rerender(<Article spacing="loose">Test content</Article>);
    expect(screen.getByRole('article')).toHaveClass('prose-loose');
  });

  it('accepts custom className', () => {
    render(
      <Article className="custom-class">Test content</Article>
    );

    expect(screen.getByRole('article')).toHaveClass('custom-class');
  });

  it('forwards HTML attributes', () => {
    render(
      <Article data-testid="article-element" id="test-article">
        Test content
      </Article>
    );

    const article = screen.getByTestId('article-element');
    expect(article).toHaveAttribute('id', 'test-article');
  });
});

describe('ArticleHeader', () => {
  const mockAuthor = {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'Senior Developer'
  };

  const mockDate = new Date('2024-01-15');

  it('renders title correctly', () => {
    render(
      <ArticleHeader title="Test Article Title" />
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
  });

  it('renders with all props', () => {
    render(
      <ArticleHeader
        title="Complete Article"
        subtitle="A comprehensive guide"
        publishedAt={mockDate}
        author={mockAuthor}
        readingTime="5 min read"
        tags={['React', 'TypeScript', 'Testing']}
      />
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Complete Article');
    expect(screen.getByText('A comprehensive guide')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
    
    // Check tags
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });

  it('renders author with avatar', () => {
    render(
      <ArticleHeader
        title="Test"
        author={mockAuthor}
      />
    );

    const avatar = screen.getByRole('img', { name: 'John Doe' });
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('formats publication date correctly', () => {
    render(
      <ArticleHeader
        title="Test"
        publishedAt={mockDate}
      />
    );

    const timeElement = screen.getByText('January 15, 2024');
    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('datetime', '2024-01-15T00:00:00.000Z');
  });

  it('renders tags as styled badges', () => {
    render(
      <ArticleHeader
        title="Test"
        tags={['React', 'TypeScript']}
      />
    );

    const reactTag = screen.getByText('React');
    const typeScriptTag = screen.getByText('TypeScript');

    expect(reactTag).toHaveClass('bg-blue-100', 'text-blue-800');
    expect(typeScriptTag).toHaveClass('bg-blue-100', 'text-blue-800');
  });

  it('accepts custom className', () => {
    render(
      <ArticleHeader
        title="Test"
        className="custom-header"
      />
    );

    expect(screen.getByRole('banner')).toHaveClass('custom-header');
  });
});

describe('ArticleContent', () => {
  it('renders children correctly', () => {
    render(
      <ArticleContent>
        <h2>Section Title</h2>
        <p>Section content</p>
      </ArticleContent>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Section Title');
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(
      <ArticleContent data-testid="content">
        Content
      </ArticleContent>
    );

    expect(screen.getByTestId('content')).toHaveClass('article-content');
  });

  it('accepts custom className', () => {
    render(
      <ArticleContent className="custom-content" data-testid="content">
        Content
      </ArticleContent>
    );

    expect(screen.getByTestId('content')).toHaveClass('custom-content', 'article-content');
  });

  it('forwards HTML attributes', () => {
    render(
      <ArticleContent id="article-content" data-testid="content">
        Content
      </ArticleContent>
    );

    expect(screen.getByTestId('content')).toHaveAttribute('id', 'article-content');
  });
});

describe('ArticleFooter', () => {
  const mockRelatedArticles = [
    {
      title: 'Related Article 1',
      href: '/article-1',
      summary: 'Summary of article 1'
    },
    {
      title: 'Related Article 2',
      href: '/article-2'
    }
  ];

  const mockCta = {
    title: 'Get Started',
    description: 'Ready to begin your journey?',
    button: {
      text: 'Start Now',
      href: '/get-started'
    }
  };

  it('renders share buttons when provided', () => {
    render(
      <ArticleFooter
        shareButtons={{
          twitter: true,
          linkedin: true,
          email: true
        }}
      />
    );

    expect(screen.getByText('Share:')).toBeInTheDocument();
    expect(screen.getByLabelText('Share on Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Share on LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Share via Email')).toBeInTheDocument();
  });

  it('generates correct share URLs', () => {
    render(
      <ArticleFooter
        shareButtons={{
          twitter: true,
          linkedin: true,
          email: true
        }}
      />
    );

    const twitterLink = screen.getByLabelText('Share on Twitter');
    const linkedinLink = screen.getByLabelText('Share on LinkedIn');
    const emailLink = screen.getByLabelText('Share via Email');

    expect(twitterLink).toHaveAttribute('href', expect.stringContaining('twitter.com/intent/tweet'));
    expect(twitterLink).toHaveAttribute('href', expect.stringContaining(encodeURIComponent('https://example.com/test-article')));
    
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com/sharing/share-offsite'));
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining(encodeURIComponent('https://example.com/test-article')));
    
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });

  it('renders call to action when provided', () => {
    render(
      <ArticleFooter cta={mockCta} />
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Get Started');
    expect(screen.getByText('Ready to begin your journey?')).toBeInTheDocument();
    
    const ctaButton = screen.getByRole('link', { name: 'Start Now' });
    expect(ctaButton).toHaveAttribute('href', '/get-started');
  });

  it('renders related articles when provided', () => {
    render(
      <ArticleFooter relatedArticles={mockRelatedArticles} />
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Related Articles');
    
    const article1Link = screen.getByRole('link', { name: /Related Article 1/ });
    const article2Link = screen.getByRole('link', { name: /Related Article 2/ });
    
    expect(article1Link).toHaveAttribute('href', '/article-1');
    expect(article2Link).toHaveAttribute('href', '/article-2');
    
    expect(screen.getByText('Summary of article 1')).toBeInTheDocument();
  });

  it('renders all sections together', () => {
    render(
      <ArticleFooter
        shareButtons={{ twitter: true }}
        cta={mockCta}
        relatedArticles={mockRelatedArticles}
      />
    );

    expect(screen.getByText('Share:')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Get Started' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Related Articles' })).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    render(
      <ArticleFooter
        className="custom-footer"
        shareButtons={{ twitter: true }}
      />
    );

    expect(screen.getByRole('contentinfo')).toHaveClass('custom-footer');
  });
});

describe('Article Components Integration', () => {
  it('renders complete article structure', () => {
    const mockDate = new Date('2024-01-15');
    const mockAuthor = {
      name: 'Jane Smith',
      avatar: 'https://example.com/jane.jpg',
      bio: 'Technical Writer'
    };

    render(
      <Article variant="blog" size="md">
        <ArticleHeader
          title="Complete Integration Test"
          subtitle="Testing the full article structure"
          publishedAt={mockDate}
          author={mockAuthor}
          readingTime="3 min read"
          tags={['Integration', 'Testing']}
        />
        <ArticleContent>
          <h2>Introduction</h2>
          <p>This is the article content section.</p>
          <h2>Conclusion</h2>
          <p>Article conclusion goes here.</p>
        </ArticleContent>
        <ArticleFooter
          shareButtons={{ twitter: true, email: true }}
          relatedArticles={[
            {
              title: 'Next Article',
              href: '/next-article',
              summary: 'Continue reading'
            }
          ]}
        />
      </Article>
    );

    // Check article wrapper
    const article = screen.getByRole('article');
    expect(article).toHaveClass('prose-blue'); // blog variant

    // Check header elements
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Complete Integration Test');
    expect(screen.getByText('Testing the full article structure')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Integration')).toBeInTheDocument();

    // Check content elements
    expect(screen.getByRole('heading', { name: 'Introduction' })).toBeInTheDocument();
    expect(screen.getByText('This is the article content section.')).toBeInTheDocument();

    // Check footer elements
    expect(screen.getByText('Share:')).toBeInTheDocument();
    expect(screen.getByText('Next Article')).toBeInTheDocument();
  });
});