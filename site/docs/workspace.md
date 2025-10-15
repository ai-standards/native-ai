---
title: @nativeai/workspace
description: Safe workspaces for native AI
package: workspace
version: 0.9.1
---

# Workspace

Managing file paths in Node.js applications often leads to brittle code full of `path.join(__dirname, '../../config')` and relative paths that break during refactoring. The Workspace singleton addresses this by establishing a project root directory as the reference point for all file operations.

Once configured, all file system operations work relative to this root, eliminating complex path resolution and preventing accidental file access outside your project boundaries. This approach makes file operations more predictable and helps avoid path-related bugs when code is moved or restructured.

## Table of Contents

- [Usage](#usage)
- [API](#api)
  - [Setup](#setup)
    - [`setRootPath(path: string)`](#setrootpathpath-string)
    - [`getRootPath(): string`](#getrootpath-string)
  - [Path Operations](#path-operations)
    - [`join(...paths: string[])`](#joinpaths-string)
    - [`resolve(...paths: string[])`](#resolvepaths-string)
    - [`relative(targetPath: string)`](#relativetargetpath-string)
    - [`dirname(filePath: string)`](#dirnamefilepath-string)
    - [`basename(filePath: string, ext?: string)`](#basenamefilepath-string-ext-string)
    - [`extname(filePath: string)`](#extnamefilepath-string)
  - [Synchronous Operations](#synchronous-operations)
    - [`readFileSync(filePath: string, options?)`](#readfilesyncfilepath-string-options)
    - [`writeFileSync(filePath: string, data: string | Buffer, options?)`](#writefilesyncfilepath-string-data-string--buffer-options)
    - [`mkdirSync(dirPath: string, options?)`](#mkdirsyncdirpath-string-options)
    - [`existsSync(filePath: string)`](#existssyncfilepath-string)
    - [`readdirSync(dirPath: string, options?)`](#readdirsyncdirpath-string-options)
    - [`statSync(filePath: string)`](#statsyncfilepath-string)
  - [Asynchronous Operations](#asynchronous-operations)
    - [`readFileAsync(filePath: string, options?)`](#readfileasyncfilepath-string-options)
    - [`writeFileAsync(filePath: string, data: string | Buffer, options?)`](#writefileasyncfilepath-string-data-string--buffer-options)
    - [`mkdirAsync(dirPath: string, options?)`](#mkdirasync-dirpath-string-options)
    - [`existsAsync(filePath: string)`](#existsasyncfilepath-string)
    - [`copyFileAsync(src: string, dest: string, mode?)`](#copyfileasyncsrc-string-dest-string-mode)
  - [Utilities](#utilities)
    - [`isWithinRoot(filePath: string)`](#iswithinrootfilepath-string)
    - [`getAbsolutePath(filePath: string)`](#getabsolutepathfilepath-string)
    - [`walkDirectory(dirPath?: string, options?)`](#walkdirectorydirpath-string-options)
  - [Glob Operations](#glob-operations)
    - [`globAsync(pattern: string, options?)`](#globasyncpattern-string-options)
    - [`globSync(pattern: string, options?)`](#globsyncpattern-string-options)
- [Security Features](#security-features)
  - [Path Traversal Protection](#path-traversal-protection)
  - [Root Path Protection](#root-path-protection)
  - [Security Implementation](#security-implementation)

## Usage

```typescript
import {workspace} from '@nativeai/workspace';

workspace.setRootPath('/project/root');
workspace.writeFileSync('config.json', data);
const files = workspace.readdirSync('src');
```

## API

The workspace provides methods organized into five categories. All file operations are relative to the configured root path and automatically create parent directories when needed.

### Setup

Configure and retrieve the workspace root directory.

#### `setRootPath(path: string)`

Set the workspace root directory with built-in security validation to prevent dangerous paths.

```typescript
workspace.setRootPath('/Users/john/my-project'); //  Safe project path
workspace.setRootPath('/Users/john'); //  Throws: user home directory
workspace.setRootPath('/'); //  Throws: system path
```

#### `getRootPath(): string`

Get the currently configured root directory path.

```typescript
const root = workspace.getRootPath(); // '/Users/john/my-project'
```

### Path Operations

Node.js path operations relative to the workspace root.

#### `join(...paths: string[])`

Join multiple path segments into a single relative path.

```typescript
const configPath = workspace.join('config', 'app.json'); // 'config/app.json'
const nested = workspace.join('src', 'components', 'ui', 'Button.tsx');
```

#### `resolve(...paths: string[])`

Resolve path segments relative to the workspace root, returning an absolute path.

```typescript
const resolved = workspace.resolve('..', 'shared', 'utils.ts');
const absolutePath = workspace.resolve('src', 'main.ts');
```

#### `relative(targetPath: string)`

Get the relative path from workspace root to the target path.

```typescript
const rel = workspace.relative('/Users/john/my-project/src/main.ts'); // 'src/main.ts'
const relFromAbs = workspace.relative(workspace.resolve('config/app.json'));
```

#### `dirname(filePath: string)`

Get the directory portion of a file path relative to workspace root.

```typescript
const dir = workspace.dirname('src/components/Button.tsx'); // 'src/components'
const rootDir = workspace.dirname('package.json'); // ''
```

#### `basename(filePath: string, ext?: string)`

Get the filename portion of a path, optionally removing the extension.

```typescript
const name = workspace.basename('src/main.ts'); // 'main.ts'
const nameNoExt = workspace.basename('src/main.ts', '.ts'); // 'main'
```

#### `extname(filePath: string)`

Get the file extension from a path.

```typescript
const ext = workspace.extname('config.json'); // '.json'
const noExt = workspace.extname('README'); // ''
```

### Synchronous Operations

Blocking file system operations for simple use cases.

#### `readFileSync(filePath: string, options?)`

Read file contents synchronously with path traversal protection.

```typescript
const content = workspace.readFileSync('package.json', 'utf8');
const buffer = workspace.readFileSync('image.png');
```

#### `writeFileSync(filePath: string, data: string | Buffer, options?)`

Write data to a file synchronously, automatically creating parent directories.

```typescript
workspace.writeFileSync('config/settings.json', JSON.stringify(config));
workspace.writeFileSync('logs/app.log', 'Application started\n', { flag: 'a' });
```

#### `mkdirSync(dirPath: string, options?)`

Create a directory synchronously, including parent directories if needed.

```typescript
workspace.mkdirSync('logs/2023');
workspace.mkdirSync('temp', { mode: 0o755 });
```

#### `existsSync(filePath: string)`

Check if a file or directory exists, returning false for invalid/dangerous paths.

```typescript
if (workspace.existsSync('config.json')) { 
  // file exists and is within workspace
}
const hasLogs = workspace.existsSync('logs/app.log');
```

#### `readdirSync(dirPath: string, options?)`

List the contents of a directory synchronously.

```typescript
const files = workspace.readdirSync('src');
const detailed = workspace.readdirSync('src', { withFileTypes: true });
```

#### `statSync(filePath: string)`

Get detailed information about a file or directory.

```typescript
const stats = workspace.statSync('package.json');
console.log(stats.size); // file size in bytes
console.log(stats.isDirectory()); // false
```

### Asynchronous Operations

Non-blocking file system operations for better performance.

#### `readFileAsync(filePath: string, options?)`

Read file contents asynchronously with path validation.

```typescript
const content = await workspace.readFileAsync('package.json', 'utf8');
const imageBuffer = await workspace.readFileAsync('assets/logo.png');
```

#### `writeFileAsync(filePath: string, data: string | Buffer, options?)`

Write data to a file asynchronously, creating parent directories as needed.

```typescript
await workspace.writeFileAsync('logs/app.log', 'Started application\n');
await workspace.writeFileAsync('config/user.json', JSON.stringify(userData));
```

#### `mkdirAsync(dirPath: string, options?)`

Create directories asynchronously with recursive parent creation.

```typescript
await workspace.mkdirAsync('temp/cache');
await workspace.mkdirAsync('uploads/2023/october');
```

#### `existsAsync(filePath: string)`

Check if a file or directory exists asynchronously.

```typescript
const exists = await workspace.existsAsync('config.json');
if (await workspace.existsAsync('backup')) {
  // backup directory exists
}
```

#### `copyFileAsync(src: string, dest: string, mode?)`

Copy a file asynchronously with automatic directory creation.

```typescript
await workspace.copyFileAsync('template.txt', 'output.txt');
await workspace.copyFileAsync('config/default.json', 'config/production.json');
```

### Utilities

Helper methods for advanced workspace operations.

#### `isWithinRoot(filePath: string)`

Validate that a path is safely within the workspace boundaries.

```typescript
const safe = workspace.isWithinRoot('src/file.ts'); // true
const unsafe = workspace.isWithinRoot('../outside.ts'); // false
const malicious = workspace.isWithinRoot('/etc/passwd'); // false
```

#### `getAbsolutePath(filePath: string)`

Convert a workspace-relative path to an absolute system path.

```typescript
const abs = workspace.getAbsolutePath('src/main.ts');
// '/Users/john/my-project/src/main.ts'
const configPath = workspace.getAbsolutePath('config/app.json');
```

#### `walkDirectory(dirPath?: string, options?)`

Recursively traverse directories and return all file paths with optional filtering.

```typescript
const allFiles = await workspace.walkDirectory('src');
const tsFiles = await workspace.walkDirectory('src', {
  filter: (path, isDir) => !isDir && path.endsWith('.ts')
});
const withDirs = await workspace.walkDirectory('', { 
  includeDirs: true,
  filter: (path, isDir) => !path.startsWith('node_modules')
});
```

### Glob Operations

Pattern matching using glob syntax for finding files with security filtering.

#### `globAsync(pattern: string, options?)`

Find files matching a glob pattern asynchronously, with results filtered to workspace-only paths.

```typescript
const jsFiles = await workspace.globAsync('**/*.js');
const srcFiles = await workspace.globAsync('src/**/*.{ts,tsx}');
const tests = await workspace.globAsync('**/*.test.*', { 
  ignore: ['node_modules/**'] 
});
```

#### `globSync(pattern: string, options?)`

Find files matching a glob pattern synchronously with security validation.

```typescript
const configFiles = workspace.globSync('config/*.json');
const testFiles = workspace.globSync('**/*.test.ts');
const images = workspace.globSync('assets/**/*.{png,jpg,svg}');
```

## Security Features

The workspace includes comprehensive protection against path traversal attacks and dangerous root paths:

### Path Traversal Protection

All file operations are validated to prevent escaping the workspace boundary:

**Blocked Patterns:**
- Classic traversal: `../../../etc/passwd`
- Windows traversal: `..\..\Windows\System32`
- Mixed separators: `../..\\Windows\\System32`
- Absolute paths: `/etc/passwd`, `C:\Windows\System32`
- URL encoded: `%2e%2e%2f` (encoded `../`)

**How it works:**
1. **Path validation** - Every file operation validates paths before execution
2. **Absolute path detection** - Blocks `/`, `C:\` and other absolute references
3. **Resolution checking** - Uses `path.resolve()` to detect traversal attempts
4. **Boundary enforcement** - Ensures resolved paths stay within workspace root

### Root Path Protection

Prevents setting workspace to sensitive system locations:

**Blocked Paths:**
- System directories (`/`, `/usr`, `/etc`, `/System`, etc.)
- User home directory (`/Users/username`, `C:\Users\username`)
- Common user folders (`~/Desktop`, `~/Documents`, `~/Downloads`)
- Windows system paths (`C:\Windows`, `C:\Program Files`)

**Safe Paths:**
- Project subdirectories (`~/Documents/my-project`)
- Custom development folders (`~/dev/projects/app`)
- Any path that's not a sensitive system location

### Security Implementation

```typescript
// All file operations go through validation
workspace.writeFileSync('../../../etc/passwd', 'hack'); //  Throws error
workspace.readFileSync('/etc/shadow');                   //  Throws error
workspace.copyFileSync('file.txt', 'C:\\Windows\\hack'); //  Throws error

// Safe operations work normally
workspace.writeFileSync('config/app.json', data);        //  Works
workspace.readFileSync('src/main.ts');                   //  Works
```

This prevents both accidental and malicious file operations outside the intended workspace.

---
*This documentation is automatically generated from the workspace package README. [View source](https://github.com/ai-standards/native-ai/tree/main/packages/workspace)*
