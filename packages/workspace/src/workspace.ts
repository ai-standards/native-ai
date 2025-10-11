import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { glob as globCallback } from 'glob';

// Promisify glob for async operations
const globAsync = promisify(globCallback);

/**
 * Workspace singleton that provides file system and path operations
 * relative to a configured root directory.
 */
class Workspace {
  private static instance: Workspace | null = null;
  private rootPath: string | null = null;

  // Promisified fs methods for async operations
  private readFile = promisify(fs.readFile);
  private writeFile = promisify(fs.writeFile);
  private mkdir = promisify(fs.mkdir);
  private rmdir = promisify(fs.rmdir);
  private unlink = promisify(fs.unlink);
  private readdir = promisify(fs.readdir);
  private stat = promisify(fs.stat);
  private access = promisify(fs.access);
  private copyFile = promisify(fs.copyFile);
  private rename = promisify(fs.rename);

  private constructor() {}

  /**
   * Gets the singleton instance of the Workspace
   */
  public static getInstance(): Workspace {
    if (!Workspace.instance) {
      Workspace.instance = new Workspace();
    }
    return Workspace.instance;
  }

  /**
   * Sets the root path for the workspace
   * @param rootPath - The root directory path
   */
  public setRootPath(rootPath: string): void {
    const resolvedPath = path.resolve(rootPath);
    this.validateRootPath(resolvedPath);
    this.rootPath = resolvedPath;
  }

  /**
   * Validates that the root path is not a sensitive system directory
   * @param rootPath - The resolved root path to validate
   */
  private validateRootPath(rootPath: string): void {
    const normalizedPath = path.normalize(rootPath);
    
    // Check for user home directory first (before other checks)
    const homeDir = process.env.HOME || process.env.USERPROFILE;
    if (homeDir) {
      const normalizedHome = path.normalize(homeDir);
      if (normalizedPath === normalizedHome) {
        throw new Error(`Cannot set workspace root to user home directory: ${normalizedPath}`);
      }
    }

    // Common sensitive paths that should not be used as workspace root
    const sensitivePaths = [
      '/',
      '/bin',
      '/sbin',
      '/usr',
      '/usr/bin',
      '/usr/sbin',
      '/usr/local',
      '/etc',
      '/var',
      '/sys',
      '/proc',
      '/dev',
      '/boot',
      '/lib',
      '/lib64',
      '/opt',
      '/root',
      '/System',
      '/Library',
      '/Applications',
      '/Network',
      '/Volumes',
      '/private',
      '/private/etc',
      '/private/var',
      '/private/tmp',
      '/Users',
      '/home',
      '/tmp',
      '/Windows',
      '/Program Files',
      '/Program Files (x86)',
      '/ProgramData'
    ];

    // Check for exact matches (excluding home dir which is checked above)
    for (const sensitivePath of sensitivePaths) {
      if (sensitivePath && normalizedPath === path.normalize(sensitivePath)) {
        throw new Error(`Cannot set workspace root to sensitive system path: ${normalizedPath}`);
      }
    }

    // Additional checks for user directory immediate children
    if (homeDir) {
      const normalizedHome = path.normalize(homeDir);
      
      // Check if it's a direct child of home (like ~/Desktop, ~/Documents)
      const relativePath = path.relative(normalizedHome, normalizedPath);
      if (relativePath && !relativePath.includes('/') && !relativePath.includes('\\') && !relativePath.startsWith('..')) {
        const commonUserDirs = ['Desktop', 'Documents', 'Downloads', 'Pictures', 'Music', 'Videos', 'Public'];
        const dirName = path.basename(normalizedPath);
        if (commonUserDirs.includes(dirName)) {
          throw new Error(`Cannot set workspace root to user directory: ${normalizedPath}. Create a subdirectory instead.`);
        }
      }
    }

    // Check for Windows system paths
    if (process.platform === 'win32') {
      const winSystemPaths = ['C:\\', 'D:\\', 'C:\\Windows', 'C:\\System32'];
      for (const winPath of winSystemPaths) {
        if (normalizedPath === path.normalize(winPath)) {
          throw new Error(`Cannot set workspace root to Windows system path: ${normalizedPath}`);
        }
      }
    }
  }

