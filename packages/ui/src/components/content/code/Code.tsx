import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Code variant */
  variant?: 'inline' | 'block';
  /** Programming language for syntax highlighting */
  language?: string;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Enable copy to clipboard */
  copyable?: boolean;
  /** Code content */
  children: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({
  variant = 'inline',
  language,
  showLineNumbers = false,
  copyable = false,
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyable || typeof children !== 'string') return;

    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  if (variant === 'inline') {
    return (
      <code
        className={cn(
          'px-1.5 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 rounded border',
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }

  // Block variant
  const codeLines = typeof children === 'string' 
    ? children.split('\n') 
    : [String(children)];

  return (
    <div className={cn('relative group', className)} {...props}>
      {/* Copy button */}
      {copyable && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      )}

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
        <code
          className={language ? `language-${language}` : undefined}
        >
          {showLineNumbers ? (
            <div className="flex">
              <div className="select-none text-gray-500 pr-4 text-right min-w-[3rem]">
                {codeLines.map((_, index) => (
                  <div key={index + 1}>{index + 1}</div>
                ))}
              </div>
              <div className="flex-1">
                {codeLines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          ) : (
            children
          )}
        </code>
      </pre>
    </div>
  );
};

// CodeBlock convenience component
export interface CodeBlockProps extends Omit<CodeProps, 'variant'> {}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  return <Code {...props} variant="block" />;
};