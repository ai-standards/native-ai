import { ApiKeyAdapter } from './adapters';
import { KeytarAdapter } from './adapters/keytar-adapter';
import { AuditLogger, EnvironmentChecker } from './security';

/**
 * Service name for storing API keys
 */
const SERVICE_NAME = 'native-ai';

/**
 * Default account name for API key storage
 */
const DEFAULT_ACCOUNT = 'api-key';

/**
 * Default adapter instance
 */
let defaultAdapter: ApiKeyAdapter = new KeytarAdapter();

/**
 * Global audit logger
 */
let globalAuditLogger = new AuditLogger();

// Set audit logger on default adapter
if (defaultAdapter.setAuditLogger) {
  defaultAdapter.setAuditLogger(globalAuditLogger);
}

/**
 * Sets the adapter to use for API key storage
 * @param adapter The adapter instance to use
 */
export function setAdapter(adapter: ApiKeyAdapter): void {
  defaultAdapter = adapter;
  // Set audit logger on new adapter
  if (adapter.setAuditLogger) {
    adapter.setAuditLogger(globalAuditLogger);
  }
}

/**
 * Gets the current adapter
 * @returns The current adapter instance
 */
export function getAdapter(): ApiKeyAdapter {
  return defaultAdapter;
}

/**
 * Sets an API key
 * @param key The API key to store
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves when the key is stored
 */
export async function setKey(key: string, account: string = DEFAULT_ACCOUNT): Promise<void> {
  return defaultAdapter.setKey(SERVICE_NAME, account, key);
}

/**
 * Retrieves an API key
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves to the API key or null if not found
 */
export async function getKey(account: string = DEFAULT_ACCOUNT): Promise<string | null> {
  return defaultAdapter.getKey(SERVICE_NAME, account);
}

/**
 * Removes an API key
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves to true if the key was deleted, false if it didn't exist
 */
export async function destroyKey(account: string = DEFAULT_ACCOUNT): Promise<boolean> {
  return defaultAdapter.deleteKey(SERVICE_NAME, account);
}

/**
 * Lists all accounts that have stored API keys
 * @returns Promise that resolves to an array of account names
 */
export async function listAccounts(): Promise<string[]> {
  return defaultAdapter.listAccounts(SERVICE_NAME);
}

/**
 * Rotates encryption keys (if supported by adapter)
 * @returns Promise that resolves when rotation is complete
 */
export async function rotateKeys(): Promise<void> {
  if (defaultAdapter.rotateKeys) {
    return defaultAdapter.rotateKeys();
  }
  throw new Error('Key rotation not supported by current adapter');
}

/**
 * Gets security warnings for the current environment
 * @returns Promise that resolves to array of security warnings
 */
export async function getSecurityWarnings(): Promise<import('./security').SecurityWarning[]> {
  if (defaultAdapter.getSecurityWarnings) {
    return defaultAdapter.getSecurityWarnings();
  }
  
  // Fallback to environment checker
  if (typeof window !== 'undefined') {
    return EnvironmentChecker.checkWebEnvironment();
  } else {
    return EnvironmentChecker.checkNodeEnvironment();
  }
}

/**
 * Gets the audit logger instance
 * @returns The global audit logger
 */
export function getAuditLogger(): AuditLogger {
  return globalAuditLogger;
}

/**
 * Sets a custom audit logger
 * @param logger The audit logger to use
 */
export function setAuditLogger(logger: AuditLogger): void {
  globalAuditLogger = logger;
  if (defaultAdapter.setAuditLogger) {
    defaultAdapter.setAuditLogger(logger);
  }
}

/**
 * Gets audit logs with optional filtering
 * @param filter Optional filter criteria
 * @returns Array of audit events
 */
export function getAuditLogs(filter?: Partial<import('./security').AuditEvent>): import('./security').AuditEvent[] {
  return globalAuditLogger.getLogs(filter);
}

/**
 * Clears audit logs
 */
export function clearAuditLogs(): void {
  globalAuditLogger.clear();
}