  /**
   * Gets the current root path
   */
  public getRootPath(): string {
    if (!this.rootPath) {
      throw new Error('Root path not set. Call setRootPath() first.');
    }
    return this.rootPath;
  }

  /**
   * Ensures root path is set, throws if not
   */
  private ensureRootPath(): void {
    if (!this.rootPath) {
      throw new Error('Root path not set. Call setRootPath() first.');
    }
  }

  /**
   * Validates and resolves a path to ensure it stays within the workspace
   * @param filePath - Path relative to workspace root
   * @returns Absolute path within workspace
   * @throws Error if path would escape workspace
   */
  private validateAndResolvePath(filePath: string): string {
    this.ensureRootPath();
    
    // Check for absolute paths (including Windows paths like C:\...)
    if (path.isAbsolute(filePath)) {
      throw new Error(`Path traversal detected: "${filePath}" is an absolute path`);
    }
    
    // Check for Windows-style absolute paths that might not be caught by path.isAbsolute on Unix
    if (/^[a-zA-Z]:\\/.test(filePath)) {
      throw new Error(`Path traversal detected: "${filePath}" is a Windows absolute path`);
    }
    
    // Check for mixed path separators that could be used for traversal
    if (filePath.includes('\\') && filePath.includes('/')) {
      throw new Error(`Path traversal detected: "${filePath}" contains mixed path separators`);
    }
    
    // Check for backslash-based traversal (even on Unix systems)
    if (filePath.includes('..\\')) {
      throw new Error(`Path traversal detected: "${filePath}" contains Windows-style path traversal`);
    }
    
    // Check for URL encoded path traversal patterns (basic detection)
    if (filePath.includes('%2e%2e') || filePath.includes('%2f') || filePath.includes('%5c')) {
      // Don't decode, but be suspicious of encoded dots and slashes
      const suspiciousPattern = /%2e%2e(%2f|%5c)/i;
      if (suspiciousPattern.test(filePath)) {
        throw new Error(`Path traversal detected: "${filePath}" contains suspicious URL encoded patterns`);
      }
    }
    
    // Normalize path separators and resolve (convert backslashes to forward slashes on Unix)
    const normalizedPath = path.normalize(filePath.replace(/\\/g, '/'));
    const fullPath = path.resolve(this.rootPath!, normalizedPath);
    
    // Check if the resolved path is still within the workspace
    const relativePath = path.relative(this.rootPath!, fullPath);
    
    // If relative path starts with '..' or is absolute, it's outside workspace
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
      throw new Error(`Path traversal detected: "${filePath}" resolves outside workspace`);
    }
    
