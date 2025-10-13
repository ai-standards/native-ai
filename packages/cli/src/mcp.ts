import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface MCPServerConfig {
  name: string;
  port: number;
  enabled: boolean;
  description?: string;
}

export interface MCPConfig {
  servers: Record<string, MCPServerConfig>;
}

export type ServerName = 'ai' | 'core' | 'ui' | 'utils' | 'workspace';

// Load MCP configuration
export function loadMCPConfig(): MCPConfig {
  const configPath = join(process.cwd(), 'mcp.config.json');
  if (existsSync(configPath)) {
    try {
      return JSON.parse(readFileSync(configPath, 'utf-8'));
    } catch (error) {
      console.warn('Failed to load MCP config, using defaults');
    }
  }
  
  return {
    servers: {
      core: { name: 'core', port: 3001, enabled: true, description: 'Core AI functionality' },
      ai: { name: 'ai', port: 3002, enabled: true, description: 'AI client management and operations' },
      ui: { name: 'ui', port: 3003, enabled: true, description: 'Component library and UI utilities' },
      utils: { name: 'utils', port: 3004, enabled: true, description: 'Helper functions and validators' },
      workspace: { name: 'workspace', port: 3005, enabled: true, description: 'Workspace management' }
    }
  };
}

// Get available tools for each server
export function getServerTools(): Record<ServerName, string[]> {
  return {
    core: ['ai_function', 'get_ai_capabilities'],
    ai: ['create_ai_client', 'manage_api_key', 'queue_operation', 'list_adapters'],
    ui: ['list_components', 'generate_component', 'get_component_docs', 'style_utilities'],
    utils: ['validate_data', 'format_data', 'transform_data', 'get_helpers'],
    workspace: ['create_workspace', 'manage_files', 'workspace_info', 'sync_workspace']
  };
}