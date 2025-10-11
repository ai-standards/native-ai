# Native AI

A comprehensive toolkit for building native AI applications with modern web technologies. This monorepo contains a c5. **Screenshots/code** - Include relevant screenshots or code snippets

[Report a Bug](https://github.com/ai-standards/nativeai/issues/new?labels=bug&template=bug_report.md)

### Feature Requeststion of packages designed to work together seamlessly, providing everything you need from UI components to AI functionality.

## Quick Start

```bash
# Install the packages you need
npm install @nativeai/ui @nativeai/workspace
# or
npm install @ai-standards/nativeai-core @ai-standards/nativeai-ai
```

## Packages

### [@nativeai/ui](./packages/ui)
A comprehensive React UI component library with VS Code-inspired design patterns.

**Features:**
- VS Code-inspired design system
- Modular component architecture
- Full TypeScript support
- Storybook integration
- Tailwind CSS customization
- Responsive design

**Key Components:**
- Layout system with sidebars, console, and action bars
- Form components (Button, Input, Card)
- Icon system with react-icons integration
- Utility functions and styling helpers

[Read the full UI documentation](./packages/ui/README.md)

### [@nativeai/workspace](./packages/workspace)
A robust file system workspace manager that provides safe, predictable file operations relative to a project root.

**Features:**
- Project root-based file operations
- Safe path resolution and validation
- Both sync and async APIs
- Comprehensive file system utilities
- TypeScript-first design

**Use Cases:**
- Configuration file management
- Asset and resource handling  
- Development tooling
- Plugin and extension systems

[Read the full Workspace documentation](./packages/workspace/README.md)

### [@ai-standards/nativeai-core](./packages/core)
Core functionality and shared utilities for native AI applications.

**Features:**
- AI integration utilities
- Common application patterns
- Data processing helpers
- TypeScript definitions

### [@ai-standards/nativeai-ai](./packages/ai) 
AI engine and models for native AI functionality.

**Features:**
- AI model integration
- Machine learning utilities
- Model management
- Extensible architecture

### [@ai-standards/nativeai-utils](./packages/utils)
Utility functions and helpers shared across the ecosystem.

**Features:**
- Common utility functions
- Input validation helpers
- Development utilities
- Reusable patterns

## Development

This is a monorepo managed with npm workspaces. To get started with development:

```bash
# Clone the repository
git clone https://github.com/ai-standards/nativeai.git
cd nativeai

# Install dependencies for all packages
npm install

# Build all packages
npm run build

# Run tests for all packages
npm run test

# Start development mode for all packages
npm run dev
```

### Working with Individual Packages

```bash
# Work on the UI package
cd packages/ui
npm run dev          # Start Storybook
npm run test         # Run tests
npm run build        # Build package

# Work on the workspace package
cd packages/workspace  
npm run test         # Run tests
npm run build        # Build package
```

## Contributing

We welcome contributions! Here are several ways you can help:

### Reporting Bugs

If you find a bug, please create an issue with:

1. **Clear title** - Summarize the problem in the title
2. **Environment details** - OS, Node.js version, package versions
3. **Steps to reproduce** - Detailed steps to reproduce the issue
4. **Expected behavior** - What you expected to happen
5. **Actual behavior** - What actually happened
6. **Screenshots/code** - Include relevant screenshots or code snippets

[🐛 Report a Bug](https://github.com/ai-standards/nativeai/issues/new?labels=bug&template=bug_report.md)

### ✨ Feature Requests

Have an idea for a new feature? We'd love to hear it!

1. **Search existing issues** - Check if someone else has already suggested it
2. **Describe the problem** - What problem would this feature solve?
3. **Describe the solution** - What would you like to see happen?
4. **Describe alternatives** - Any alternative solutions you've considered?

[Request a Feature](https://github.com/ai-standards/nativeai/issues/new?labels=enhancement&template=feature_request.md)

### Contributing Code

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies** with `npm install`
3. **Make your changes** in the appropriate package(s)
4. **Add tests** for your changes when applicable
5. **Run the test suite** with `npm test` 
6. **Run the linter** with `npm run lint`
7. **Commit your changes** with a clear commit message
8. **Push to your fork** and submit a pull request

#### Development Guidelines

- **TypeScript** - All code should be written in TypeScript
- **Testing** - Add tests for new features and bug fixes
- **Documentation** - Update relevant documentation
- **Code style** - Follow the existing code style and linting rules
- **Commit messages** - Use clear, descriptive commit messages

### Documentation

Help us improve our documentation:

- Fix typos or unclear explanations
- Add examples and use cases  
- Improve API documentation
- Write tutorials or guides
- Translate documentation

### Design and UX

- Suggest UI/UX improvements
- Create design mockups
- Improve accessibility
- Test on different devices and browsers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [Homepage](https://github.com/ai-standards/nativeai)
- [Issues](https://github.com/ai-standards/nativeai/issues)
- [Pull Requests](https://github.com/ai-standards/nativeai/pulls)
- [Documentation](https://github.com/ai-standards/nativeai#readme)

## Acknowledgments

- Inspired by VS Code's design patterns and developer experience
- Built with modern web technologies and best practices
- Thanks to all contributors who help make this project better

---

<div align="center">
  <strong>Built by the Native AI team</strong>
</div>