    return fullPath;
  }

  // =============================================================================
  // PATH OPERATIONS (relative to root)
  // =============================================================================

  /**
   * Joins paths relative to the root directory
   * @param paths - Path segments to join
   */
  public join(...paths: string[]): string {
    return path.join(...paths);
  }

  /**
   * Resolves paths relative to the root directory
   * @param paths - Path segments to resolve
   */
  public resolve(...paths: string[]): string {
    this.ensureRootPath();
    return path.resolve(this.rootPath!, ...paths);
  }

  /**
   * Gets relative path from root to target
   * @param targetPath - Target path (can be absolute or relative to root)
   */
  public relative(targetPath: string): string {
    this.ensureRootPath();
    const absoluteTarget = path.isAbsolute(targetPath) 
      ? targetPath 
      : path.join(this.rootPath!, targetPath);
    return path.relative(this.rootPath!, absoluteTarget);
  }

  /**
   * Gets the directory name of a path relative to root
   * @param filePath - Path relative to root
   */
  public dirname(filePath: string): string {
    this.ensureRootPath();
    const fullPath = path.join(this.rootPath!, filePath);
    const dir = path.dirname(fullPath);
    return path.relative(this.rootPath!, dir);
  }

  /**
   * Gets the base name of a path
   * @param filePath - Path relative to root
   * @param ext - Optional extension to remove
   */
  public basename(filePath: string, ext?: string): string {
    return path.basename(filePath, ext);
  }

  /**
   * Gets the extension of a path
   * @param filePath - Path relative to root
   */
  public extname(filePath: string): string {
    return path.extname(filePath);
  }

  /**
   * Parses a path into its components
   * @param filePath - Path relative to root
   */
  public parse(filePath: string): path.ParsedPath {
    return path.parse(filePath);
  }

  /**
   * Formats a path object into a string
   * @param pathObject - Path object to format
   */
  public format(pathObject: path.FormatInputPathObject): string {
    return path.format(pathObject);
  }

  // =============================================================================
  // SYNCHRONOUS FILE SYSTEM OPERATIONS (relative to root)
  // =============================================================================

  /**
   * Reads a file synchronously
   * @param filePath - Path relative to root
   * @param options - Read options
   */
  public readFileSync(filePath: string, options?: BufferEncoding | { encoding?: BufferEncoding; flag?: string }): string | Buffer {
    const fullPath = this.validateAndResolvePath(filePath);
    return fs.readFileSync(fullPath, options as any);
  }

  /**
   * Writes a file synchronously
   * @param filePath - Path relative to root
   * @param data - Data to write
   * @param options - Write options
   */
  public writeFileSync(filePath: string, data: string | Buffer, options?: fs.WriteFileOptions): void {
    const fullPath = this.validateAndResolvePath(filePath);
    // Ensure directory exists
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, data, options);
  }

  /**
   * Creates a directory synchronously
   * @param dirPath - Path relative to root
   * @param options - Directory creation options
   */
  public mkdirSync(dirPath: string, options?: fs.MakeDirectoryOptions): void {
    const fullPath = this.validateAndResolvePath(dirPath);
    fs.mkdirSync(fullPath, { recursive: true, ...options });
  }

  /**
   * Reads directory contents synchronously
   * @param dirPath - Path relative to root
   * @param options - Read directory options
   */
  public readdirSync(dirPath: string, options?: { encoding?: BufferEncoding; withFileTypes?: boolean }): string[] | fs.Dirent[] {
    const fullPath = this.validateAndResolvePath(dirPath);
    return fs.readdirSync(fullPath, options as any);
  }

  /**
   * Gets file/directory stats synchronously
   * @param filePath - Path relative to root
   */
  public statSync(filePath: string): fs.Stats {
    const fullPath = this.validateAndResolvePath(filePath);
    return fs.statSync(fullPath);
  }

  /**
   * Checks if file/directory exists synchronously
   * @param filePath - Path relative to root
   */
  public existsSync(filePath: string): boolean {
    try {
      const fullPath = this.validateAndResolvePath(filePath);
      return fs.existsSync(fullPath);
    } catch {
      // If path validation fails, file doesn't exist (or is invalid)
      return false;
    }
  }

  /**
   * Removes a file synchronously
   * @param filePath - Path relative to root
   */
  public unlinkSync(filePath: string): void {
    const fullPath = this.validateAndResolvePath(filePath);
    fs.unlinkSync(fullPath);
  }

  /**
   * Removes a directory synchronously
   * @param dirPath - Path relative to root
   * @param options - Remove directory options
   */
  public rmdirSync(dirPath: string, options?: fs.RmDirOptions): void {
    const fullPath = this.validateAndResolvePath(dirPath);
    fs.rmdirSync(fullPath, options);
  }

  /**
   * Copies a file synchronously
   * @param src - Source path relative to root
   * @param dest - Destination path relative to root
   * @param mode - Copy mode
   */
  public copyFileSync(src: string, dest: string, mode?: number): void {
    const srcPath = this.validateAndResolvePath(src);
    const destPath = this.validateAndResolvePath(dest);
    // Ensure destination directory exists
    const destDir = path.dirname(destPath);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(srcPath, destPath, mode);
  }

  /**
   * Renames/moves a file synchronously
   * @param oldPath - Old path relative to root
   * @param newPath - New path relative to root
   */
  public renameSync(oldPath: string, newPath: string): void {
    const oldFullPath = this.validateAndResolvePath(oldPath);
    const newFullPath = this.validateAndResolvePath(newPath);
    // Ensure destination directory exists
    const newDir = path.dirname(newFullPath);
    fs.mkdirSync(newDir, { recursive: true });
    fs.renameSync(oldFullPath, newFullPath);
  }

  // =============================================================================
  // ASYNCHRONOUS FILE SYSTEM OPERATIONS (relative to root)
  // =============================================================================

  /**
   * Reads a file asynchronously
   * @param filePath - Path relative to root
   * @param options - Read options
   */
  public async readFileAsync(filePath: string, options?: BufferEncoding | { encoding?: BufferEncoding; flag?: string }): Promise<string | Buffer> {
    const fullPath = this.validateAndResolvePath(filePath);
    return this.readFile(fullPath, options as any);
  }

  /**
   * Writes a file asynchronously
   * @param filePath - Path relative to root
   * @param data - Data to write
   * @param options - Write options
   */
  public async writeFileAsync(filePath: string, data: string | Buffer, options?: fs.WriteFileOptions): Promise<void> {
    const fullPath = this.validateAndResolvePath(filePath);
    // Ensure directory exists
    const dir = path.dirname(fullPath);
    await this.mkdir(dir, { recursive: true });
    return this.writeFile(fullPath, data, options);
  }

  /**
   * Creates a directory asynchronously
   * @param dirPath - Path relative to root
   * @param options - Directory creation options
   */
  public async mkdirAsync(dirPath: string, options?: fs.MakeDirectoryOptions): Promise<void> {
    const fullPath = this.validateAndResolvePath(dirPath);
    await this.mkdir(fullPath, { recursive: true, ...options });
  }

  /**
   * Reads directory contents asynchronously
   * @param dirPath - Path relative to root
   * @param options - Read directory options
   */
  public async readdirAsync(dirPath: string, options?: { encoding?: BufferEncoding; withFileTypes?: boolean }): Promise<string[] | fs.Dirent[]> {
    const fullPath = this.validateAndResolvePath(dirPath);
    return this.readdir(fullPath, options as any);
  }

  /**
   * Gets file/directory stats asynchronously
   * @param filePath - Path relative to root
   */
  public async statAsync(filePath: string): Promise<fs.Stats> {
    const fullPath = this.validateAndResolvePath(filePath);
    return this.stat(fullPath);
  }

  /**
   * Checks if file/directory exists asynchronously
   * @param filePath - Path relative to root
   */
  public async existsAsync(filePath: string): Promise<boolean> {
    try {
      const fullPath = this.validateAndResolvePath(filePath);
      await this.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Removes a file asynchronously
   * @param filePath - Path relative to root
   */
  public async unlinkAsync(filePath: string): Promise<void> {
    const fullPath = this.validateAndResolvePath(filePath);
    return this.unlink(fullPath);
  }

  /**
   * Removes a directory asynchronously
   * @param dirPath - Path relative to root
   * @param options - Remove directory options
   */
  public async rmdirAsync(dirPath: string, options?: fs.RmDirOptions): Promise<void> {
    const fullPath = this.validateAndResolvePath(dirPath);
    return this.rmdir(fullPath, options);
  }

  /**
   * Copies a file asynchronously
   * @param src - Source path relative to root
   * @param dest - Destination path relative to root
   * @param mode - Copy mode
   */
  public async copyFileAsync(src: string, dest: string, mode?: number): Promise<void> {
    const srcPath = this.validateAndResolvePath(src);
    const destPath = this.validateAndResolvePath(dest);
    // Ensure destination directory exists
    const destDir = path.dirname(destPath);
    await this.mkdir(destDir, { recursive: true });
    return this.copyFile(srcPath, destPath, mode);
  }

  /**
   * Renames/moves a file asynchronously
   * @param oldPath - Old path relative to root
   * @param newPath - New path relative to root
   */
  public async renameAsync(oldPath: string, newPath: string): Promise<void> {
    const oldFullPath = this.validateAndResolvePath(oldPath);
    const newFullPath = this.validateAndResolvePath(newPath);
    // Ensure destination directory exists
    const newDir = path.dirname(newFullPath);
    await this.mkdir(newDir, { recursive: true });
    return this.rename(oldFullPath, newFullPath);
  }

  // =============================================================================
  // UTILITY METHODS
  // =============================================================================

  /**
   * Checks if a path is within the workspace root
   * @param filePath - Path to check (can be absolute or relative)
   */
  public isWithinRoot(filePath: string): boolean {
    try {
      this.ensureRootPath();
      
      // Absolute paths are never within workspace (security check)
      if (path.isAbsolute(filePath)) {
        return false;
      }
      
      // Check for Windows-style absolute paths
      if (/^[a-zA-Z]:\\/.test(filePath)) {
        return false;
      }
      
      // Check for mixed path separators
      if (filePath.includes('\\') && filePath.includes('/')) {
        return false;
      }
      
      // Check for backslash-based traversal
      if (filePath.includes('..\\')) {
        return false;
      }
      
      // Check for suspicious URL encoded patterns
      if (filePath.includes('%2e%2e') || filePath.includes('%2f') || filePath.includes('%5c')) {
        const suspiciousPattern = /%2e%2e(%2f|%5c)/i;
        if (suspiciousPattern.test(filePath)) {
          return false;
        }
      }
      
      // Normalize and resolve the path (convert backslashes to forward slashes)
      const normalizedPath = path.normalize(filePath.replace(/\\/g, '/'));
      const absolutePath = path.resolve(this.rootPath!, normalizedPath);
      const relativePath = path.relative(this.rootPath!, absolutePath);
      
      return !relativePath.startsWith('..') && !path.isAbsolute(relativePath);
    } catch {
      return false;
    }
  }

  /**
   * Gets the absolute path for a relative workspace path
   * @param filePath - Path relative to root
   */
  public getAbsolutePath(filePath: string): string {
    this.ensureRootPath();
    return path.join(this.rootPath!, filePath);
  }

  /**
   * Recursively walks a directory and returns all file paths
   * @param dirPath - Directory path relative to root
   * @param options - Walk options
   */
  public async walkDirectory(
    dirPath: string = '', 
    options: { 
      includeDirs?: boolean; 
      filter?: (filePath: string, isDirectory: boolean) => boolean;
    } = {}
  ): Promise<string[]> {
    const { includeDirs = false, filter } = options;
    const results: string[] = [];
    
    const walk = async (currentPath: string): Promise<void> => {
      const items = await this.readdirAsync(currentPath, { withFileTypes: true }) as fs.Dirent[];
      
      for (const item of items) {
        const itemPath = path.join(currentPath, item.name);
        const shouldInclude = !filter || filter(itemPath, item.isDirectory());
        
        if (item.isDirectory()) {
          if (includeDirs && shouldInclude) {
            results.push(itemPath);
          }
          if (shouldInclude) {
            await walk(itemPath);
          }
        } else if (shouldInclude) {
          results.push(itemPath);
        }
      }
    };
    
    await walk(dirPath);
    return results;
  }

  // =============================================================================
  // GLOB OPERATIONS (relative to root)
  // =============================================================================

  /**
   * Find files matching a glob pattern
   * @param pattern - Glob pattern relative to root
   * @param options - Glob options
   */
  public async globAsync(pattern: string, options?: { ignore?: string[]; dot?: boolean }): Promise<string[]> {
    this.ensureRootPath();
    const fullPattern = path.join(this.rootPath!, pattern);
    const results = await globAsync(fullPattern, options);
    // Filter results to only include files within workspace
    return results
      .map((result: string) => path.relative(this.rootPath!, result))
      .filter((relativePath: string) => this.isWithinRoot(relativePath));
  }

  /**
   * Find files matching a glob pattern synchronously
   * @param pattern - Glob pattern relative to root
   * @param options - Glob options
   */
  public globSync(pattern: string, options?: { ignore?: string[]; dot?: boolean }): string[] {
    this.ensureRootPath();
    const fullPattern = path.join(this.rootPath!, pattern);
    const results = globCallback.sync(fullPattern, options);
    // Filter results to only include files within workspace
    return results
      .map((result: string) => path.relative(this.rootPath!, result))
      .filter((relativePath: string) => this.isWithinRoot(relativePath));
  }
}

// Export the singleton instance
export const workspace = Workspace.getInstance();
export default workspace;
