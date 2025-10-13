import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { MCPConfig, MCPServerConfig } from './types';

const DEFAULT_CONFIG: MCPConfig = {
  servers: {
    ai: {
      name: 'ai',
      port: 3001,
      enabled: true,
      description: 'AI client management and queue operations'
    },
    core: {
      name: 'core',
      port: 3002,
      enabled: true,
      description: 'Core AI functionality and utilities'
    },
    ui: {
      name: 'ui',
      port: 3003,
      enabled: true,
      description: 'Component library and UI utilities'
    },
    utils: {
      name: 'utils',
      port: 3004,
      enabled: true,
      description: 'Helper functions and validators'
    },
    workspace: {
      name: 'workspace',
      port: 3005,
      enabled: true,
      description: 'Workspace management and file operations'
    }
  }
};

export function loadConfig(): MCPConfig {
  const configPath = join(process.cwd(), 'mcp.config.json');
  
  if (existsSync(configPath)) {
    try {
      const configData = readFileSync(configPath, 'utf-8');
      const userConfig = JSON.parse(configData);
      
      // Merge with default config
      return {
        servers: {
          ...DEFAULT_CONFIG.servers,
          ...userConfig.servers
        }
      };
    } catch (error) {
      console.warn('Failed to load config file, using defaults:', error);
    }
  }
  
  return DEFAULT_CONFIG;
}

export function getServerConfig(serverName: string): MCPServerConfig | undefined {
  const config = loadConfig();
  return config.servers[serverName];
}