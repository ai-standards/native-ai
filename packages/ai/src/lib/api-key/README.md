# API Key Adapters

This package provides secure storage adapters for API keys across different environments.

## Available Adapters

### KeytarAdapter (Default - Node.js)
Uses the system keychain (Keychain on macOS, Credential Manager on Windows, etc.)
- **Security**: Highest - encrypted by OS, requires user authentication
- **Environment**: Node.js applications, Electron apps
- **Persistence**: Until manually removed or OS reset

```typescript
import { setAdapter } from './api-key';
import { KeytarAdapter } from './adapters';

setAdapter(new KeytarAdapter());
```

### WebSecureAdapter (Browser)
Uses IndexedDB with Web Crypto API encryption
- **Security**: High - AES-256-GCM encryption with random IVs
- **Environment**: Modern browsers with Web Crypto API support
- **Persistence**: Until manually cleared or browser data cleared

```typescript
import { setAdapter } from './api-key';
import { WebSecureAdapter } from './adapters';

setAdapter(new WebSecureAdapter());
```

## Security Features

### WebSecureAdapter Security:
- **AES-256-GCM encryption** with random initialization vectors
- **Master key generation** using Web Crypto API
- **IndexedDB storage** (isolated per origin)
- **No plain text storage** - keys encrypted before storage
- **clearAll() method** for secure logout

### Best Practices:
1. **Call clearAll()** on user logout
2. **Use HTTPS** in production (required for Web Crypto API)
3. **Validate browser support** before using WebSecureAdapter
4. **Consider user privacy** - explain data storage to users

## Usage Examples

### Basic Usage (Auto-selects adapter)
```typescript
import { setKey, getKey, destroyKey } from './api-key';

// Store a key
await setKey('your-api-key');

// Retrieve a key  
const apiKey = await getKey();

// Remove a key
await destroyKey();
```

### Manual Adapter Selection
```typescript
import { setAdapter, setKey, getKey } from './api-key';
import { WebSecureAdapter, KeytarAdapter } from './adapters';

// For web environments
if (typeof window !== 'undefined') {
  setAdapter(new WebSecureAdapter());
} else {
  // For Node.js environments
  setAdapter(new KeytarAdapter());
}

await setKey('my-api-key');
const key = await getKey();
```

### Multiple Keys
```typescript
await setKey('openai-key', 'openai');
await setKey('anthropic-key', 'anthropic');

const openaiKey = await getKey('openai');
const accounts = await listAccounts(); // ['openai', 'anthropic']
```

### Secure Web Logout
```typescript
import { getAdapter } from './api-key';
import { WebSecureAdapter } from './adapters';

// Clear all stored data on logout
const adapter = getAdapter();
if (adapter instanceof WebSecureAdapter) {
  await adapter.clearAll();
}
```

## Browser Compatibility

WebSecureAdapter requires:
- **Web Crypto API** (all modern browsers)
- **IndexedDB** (all modern browsers)
- **HTTPS** (Web Crypto API requirement in production)

Check compatibility:
```typescript
const isWebSecureSupported = () => {
  return typeof window !== 'undefined' && 
         'crypto' in window && 
         'subtle' in window.crypto &&
         'indexedDB' in window;
};

if (isWebSecureSupported()) {
  setAdapter(new WebSecureAdapter());
}
```