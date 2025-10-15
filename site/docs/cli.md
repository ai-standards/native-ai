---
title: @nativeai/cli
description: Command line interface for native AI
package: cli
version: 0.9.3
---

# @nativeai/cli

Command line interface for native AI applications.

## Installation

```bash
npm install -g @nativeai/cli
```

## Usage

### Initialize a new project
```bash
nativeai init
```

### Build your project
```bash
nativeai build
```

### Serve your project
```bash
nativeai serve --port 3000
```

## Commands

- `init` - Initialize a new native AI project with interactive prompts
- `build` - Build the native AI project
- `serve` - Serve the native AI project on a specified port

## Features

- Interactive project initialization with inquirer
- Beautiful loading spinners with ora
- Robust command parsing with commander
- TypeScript support
- Modular architecture

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes
npm run dev

# Run tests
npm run test
```

---
*This documentation is automatically generated from the cli package README. [View source](https://github.com/ai-standards/native-ai/tree/main/packages/cli)*
