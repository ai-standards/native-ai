import * as keytar from 'keytar';
import { ApiKeyAdapter, SecurityWarning } from './index';
import { 
  InputValidator, 
  RateLimiter, 
  SecureMemory, 
  AuditLogger, 
  EnvironmentChecker 
} from '../security';

/**
 * Keytar adapter for system keychain storage with enhanced security
 */
export class KeytarAdapter implements ApiKeyAdapter {
  private rateLimiter = new RateLimiter(10, 60000); // 10 attempts per minute
  private auditLogger?: AuditLogger;

  setAuditLogger(logger: AuditLogger): void {
    this.auditLogger = logger;
  }

  async setKey(service: string, account: string, key: string): Promise<void> {
    const operationKey = `setKey:${service}:${account}`;
    
    try {
      // Input validation
      InputValidator.validateService(service);
      InputValidator.validateAccount(account);
      InputValidator.validateKey(key);

      // Rate limiting
      this.rateLimiter.checkLimit(operationKey);

      // Audit logging
      this.auditLogger?.log({
        action: 'setKey',
        service,
        account,
        level: 'info',
        message: 'Attempting to store API key'
      });

      await keytar.setPassword(service, account, key);

      // Success audit
      this.auditLogger?.log({
        action: 'setKey',
        service,
        account,
        level: 'info',
        message: 'API key stored successfully'
      });

      // Reset rate limit on success
      this.rateLimiter.reset(operationKey);

      // Secure memory wipe
      SecureMemory.wipe(key);

    } catch (error) {
      this.auditLogger?.log({
        action: 'setKey',
        service,
        account,
        level: 'error',
        message: `Failed to store API key: ${error instanceof Error ? error.message : 'Unknown error'}`
      });

      throw new Error(`Failed to store API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getKey(service: string, account: string): Promise<string | null> {
    const operationKey = `getKey:${service}:${account}`;
    
    try {
      // Input validation
      InputValidator.validateService(service);
      InputValidator.validateAccount(account);

      // Rate limiting
      this.rateLimiter.checkLimit(operationKey);

      // Audit logging
      this.auditLogger?.log({
        action: 'getKey',
        service,
        account,
        level: 'info',
        message: 'Attempting to retrieve API key'
      });

      const key = await keytar.getPassword(service, account);

      // Success audit
      this.auditLogger?.log({
        action: 'getKey',
        service,
        account,
        level: 'info',
        message: key ? 'API key retrieved successfully' : 'API key not found'
      });

      // Reset rate limit on success
      this.rateLimiter.reset(operationKey);

      return key;

    } catch (error) {
      this.auditLogger?.log({
        action: 'getKey',
        service,
        account,
        level: 'error',
        message: `Failed to retrieve API key: ${error instanceof Error ? error.message : 'Unknown error'}`
      });

      throw new Error(`Failed to retrieve API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async deleteKey(service: string, account: string): Promise<boolean> {
    const operationKey = `deleteKey:${service}:${account}`;
    
    try {
      // Input validation
      InputValidator.validateService(service);
      InputValidator.validateAccount(account);

      // Rate limiting
      this.rateLimiter.checkLimit(operationKey);

      // Audit logging
      this.auditLogger?.log({
        action: 'deleteKey',
        service,
        account,
        level: 'info',
        message: 'Attempting to delete API key'
      });

      const deleted = await keytar.deletePassword(service, account);

      // Success audit
      this.auditLogger?.log({
        action: 'deleteKey',
        service,
        account,
        level: 'info',
        message: deleted ? 'API key deleted successfully' : 'API key not found for deletion'
      });

      // Reset rate limit on success
      this.rateLimiter.reset(operationKey);

      return deleted;

    } catch (error) {
      this.auditLogger?.log({
        action: 'deleteKey',
        service,
        account,
        level: 'error',
        message: `Failed to delete API key: ${error instanceof Error ? error.message : 'Unknown error'}`
      });

      throw new Error(`Failed to delete API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async listAccounts(service: string): Promise<string[]> {
    const operationKey = `listAccounts:${service}`;
    
    try {
      // Input validation
      InputValidator.validateService(service);

      // Rate limiting
      this.rateLimiter.checkLimit(operationKey);

      // Audit logging
      this.auditLogger?.log({
        action: 'listAccounts',
        service,
        level: 'info',
        message: 'Attempting to list accounts'
      });

      const credentials = await keytar.findCredentials(service);
      const accounts = credentials.map(cred => cred.account);

      // Success audit
      this.auditLogger?.log({
        action: 'listAccounts',
        service,
        level: 'info',
        message: `Found ${accounts.length} accounts`
      });

      // Reset rate limit on success
      this.rateLimiter.reset(operationKey);

      return accounts;

    } catch (error) {
      this.auditLogger?.log({
        action: 'listAccounts',
        service,
        level: 'error',
        message: `Failed to list accounts: ${error instanceof Error ? error.message : 'Unknown error'}`
      });

      throw new Error(`Failed to list accounts: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async rotateKeys(): Promise<void> {
    // Keytar doesn't manage encryption keys directly - this is a no-op
    // The system keychain handles encryption key rotation
    this.auditLogger?.log({
      action: 'rotateKeys',
      level: 'info',
      message: 'Key rotation requested - handled by system keychain'
    });
  }

  async getSecurityWarnings(): Promise<SecurityWarning[]> {
    return EnvironmentChecker.checkNodeEnvironment();
  }
}