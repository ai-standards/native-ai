export * from './types';
export * from './config';

/**
 * Create an MCP server instance for a specific nativeai package
 * @param serverName - Name of the server to create
 * @returns MCP server instance
 */
export function createMCPServer(serverName: string) {
  console.log(`Creating MCP server for: ${serverName}`);
  return {
    name: serverName,
    start: async (port?: number) => {
      console.log(`${serverName} MCP server started${port ? ` on port ${port}` : ''}`);
      return Promise.resolve();
    },
    stop: async () => {
      console.log(`${serverName} MCP server stopped`);
      return Promise.resolve();
    },
    getTools: () => {
      // Return available tools for this server
      const tools: Record<string, string[]> = {
        core: ['ai_function', 'get_ai_capabilities'],
        ai: ['create_ai_client', 'manage_api_key', 'queue_operation', 'list_adapters'],
        ui: ['list_components', 'generate_component', 'get_component_docs', 'style_utilities'],
        utils: ['validate_data', 'format_data', 'transform_data', 'get_helpers'],
        workspace: ['create_workspace', 'manage_files', 'workspace_info', 'sync_workspace']
      };
      return tools[serverName] || [];
    }
  };
}

/**
 * Get available MCP server names
 */
export function getAvailableServers(): string[] {
  return ['core', 'ai', 'ui', 'utils', 'workspace'];
}