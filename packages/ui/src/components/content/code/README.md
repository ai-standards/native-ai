# Code Component

Inline and block code display with syntax highlighting, line numbers, and copy-to-clipboard functionality.

## Features

- **Dual Modes**: Inline code for text integration and block code for standalone snippets
- **Syntax Highlighting**: Language-specific highlighting support
- **Line Numbers**: Optional line numbering for better reference
- **Copy Functionality**: One-click copy to clipboard with feedback
- **Responsive**: Horizontal scrolling for long code lines
- **Accessibility**: Proper semantic markup and keyboard navigation

## Usage

```tsx
import { Code, CodeBlock } from '@/components/content/code';

// Inline code
<p>Use the <Code>useState</Code> hook for state management.</p>

// Block code
<Code variant="block" language="javascript" copyable>
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
</Code>

// CodeBlock convenience component
<CodeBlock language="typescript" showLineNumbers copyable>
{`interface User {
  id: string;
  name: string;
  email: string;
}`}
</CodeBlock>
```

## Props

### Code Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'inline' \| 'block'` | `'inline'` | Display mode |
| `language` | `string` | - | Programming language for syntax highlighting |
| `showLineNumbers` | `boolean` | `false` | Show line numbers for block variant |
| `copyable` | `boolean` | `false` | Enable copy to clipboard |

### CodeBlock Component

Accepts all `Code` props except `variant` (automatically set to `'block'`).

## Examples

### Inline Code
```tsx
<p>
  Install packages with <Code>npm install</Code> or <Code>yarn add</Code>.
</p>
```

### Basic Block Code
```tsx
<Code variant="block">
{`git clone https://github.com/user/repo.git
cd repo
npm install
npm start`}
</Code>
```

### Advanced Block Code
```tsx
<CodeBlock 
  language="typescript"
  showLineNumbers
  copyable
>
{`import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
</CodeBlock>
```

## Language Support

The component supports syntax highlighting for common languages:
- JavaScript/TypeScript
- Python  
- Java
- C#
- Go
- Rust
- CSS/SCSS
- HTML/XML
- JSON
- YAML
- Bash/Shell
- SQL

## Styling

### Block Code Appearance
- Dark theme (gray-900 background)
- Monospace font for consistent character alignment
- Horizontal scrolling for long lines
- Rounded corners and proper padding

### Copy Button
- Appears on hover for block code
- Shows "Copied!" feedback for 2 seconds
- Positioned in top-right corner
- Accessible via keyboard navigation

## Best Practices

- Use inline code for variable names, function names, and short snippets
- Use block code for multi-line examples and complete functions
- Enable line numbers for longer code blocks to aid reference
- Provide copy functionality for code that users might want to use
- Specify language for proper syntax highlighting
- Keep code examples concise and focused