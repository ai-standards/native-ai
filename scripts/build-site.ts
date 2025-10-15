import {workspace} from '@nativeai/workspace';

workspace.setRootPath(process.cwd());

async function main() {
    try {
        console.log('Starting site build...');
        
        buildDocs();
        await buildStorybook();
        await buildGatsby();
        
        console.log('Site build completed successfully!');
    } catch (error) {
        console.error('Site build failed:', error);
        process.exit(1);
    }
}

main();

function buildDocs() {
    // get the root readme
    workspace.copyFileSync('README.md', 'site/docs/index.md');

    // get package readmes
    const packageReadmes = workspace.globSync('packages/*/README.md');
    packageReadmes.forEach(pkg => {
        const destination = pkg.replace('packages', 'site/docs').replace('README.md', 'index.md');
        workspace.copyFileSync(pkg, destination);
    });
    
    const srcReadmes = workspace.globSync('packages/*/src/**/README.md');
    console.log(srcReadmes);


}

async function buildStorybook() {
    console.log('Building Storybook...');
    
    try {
        // Build Storybook in the UI package
        const uiPackagePath = 'packages/ui';
        const uiFullPath = workspace.resolve(uiPackagePath);
        
        console.log(`UI package path: ${uiFullPath}`);
        
        // Check if UI package exists
        if (!workspace.existsSync(uiPackagePath)) {
            throw new Error(`UI package not found at ${uiPackagePath}`);
        }
        
        // Check if package.json exists
        const packageJsonPath = workspace.join(uiPackagePath, 'package.json');
        if (!workspace.existsSync(packageJsonPath)) {
            throw new Error(`package.json not found at ${packageJsonPath}`);
        }
        
        // Check if Storybook script exists
        const packageJson = JSON.parse(workspace.readFileSync(packageJsonPath, 'utf-8') as string);
        if (!packageJson.scripts || !packageJson.scripts['build-storybook']) {
            throw new Error('build-storybook script not found in package.json');
        }
        
        console.log('Checking dependencies...');
        
        // First check if the UI package exists and has dependencies installed
        if (!workspace.existsSync(workspace.join(uiPackagePath, 'node_modules'))) {
            console.log('Installing dependencies in UI package...');
            const { execSync } = require('child_process');
            execSync('npm install', { 
                cwd: uiFullPath,
                stdio: 'inherit' 
            });
        }
        
        // Create public directory if it doesn't exist (Storybook expects this)
        const publicDir = workspace.join(uiPackagePath, 'public');
        if (!workspace.existsSync(publicDir)) {
            console.log('Creating public directory for Storybook...');
            workspace.mkdirSync(publicDir, { recursive: true });
        }
        
        console.log('Running Storybook build...');
        
        // Use the standard build command
        const { execSync } = require('child_process');
        execSync('npm run build-storybook', { 
            cwd: uiFullPath,
            stdio: 'inherit',
            env: { 
                ...process.env, 
                NODE_ENV: 'production' 
            }
        });
        
        // Copy Storybook static files to site/static/ui
        const storybookBuildPath = workspace.join(uiPackagePath, 'storybook-static');
        const siteUiPath = 'site/static/storybook';
        
        console.log(`Copying Storybook from ${storybookBuildPath} to ${siteUiPath}...`);
        
        // Ensure the site/static/ui directory exists
        workspace.mkdirSync(siteUiPath, { recursive: true });
        
        // Copy all Storybook files recursively
        copyDirectorySync(storybookBuildPath, siteUiPath);
        
        console.log('Storybook build and copy completed successfully!');
        
    } catch (error) {
        console.error('Error building Storybook:', error);
        throw error;
    }
}

function copyDirectorySync(src: string, dest: string) {
    // Create destination directory if it doesn't exist
    if (!workspace.existsSync(dest)) {
        workspace.mkdirSync(dest, { recursive: true });
    }
    
    // Get all items in source directory
    const items = workspace.readdirSync(src, { withFileTypes: true }) as import('fs').Dirent[];
    
    for (const item of items) {
        const srcPath = workspace.join(src, item.name);
        const destPath = workspace.join(dest, item.name);
        
        if (item.isDirectory()) {
            // Recursively copy subdirectory
            copyDirectorySync(srcPath, destPath);
        } else {
            // Copy file
            workspace.copyFileSync(srcPath, destPath);
        }
    }
}

async function buildGatsby() {
    console.log('Building Gatsby site...');
    
    try {
        const siteDir = 'site';
        const siteFullPath = workspace.resolve(siteDir);
        
        console.log(`Site directory: ${siteFullPath}`);
        
        // Check if site directory exists
        if (!workspace.existsSync(siteDir)) {
            throw new Error(`Site directory not found at ${siteDir}`);
        }
        
        // Check if package.json exists
        const packageJsonPath = workspace.join(siteDir, 'package.json');
        if (!workspace.existsSync(packageJsonPath)) {
            throw new Error(`package.json not found at ${packageJsonPath}`);
        }
        
        console.log('Installing Gatsby dependencies...');
        
        // Install dependencies if node_modules doesn't exist
        if (!workspace.existsSync(workspace.join(siteDir, 'node_modules'))) {
            const { execSync } = require('child_process');
            execSync('npm install', { 
                cwd: siteFullPath,
                stdio: 'inherit' 
            });
        }
        
        console.log('Building Gatsby site...');
        
        // Build the Gatsby site
        const { execSync } = require('child_process');
        execSync('npm run build', { 
            cwd: siteFullPath,
            stdio: 'inherit',
            env: { 
                ...process.env, 
                NODE_ENV: 'production' 
            }
        });
        
        console.log('Gatsby build completed successfully!');
        
    } catch (error) {
        console.error('Error building Gatsby site:', error);
        throw error;
    }
}