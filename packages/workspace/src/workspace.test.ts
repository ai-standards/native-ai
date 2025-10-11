import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import workspace from '@/lib/workspace';

describe('Workspace', () => {
  let tempDir: string;

  beforeEach(() => {
    // Create a temporary directory for tests
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'workspace-test-'));
    workspace.setRootPath(tempDir);
  });

  afterEach(() => {
    // Clean up temporary directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  describe('Setup', () => {
    it('should set and get root path', () => {
      const testPath = '/test/path';
      workspace.setRootPath(testPath);
      expect(workspace.getRootPath()).toBe(path.resolve(testPath));
    });

    it('should throw error when root path not set', () => {
      const newWorkspace = (workspace as any).constructor.getInstance();
      newWorkspace.rootPath = null;
      expect(() => newWorkspace.getRootPath()).toThrow('Root path not set');
    });

    it('should reject sensitive system paths', () => {
      const sensitivePaths = [
        '/',
        '/usr',
        '/etc',
        '/bin',
        '/System',
        '/Library',
        '/Applications'
      ];

      for (const sensitivePath of sensitivePaths) {
        expect(() => workspace.setRootPath(sensitivePath))
          .toThrow(/Cannot set workspace root to sensitive system path/);
      }
    });

    it('should reject user home directory', () => {
      const homeDir = process.env.HOME || process.env.USERPROFILE;
      if (homeDir) {
        expect(() => workspace.setRootPath(homeDir))
          .toThrow(/Cannot set workspace root to user home directory/);
      }
    });

    it('should reject common user directories', () => {
      const homeDir = process.env.HOME || process.env.USERPROFILE;
      if (homeDir) {
        const commonDirs = ['Desktop', 'Documents', 'Downloads'];
        for (const dir of commonDirs) {
          const dirPath = path.join(homeDir, dir);
          expect(() => workspace.setRootPath(dirPath))
            .toThrow(/Cannot set workspace root to user directory.*Create a subdirectory instead/);
        }
      }
    });

    it('should allow safe project paths', () => {
      const homeDir = process.env.HOME || process.env.USERPROFILE;
      if (homeDir) {
        const safePath = path.join(homeDir, 'Documents', 'my-project');
        expect(() => workspace.setRootPath(safePath)).not.toThrow();
      }
    });
  });

  describe('Path Operations', () => {
    it('should join paths relative to root', () => {
      const result = workspace.join('config', 'app.json');
      expect(result).toBe('config/app.json');
    });

    it('should resolve paths relative to root', () => {
      const result = workspace.resolve('src', '..', 'config');
      expect(result).toBe(path.join(tempDir, 'config'));
    });

    it('should get relative path from root', () => {
      const absolutePath = path.join(tempDir, 'src', 'main.ts');
      const result = workspace.relative(absolutePath);
      expect(result).toBe('src/main.ts');
    });

    it('should get dirname relative to root', () => {
      const result = workspace.dirname('src/components/Button.tsx');
      expect(result).toBe('src/components');
    });

    it('should get basename', () => {
      expect(workspace.basename('src/main.ts')).toBe('main.ts');
      expect(workspace.basename('src/main.ts', '.ts')).toBe('main');
    });

    it('should get extension', () => {
      expect(workspace.extname('config.json')).toBe('.json');
    });
  });

  describe('Synchronous File Operations', () => {
    it('should write and read files', () => {
      const content = 'Hello, World!';
      workspace.writeFileSync('test.txt', content);
      
      const readContent = workspace.readFileSync('test.txt', 'utf8');
      expect(readContent).toBe(content);
    });

    it('should create directories', () => {
      workspace.mkdirSync('nested/deep/directory');
      expect(workspace.existsSync('nested/deep/directory')).toBe(true);
    });

    it('should check file existence', () => {
      expect(workspace.existsSync('nonexistent.txt')).toBe(false);
      
      workspace.writeFileSync('exists.txt', 'content');
      expect(workspace.existsSync('exists.txt')).toBe(true);
    });

    it('should list directory contents', () => {
      workspace.writeFileSync('file1.txt', 'content1');
      workspace.writeFileSync('file2.txt', 'content2');
      workspace.mkdirSync('subdir');
      
      const files = workspace.readdirSync('.');
      expect(files).toContain('file1.txt');
      expect(files).toContain('file2.txt');
      expect(files).toContain('subdir');
    });

    it('should get file stats', () => {
      const content = 'test content';
      workspace.writeFileSync('stats.txt', content);
      
      const stats = workspace.statSync('stats.txt');
      expect(stats.isFile()).toBe(true);
      expect(stats.size).toBe(content.length);
    });

    it('should copy files', () => {
      const content = 'copy me';
      workspace.writeFileSync('source.txt', content);
      
      workspace.copyFileSync('source.txt', 'copy.txt');
      
      const copiedContent = workspace.readFileSync('copy.txt', 'utf8');
      expect(copiedContent).toBe(content);
    });

    it('should rename/move files', () => {
      workspace.writeFileSync('old.txt', 'content');
      workspace.renameSync('old.txt', 'new.txt');
      
      expect(workspace.existsSync('old.txt')).toBe(false);
      expect(workspace.existsSync('new.txt')).toBe(true);
    });
  });

  describe('Asynchronous File Operations', () => {
    it('should write and read files async', async () => {
      const content = 'Async Hello!';
      await workspace.writeFileAsync('async.txt', content);
      
      const readContent = await workspace.readFileAsync('async.txt', 'utf8');
      expect(readContent).toBe(content);
    });

    it('should create directories async', async () => {
      await workspace.mkdirAsync('async/nested/dir');
      expect(await workspace.existsAsync('async/nested/dir')).toBe(true);
    });

    it('should check existence async', async () => {
      expect(await workspace.existsAsync('nonexistent.txt')).toBe(false);
      
      await workspace.writeFileAsync('async-exists.txt', 'content');
      expect(await workspace.existsAsync('async-exists.txt')).toBe(true);
    });

    it('should copy files async', async () => {
      const content = 'async copy';
      await workspace.writeFileAsync('async-source.txt', content);
      
      await workspace.copyFileAsync('async-source.txt', 'async-copy.txt');
      
      const copiedContent = await workspace.readFileAsync('async-copy.txt', 'utf8');
      expect(copiedContent).toBe(content);
    });
  });

  describe('Utility Methods', () => {
    it('should validate paths within root', () => {
      expect(workspace.isWithinRoot('src/file.ts')).toBe(true);
      expect(workspace.isWithinRoot('../outside.ts')).toBe(false);
      expect(workspace.isWithinRoot('/absolute/path.ts')).toBe(false);
    });

    it('should get absolute paths', () => {
      const result = workspace.getAbsolutePath('src/main.ts');
      expect(result).toBe(path.join(tempDir, 'src/main.ts'));
    });

    it('should walk directory tree', async () => {
      // Create test directory structure
      workspace.mkdirSync('src/components');
      workspace.writeFileSync('src/main.ts', 'main');
      workspace.writeFileSync('src/components/Button.tsx', 'button');
      workspace.writeFileSync('README.md', 'readme');

      const allFiles = await workspace.walkDirectory();
      expect(allFiles).toContain('src/main.ts');
      expect(allFiles).toContain('src/components/Button.tsx');
      expect(allFiles).toContain('README.md');

      // Test with filter - allow directories but only include .ts files (not .tsx)
      const tsFiles = await workspace.walkDirectory('', {
        filter: (filePath, isDirectory) => {
          // Always allow directories for recursion
          if (isDirectory) return true;
          // For files, only include .ts files but not .tsx
          return filePath.endsWith('.ts') && !filePath.endsWith('.tsx');
        }
      });
      
      expect(tsFiles).toContain('src/main.ts');
      expect(tsFiles).not.toContain('src/components/Button.tsx');
      expect(tsFiles).not.toContain('README.md');
    });
  });

  describe('Glob Operations', () => {
    beforeEach(() => {
      // Create test files for glob patterns
      workspace.mkdirSync('src/components');
      workspace.mkdirSync('src/utils');
      workspace.mkdirSync('tests');
      
      workspace.writeFileSync('src/main.ts', 'main');
      workspace.writeFileSync('src/app.tsx', 'app');
      workspace.writeFileSync('src/components/Button.tsx', 'button');
      workspace.writeFileSync('src/components/Input.tsx', 'input');
      workspace.writeFileSync('src/utils/helper.js', 'helper');
      workspace.writeFileSync('tests/main.test.ts', 'test');
      workspace.writeFileSync('package.json', '{}');
      workspace.writeFileSync('README.md', 'readme');
    });

    it('should find files with simple patterns', async () => {
      const tsFiles = await workspace.globAsync('**/*.ts');
      expect(tsFiles).toContain('src/main.ts');
      expect(tsFiles).toContain('tests/main.test.ts');
      expect(tsFiles).not.toContain('src/app.tsx');
    });

    it('should find files with complex patterns', async () => {
      const reactFiles = await workspace.globAsync('**/*.{ts,tsx}');
      expect(reactFiles).toContain('src/main.ts');
      expect(reactFiles).toContain('src/app.tsx');
      expect(reactFiles).toContain('src/components/Button.tsx');
      expect(reactFiles).not.toContain('src/utils/helper.js');
    });

    it('should work synchronously', () => {
      const jsonFiles = workspace.globSync('**/*.json');
      expect(jsonFiles).toContain('package.json');
    });

    it('should handle patterns in subdirectories', async () => {
      const componentFiles = await workspace.globAsync('src/components/*.tsx');
      expect(componentFiles).toContain('src/components/Button.tsx');
      expect(componentFiles).toContain('src/components/Input.tsx');
      expect(componentFiles).not.toContain('src/main.ts');
    });
  });

  describe('Path Traversal Security', () => {
    const maliciousPaths = [
      '../outside.txt',
      '../../etc/passwd',
      '../../../Windows/System32/config/SAM',
      '..\\..\\Windows\\System32\\drivers\\etc\\hosts',
      '/etc/passwd',
      'C:\\Windows\\System32\\config\\SAM',
      './../../sensitive.txt',
      'subdir/../../../escape.txt',
      'normal/../../../../../../etc/shadow'
    ];

    describe('File Read Operations', () => {
      maliciousPaths.forEach(maliciousPath => {
        it(`should prevent reading outside workspace: ${maliciousPath}`, async () => {
          // Even if the file exists, these should fail because path is outside workspace
          expect(() => workspace.readFileSync(maliciousPath)).toThrow();
          await expect(workspace.readFileAsync(maliciousPath)).rejects.toThrow();
          expect(() => workspace.statSync(maliciousPath)).toThrow();
          await expect(workspace.statAsync(maliciousPath)).rejects.toThrow();
        });
      });
    });

    describe('File Write Operations', () => {
      maliciousPaths.forEach(maliciousPath => {
        it(`should prevent writing outside workspace: ${maliciousPath}`, async () => {
          expect(() => workspace.writeFileSync(maliciousPath, 'malicious content')).toThrow();
          await expect(workspace.writeFileAsync(maliciousPath, 'malicious content')).rejects.toThrow();
        });
      });
    });

    describe('Directory Operations', () => {
      maliciousPaths.forEach(maliciousPath => {
        it(`should prevent directory operations outside workspace: ${maliciousPath}`, async () => {
          expect(() => workspace.mkdirSync(maliciousPath)).toThrow();
          await expect(workspace.mkdirAsync(maliciousPath)).rejects.toThrow();
          expect(() => workspace.readdirSync(maliciousPath)).toThrow();
          await expect(workspace.readdirAsync(maliciousPath)).rejects.toThrow();
        });
      });
    });

    describe('File System Modification Operations', () => {
      beforeEach(() => {
        // Create a test file to attempt operations on
        workspace.writeFileSync('test-file.txt', 'test content');
      });

      maliciousPaths.forEach(maliciousPath => {
        it(`should prevent copy operations outside workspace: ${maliciousPath}`, async () => {
          // Prevent copying TO outside workspace
          expect(() => workspace.copyFileSync('test-file.txt', maliciousPath)).toThrow();
          await expect(workspace.copyFileAsync('test-file.txt', maliciousPath)).rejects.toThrow();
          
          // Prevent copying FROM outside workspace
          expect(() => workspace.copyFileSync(maliciousPath, 'copied-file.txt')).toThrow();
          await expect(workspace.copyFileAsync(maliciousPath, 'copied-file.txt')).rejects.toThrow();
        });

        it(`should prevent rename/move operations outside workspace: ${maliciousPath}`, async () => {
          // Prevent moving TO outside workspace
          expect(() => workspace.renameSync('test-file.txt', maliciousPath)).toThrow();
          await expect(workspace.renameAsync('test-file.txt', maliciousPath)).rejects.toThrow();
          
          // Prevent moving FROM outside workspace
          expect(() => workspace.renameSync(maliciousPath, 'moved-file.txt')).toThrow();
          await expect(workspace.renameAsync(maliciousPath, 'moved-file.txt')).rejects.toThrow();
        });

        it(`should prevent delete operations outside workspace: ${maliciousPath}`, async () => {
          expect(() => workspace.unlinkSync(maliciousPath)).toThrow();
          await expect(workspace.unlinkAsync(maliciousPath)).rejects.toThrow();
          expect(() => workspace.rmdirSync(maliciousPath)).toThrow();
          await expect(workspace.rmdirAsync(maliciousPath)).rejects.toThrow();
        });
      });
    });

    describe('Glob Operations Security', () => {
      maliciousPaths.forEach(maliciousPath => {
        it(`should prevent glob patterns outside workspace: ${maliciousPath}`, async () => {
          // Glob operations should not return files outside workspace
          const syncResults = workspace.globSync(maliciousPath);
          const asyncResults = await workspace.globAsync(maliciousPath);
          
          // Results should be empty or only contain files within workspace
          syncResults.forEach(result => {
            expect(workspace.isWithinRoot(result)).toBe(true);
          });
          asyncResults.forEach(result => {
            expect(workspace.isWithinRoot(result)).toBe(true);
          });
        });
      });
    });

    describe('Utility Function Security', () => {
      it('should correctly identify paths outside workspace', () => {
        maliciousPaths.forEach(maliciousPath => {
          expect(workspace.isWithinRoot(maliciousPath)).toBe(false);
        });
      });

      it('should correctly identify safe paths within workspace', () => {
        const safePaths = [
          'file.txt',
          'dir/file.txt',
          'deep/nested/path/file.txt',
          './current/file.txt',
          'subdir/file.txt'
        ];

        safePaths.forEach(safePath => {
          expect(workspace.isWithinRoot(safePath)).toBe(true);
        });
      });
    });

    describe('Edge Cases', () => {
      it('should handle mixed path separators', () => {
        const mixedPaths = [
          '../..\\Windows\\System32',
          'normal/path\\..\\..\\escape',
          'dir\\..\\..\\outside.txt'
        ];

        mixedPaths.forEach(mixedPath => {
          expect(workspace.isWithinRoot(mixedPath)).toBe(false);
        });
      });

      it('should handle URL encoded path traversal attempts', () => {
        const suspiciousEncodedPaths = [
          '%2e%2e%2f%2e%2e%2fetc%2fpasswd',  // ../etc/passwd encoded
          '..%2f..%2fetc%2fpasswd',          // ../etc/passwd partially encoded
          '..%5c..%5cWindows%5cSystem32'     // ..\..\Windows\System32 partially encoded
        ];

        const safeEncodedPaths = [
          'file%20name.txt',    // space encoded
          'test%40file.txt',    // @ symbol encoded
          'normal%2Bfile.txt'   // + symbol encoded
        ];

        // Suspicious patterns should be blocked
        suspiciousEncodedPaths.forEach(encodedPath => {
          expect(workspace.isWithinRoot(encodedPath)).toBe(false);
        });

        // Safe encoded characters should be allowed
        safeEncodedPaths.forEach(encodedPath => {
          expect(workspace.isWithinRoot(encodedPath)).toBe(true);
        });
      });

      it('should handle null bytes and special characters', () => {
        const specialPaths = [
          'file\0.txt',
          '../file\0',
          'file\n.txt',
          'file\r.txt'
        ];

        specialPaths.forEach(specialPath => {
          // These may be invalid filenames but shouldn't cause security issues
          const isWithin = workspace.isWithinRoot(specialPath);
          expect(typeof isWithin).toBe('boolean');
        });
      });
    });
  });
});