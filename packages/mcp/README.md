# @nativeai/mcp

Model Context Protocol (MCP) server framework for the nativeai ecosystem.

## Overview

This package provides a framework and utilities for creating MCP servers that expose nativeai functionality to AI coding tools. It includes server definitions, configuration management, and programmatic interfaces for each nativeai package.

## CLI Usage

MCP servers are managed through the main nativeai CLI:

```bash
# Start the core MCP server (default)
nativeai mcp start

# Start a specific server
nativeai mcp start ui

# List available servers
nativeai mcp list

# Show available tools
nativeai mcp tools
nativeai mcp tools ui

# Stop a server
nativeai mcp stop
nativeai mcp stop ui
```

## Available MCP Servers

- **AI Server**: Provides tools for AI client management, queue operations, and API key handling
- **Core Server**: Core AI functionality and utilities  
- **UI Server**: Component library and UI utilities
- **Utils Server**: Helper functions and validators
- **Workspace Server**: Workspace management and file operations

## Installation

```bash
npm install @nativeai/mcp
```

## Usage

### CLI Commands

## Programmatic Usage

```typescript
import { createMCPServer, getAvailableServers } from '@nativeai/mcp';

// Create a server instance
const server = createMCPServer('core');

// Start the server
await server.start(3001);

// Get available tools
const tools = server.getTools();
console.log('Available tools:', tools);

// Stop the server
await server.stop();

// List all available servers
const servers = getAvailableServers();
console.log('Available servers:', servers);
```

### Programmatic Usage

```typescript
import { createMCPServer } from '@nativeai/mcp';

// Create and start individual server
const aiServer = createMCPServer('ai');
await aiServer.start();

// Create multiple servers
const servers = ['ai', 'ui', 'utils'].map(name => createMCPServer(name));
```

## Integration with Claude Desktop

Add to your Claude Desktop configuration file (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "nativeai-core": {
      "command": "nativeai",
      "args": ["mcp", "start", "core"],
      "env": {}
    },
    "nativeai-ui": {
      "command": "nativeai", 
      "args": ["mcp", "start", "ui"],
      "env": {}
    }
  }
}
```

## Integration with VS Code

For VS Code MCP extensions:

```json
{
  "mcp.servers": {
    "nativeai-core": {
      "command": "nativeai",
      "args": ["mcp", "start", "core"]
    },
    "nativeai-ui": {
      "command": "nativeai",
      "args": ["mcp", "start", "ui"]
    }
  }
}
```

## Available Tools

### AI Server Tools

- `create_ai_client` - Create AI client instances
- `manage_api_key` - Secure API key management
- `queue_operation` - Manage request queues
- `list_adapters` - List available adapters

### UI Server Tools

- `list_components` - Browse available components
- `generate_component` - Generate component code
- `get_component_docs` - Get component documentation
- `style_utilities` - Access styling utilities
- `create_theme` - Create custom themes

### Core Server Tools

- `ai_function` - Execute core AI operations
- `get_ai_capabilities` - List AI capabilities

### Utils Server Tools

- `validate_data` - Data validation utilities
- `format_data` - Data formatting functions
- `transform_data` - Data transformation operations
- `get_helpers` - List available helpers

### Workspace Server Tools

- `create_workspace` - Create new workspaces
- `manage_files` - File system operations
- `workspace_info` - Get workspace information
- `sync_workspace` - Sync with external sources

## Configuration

Create a `mcp.config.json` file to customize server settings:

```json
{
  "servers": {
    "ai": {
      "name": "ai",
      "port": 3001,
      "enabled": true,
      "description": "AI client management and operations"
    },
    "ui": {
      "name": "ui", 
      "port": 3003,
      "enabled": true,
      "description": "Component library and UI utilities"
    },
    "utils": {
      "name": "utils",
      "port": 3004,
      "enabled": false,
      "description": "Helper functions and validators"
    }
  }
}
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Start development mode
npm run dev
```

### Testing

```bash
# Test individual server
npx tsx src/cli.ts start --servers ai

# Test merged mode
npx tsx src/cli.ts merge

# List available tools
npx tsx src/cli.ts list
```

### Creating Custom Servers

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

export class CustomServer {
  private server: Server;

  constructor() {
    this.server = new Server({
      name: 'custom-server',
      version: '1.0.0'
    }, {
      capabilities: { tools: {} }
    });
    
    this.setupTools();
  }
  
  private setupTools() {
    // Implement your custom tools
  }
  
  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}
```

## Architecture

The MCP package is structured as follows:

```
src/
├── servers/           # Individual MCP servers
│   ├── ai-server.ts   # AI functionality
│   ├── ui-server.ts   # UI components
│   ├── core-server.ts # Core features
│   ├── utils-server.ts# Utilities
│   └── workspace-server.ts # Workspace management
├── cli.ts            # Command line interface
├── config.ts         # Configuration management
├── types.ts          # Type definitions
└── index.ts          # Main exports
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your server or tools
4. Update documentation
5. Submit a pull request

## License

MIT License - see LICENSE file for details