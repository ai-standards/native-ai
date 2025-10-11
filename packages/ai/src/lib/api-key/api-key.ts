import { ApiKeyAdapter } from './adapters';
import { KeytarAdapter } from './adapters/keytar-adapter';

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
 * Sets the adapter to use for API key storage
 * @param adapter The adapter instance to use
 */
export function setAdapter(adapter: ApiKeyAdapter): void {
  defaultAdapter = adapter;
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
