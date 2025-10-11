import { ApiKeyAdapter, SecurityWarning } from './index';
import { 
  InputValidator, 
  RateLimiter, 
  SecureMemory, 
  AuditLogger, 
  EnvironmentChecker 
} from '../security';

/**
 * Web-secure adapter using IndexedDB with Web Crypto API encryption
 * Much more secure than localStorage - uses proper encryption and isolated storage
 */
export class WebSecureAdapter implements ApiKeyAdapter {
  private dbName = 'native-ai-keys';
  private storeName = 'encrypted-keys';
  private dbVersion = 2; // Incremented for key rotation support
  private masterKeyName = 'native-ai-master-key';
  private backupKeyName = 'native-ai-backup-key';
  private rateLimiter = new RateLimiter(15, 60000); // 15 attempts per minute (higher for web)
  private auditLogger?: AuditLogger;

  setAuditLogger(logger: AuditLogger): void {
    this.auditLogger = logger;
  }

  /**
   * Get or create a master key for encryption
   */
  private async getMasterKey(): Promise<CryptoKey> {
    // Try to get existing key from IndexedDB
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readonly');
    const store = transaction.objectStore(this.storeName);
    
    try {
      const result = await new Promise<any>((resolve, reject) => {
        const request = store.get(this.masterKeyName);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      if (result && result.key) {
        return await crypto.subtle.importKey(
          'raw',
          result.key,
          { name: 'AES-GCM' },
          false,
          ['encrypt', 'decrypt']
        );
      }
    } catch (error) {
      // Key doesn't exist, create new one
    }

    // Generate new master key
    const key = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );

    // Store the key
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const writeTransaction = db.transaction([this.storeName], 'readwrite');
    const writeStore = writeTransaction.objectStore(this.storeName);
    
    await new Promise<void>((resolve, reject) => {
      const request = writeStore.put({ id: this.masterKeyName, key: exportedKey });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    return key;
  }

  /**
   * Open IndexedDB database
   */
  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
    });
  }

  /**
   * Encrypt a string using AES-GCM
   */
  private async encrypt(text: string, key: CryptoKey): Promise<{ encrypted: ArrayBuffer; iv: ArrayBuffer }> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV for GCM
    
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );

    return { encrypted, iv: iv.buffer };
  }

  /**
   * Decrypt data using AES-GCM
   */
  private async decrypt(encrypted: ArrayBuffer, iv: ArrayBuffer, key: CryptoKey): Promise<string> {
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      encrypted
    );

    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }

  /**
   * Generate storage key
   */
  private getStorageKey(service: string, account: string): string {
    return `${service}:${account}`;
  }

  async setKey(service: string, account: string, key: string): Promise<void> {
    try {
      const masterKey = await this.getMasterKey();
      const { encrypted, iv } = await this.encrypt(key, masterKey);
      
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      const storageKey = this.getStorageKey(service, account);
      
      await new Promise<void>((resolve, reject) => {
        const request = store.put({
          id: storageKey,
          service,
          account,
          encrypted: Array.from(new Uint8Array(encrypted)),
          iv: Array.from(new Uint8Array(iv)),
          timestamp: Date.now()
        });
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      throw new Error(`Failed to store API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getKey(service: string, account: string): Promise<string | null> {
    try {
      const masterKey = await this.getMasterKey();
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      
      const storageKey = this.getStorageKey(service, account);
      
      const result = await new Promise<any>((resolve, reject) => {
        const request = store.get(storageKey);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      if (!result) {
        return null;
      }

      const encrypted = new Uint8Array(result.encrypted).buffer;
      const iv = new Uint8Array(result.iv).buffer;
      
      return await this.decrypt(encrypted, iv, masterKey);
    } catch (error) {
      throw new Error(`Failed to retrieve API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async deleteKey(service: string, account: string): Promise<boolean> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      const storageKey = this.getStorageKey(service, account);
      
      // Check if key exists first
      const existsResult = await new Promise<any>((resolve, reject) => {
        const request = store.get(storageKey);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      if (!existsResult) {
        return false;
      }

      await new Promise<void>((resolve, reject) => {
        const request = store.delete(storageKey);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });

      return true;
    } catch (error) {
      throw new Error(`Failed to delete API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async listAccounts(service: string): Promise<string[]> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      
      const results = await new Promise<any[]>((resolve, reject) => {
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      return results
        .filter(item => item.service === service && item.id !== this.masterKeyName)
        .map(item => item.account);
    } catch (error) {
      throw new Error(`Failed to list accounts: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Clear all data (useful for logout)
   */
  async clearAll(): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      await new Promise<void>((resolve, reject) => {
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      throw new Error(`Failed to clear data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}