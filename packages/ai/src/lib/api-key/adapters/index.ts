import { AuditLogger } from '../security';

/**
 * Interface for API key storage adapters
 */
export interface ApiKeyAdapter {
  /**
   * Sets an API key
   * @param service The service name
   * @param account The account name
   * @param key The API key to store
   * @returns Promise that resolves when the key is stored
   */
  setKey(service: string, account: string, key: string): Promise<void>;

  /**
   * Retrieves an API key
   * @param service The service name
   * @param account The account name
   * @returns Promise that resolves to the API key or null if not found
   */
  getKey(service: string, account: string): Promise<string | null>;

  /**
   * Removes an API key
   * @param service The service name
   * @param account The account name
   * @returns Promise that resolves to true if the key was deleted, false if it didn't exist
   */
  deleteKey(service: string, account: string): Promise<boolean>;

  /**
   * Lists all accounts that have stored API keys for a service
   * @param service The service name
   * @returns Promise that resolves to an array of account names
   */
  listAccounts(service: string): Promise<string[]>;

  /**
   * Rotates encryption keys (if applicable)
   * @returns Promise that resolves when rotation is complete
   */
  rotateKeys?(): Promise<void>;

  /**
   * Sets audit logger for security monitoring
   * @param logger The audit logger instance
   */
  setAuditLogger?(logger: AuditLogger): void;

  /**
   * Gets security warnings for the current environment
   * @returns Array of security warnings
   */
  getSecurityWarnings?(): Promise<SecurityWarning[]>;
}

export interface SecurityWarning {
  level: 'info' | 'medium' | 'high';
  message: string;
  recommendation: string;
}

export { KeytarAdapter } from './keytar-adapter';
export { WebSecureAdapter } from './web-secure-adapter';