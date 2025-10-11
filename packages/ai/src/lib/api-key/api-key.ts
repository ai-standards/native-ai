import * as keytar from 'keytar';

/**
 * Service name for storing API keys in the system keychain
 */
const SERVICE_NAME = 'native-ai';

/**
 * Default account name for API key storage
 */
const DEFAULT_ACCOUNT = 'api-key';

/**
 * Sets an API key in the system keychain
 * @param key The API key to store
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves when the key is stored
 */
export async function setKey(key: string, account: string = DEFAULT_ACCOUNT): Promise<void> {
  try {
    await keytar.setPassword(SERVICE_NAME, account, key);
  } catch (error) {
    throw new Error(`Failed to store API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Retrieves an API key from the system keychain
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves to the API key or null if not found
 */
export async function getKey(account: string = DEFAULT_ACCOUNT): Promise<string | null> {
  try {
    return await keytar.getPassword(SERVICE_NAME, account);
  } catch (error) {
    throw new Error(`Failed to retrieve API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Removes an API key from the system keychain
 * @param account Optional account name (defaults to 'api-key')
 * @returns Promise that resolves to true if the key was deleted, false if it didn't exist
 */
export async function destroyKey(account: string = DEFAULT_ACCOUNT): Promise<boolean> {
  try {
    return await keytar.deletePassword(SERVICE_NAME, account);
  } catch (error) {
    throw new Error(`Failed to delete API key: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Lists all accounts that have stored API keys
 * @returns Promise that resolves to an array of account names
 */
export async function listAccounts(): Promise<string[]> {
  try {
    const credentials = await keytar.findCredentials(SERVICE_NAME);
    return credentials.map(cred => cred.account);
  } catch (error) {
    throw new Error(`Failed to list accounts: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
