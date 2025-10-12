import React from 'react';
import { cn } from '@/utils/cn';

// Article Component
export interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  /** Article variant for different content types */
  variant?: 'default' | 'blog' | 'documentation' | 'news';
  /** Typography size scale */
  size?: 'sm' | 'md' | 'lg';
  /** Maximum width constraint */
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Spacing between elements */
  spacing?: 'tight' | 'normal' | 'loose';
}

export const Article: React.FC<ArticleProps> = ({
  variant = 'default',
  size = 'md',
  maxWidth = 'lg',
  spacing = 'normal',
  className,
  children,
  ...props
}) => {
  const articleStyles = cn(
    'prose prose-gray mx-auto',
    {
      // Variant-specific styling
      'prose-blue': variant === 'blog',
      'prose-slate': variant === 'documentation',
      'prose-emerald': variant === 'news',
      
      // Size variants
      'prose-sm': size === 'sm',
      'prose-base': size === 'md',
      'prose-lg': size === 'lg',
      
      // Max width
      'max-w-none': maxWidth === 'none',
      'max-w-sm': maxWidth === 'sm',
      'max-w-md': maxWidth === 'md',
      'max-w-lg': maxWidth === 'lg',
      'max-w-xl': maxWidth === 'xl',
      'max-w-2xl': maxWidth === '2xl',
      
      // Spacing
      'prose-tight': spacing === 'tight',
      'prose-loose': spacing === 'loose',
    },
    className
  );

  return (
    <article className={articleStyles} {...props}>
      {children}
    </article>
  );
};

// Article Header Component
export interface ArticleHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Article title */
  title: React.ReactNode;
  /** Article subtitle or description */
  subtitle?: React.ReactNode;
  /** Publication date */
  publishedAt?: Date;
  /** Author information */
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  /** Reading time estimate */
  readingTime?: string;
  /** Tags or categories */
  tags?: string[];
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  subtitle,
  publishedAt,
  author,
  readingTime,
  tags,
  className,
  ...props
}) => {
  return (
    <header className={cn('not-prose mb-8', className)} {...props}>
      <div className="space-y-4">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Meta information */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          {/* Author */}
          {author && (
            <div className="flex items-center gap-3">
              {author.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <div className="font-medium text-gray-900">{author.name}</div>
                {author.bio && <div className="text-xs">{author.bio}</div>}
              </div>
            </div>
          )}

          {/* Publication date */}
          {publishedAt && (
            <time dateTime={publishedAt.toISOString()}>
              {publishedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}

          {/* Reading time */}
          {readingTime && (
            <span className="flex items-center gap-1">
              <span>📖</span>
              {readingTime}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

// Article Content Component
export interface ArticleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('article-content', className)} {...props}>
      {children}
    </div>
  );
};

// Article Footer Component
export interface ArticleFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Share buttons configuration */
  shareButtons?: {
    twitter?: boolean;
    linkedin?: boolean;
    facebook?: boolean;
    email?: boolean;
  };
  /** Related articles */
  relatedArticles?: {
    title: string;
    href: string;
    summary?: string;
  }[];
  /** Call to action */
  cta?: {
    title: string;
    description?: string;
    button: {
      text: string;
      href: string;
    };
  };
}

export const ArticleFooter: React.FC<ArticleFooterProps> = ({
  shareButtons,
  relatedArticles,
  cta,
  className,
  ...props
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageTitle = typeof document !== 'undefined' ? document.title : '';

  return (
    <footer className={cn('not-prose mt-12 border-t border-gray-200 pt-8', className)} {...props}>
      <div className="space-y-8">
        {/* Share buttons */}
        {shareButtons && (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Share:</span>
            <div className="flex gap-3">
              {shareButtons.twitter && (
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                  aria-label="Share on Twitter"
                >
                  𝕏
                </a>
              )}
              {shareButtons.linkedin && (
                <a
                  href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  💼
                </a>
              )}
              {shareButtons.email && (
                <a
                  href={`mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(currentUrl)}`}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Share via Email"
                >
                  ✉️
                </a>
              )}
            </div>
          </div>
        )}

        {/* Call to action */}
        {cta && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{cta.title}</h3>
            {cta.description && (
              <p className="text-gray-600 mb-4">{cta.description}</p>
            )}
            <a
              href={cta.button.href}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {cta.button.text}
            </a>
          </div>
        )}

        {/* Related articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.href}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                  {article.summary && (
                    <p className="text-sm text-gray-600">{article.summary}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};