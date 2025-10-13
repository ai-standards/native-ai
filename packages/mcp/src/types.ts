export interface MCPServerConfig {
  name: string;
  port: number;
  enabled: boolean;
  description?: string;
}

export interface MCPConfig {
  servers: Record<string, MCPServerConfig>;
}

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: object;
  handler: (params: any) => Promise<any>;
}

export interface MCPServer {
  name: string;
  description: string;
  version: string;
  tools: MCPTool[];
  start: (port?: number) => Promise<void>;
  stop: () => Promise<void>;
}

export type ServerName = 'ai' | 'core' | 'ui' | 'utils' | 'workspace';