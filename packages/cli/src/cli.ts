#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';
import { blue, green, yellow, cyan, bold, dim } from 'colorette';

interface PackageJson {
  name: string;
  version: string;
  description: string;
  main: string;
  scripts: Record<string, string>;
  keywords: string[];
  author: string;
  license: string;
  dependencies: Record<string, string>;
}

const program = new Command();

// Custom help formatter
program.configureHelp({
  formatHelp: (cmd, helper) => {
    const termWidth = helper.padWidth(cmd, helper);
    const helpWidth = helper.helpWidth || 80;
    
    let output = '';
    
    // Header
    output += `\n${bold(blue('Native AI CLI'))}\n`;
    output += `${dim('Command line interface for native AI applications')}\n\n`;
    
    // Usage
    output += `${bold('Usage:')}\n`;
    output += `  ${green('nativeai')} ${cyan('[options]')} ${cyan('[command]')}\n\n`;
    
    // Commands
    const commands = cmd.commands;
    if (commands.length > 0) {
      output += `${bold('Commands:')}\n`;
      commands.forEach(command => {
        const aliases = command.aliases().length > 0 ? `, ${command.aliases().join(', ')}` : '';
        const nameWithAliases = `${command.name()}${aliases}`;
        output += `  ${green(nameWithAliases.padEnd(15))} ${dim(command.description())}\n`;
      });
      output += '\n';
    }
    
    // Options
    const globalOptions = cmd.options.filter(o => o.flags !== '-h, --help');
    if (globalOptions.length > 0) {
      output += `${bold('Options:')}\n`;
      globalOptions.forEach(option => {
        output += `  ${cyan(option.flags.padEnd(15))} ${dim(option.description)}\n`;
      });
      output += `  ${cyan('-h, --help'.padEnd(15))} ${dim('display help for command')}\n\n`;
    }
    
    // Examples
    output += `${bold('Examples:')}\n`;
    output += `  ${dim('# Create a new project with interactive setup')}\n`;
    output += `  ${green('nativeai new')} ${yellow('my-project')}\n`;
    output += `  ${green('nativeai n')} ${yellow('my-project')}\n\n`;
    
    output += `  ${dim('# Add packages to existing project')}\n`;
    output += `  ${green('nativeai add')} ${yellow('ui')}\n`;
    output += `  ${green('nativeai a')} ${yellow('core')}\n\n`;
    
    output += `  ${dim('# Get help for specific commands')}\n`;
    output += `  ${green('nativeai help')} ${yellow('new')}\n`;
    output += `  ${green('nativeai new')} ${yellow('--help')}\n\n`;
    
    // Footer
    output += `${dim('For more information, visit:')} ${blue('https://github.com/ai-standards/nativeai')}\n`;
    
    return output;
  }
});

program
  .name('nativeai')
  .description('Command line interface for native AI')
  .version('0.9.1');

program
  .command('add <package>')
  .alias('a')
  .description('Add a native AI package to your project')
  .helpOption('-h, --help', 'show help for add command')
  .addHelpText('after', `
${bold('Examples:')}
  ${green('nativeai add ui')}        ${dim('Add UI components package')}
  ${green('nativeai a core')}       ${dim('Add core functionality (alias)')}
  ${green('nativeai add workspace')} ${dim('Add workspace management')}

${bold('Available Packages:')}
  ${cyan('ui')}        - React UI components library
  ${cyan('core')}      - Core native AI functionality  
  ${cyan('ai')}        - AI engine and models
  ${cyan('utils')}     - Utility functions and helpers
  ${cyan('workspace')} - Workspace management tools
`)
  .action(async (packageName: string) => {
    const availablePackages = ['ui', 'core', 'ai', 'utils', 'workspace'];
    
    if (!availablePackages.includes(packageName)) {
      console.error(`${bold('Error:')} Unknown package: ${yellow(packageName)}`);
      console.log(`\n${bold('Available packages:')} ${availablePackages.map(p => cyan(p)).join(', ')}`);
      console.log(`\n${dim('Use')} ${green('nativeai help add')} ${dim('for more information.')}`);
      return;
    }

    const spinner = ora(`Installing ${cyan(`@nativeai/${packageName}`)}...`).start();
    
    try {
      const { spawn } = require('child_process');
      
      await new Promise<void>((resolve, reject) => {
        const npmInstall = spawn('npm', ['install', `@nativeai/${packageName}`], {
          stdio: 'inherit',
          shell: true
        });

        npmInstall.on('close', (code: number) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`npm install failed with code ${code}`));
          }
        });

        npmInstall.on('error', reject);
      });
      
      spinner.succeed(`Successfully installed ${green(`@nativeai/${packageName}`)}!`);
      console.log(`\n${dim('Package added to your project. You can now import it:')}`);
      console.log(`${cyan(`import { ... } from '@nativeai/${packageName}';`)}`);
    } catch (error) {
      spinner.fail(`Failed to install ${cyan(`@nativeai/${packageName}`)}`);
      console.error(`${bold('Error:')} ${error}`);
    }
  });

program
  .command('new [path]')
  .alias('n')
  .description('Create a new native AI project')
  .helpOption('-h, --help', 'show help for new command')
  .addHelpText('after', `
${bold('Examples:')}
  ${green('nativeai new')}              ${dim('Create project in current directory')}
  ${green('nativeai n my-app')}         ${dim('Create project in ./my-app directory')}
  ${green('nativeai new /path/to/app')} ${dim('Create project at specific path')}

${bold('What this does:')}
  • Creates project directory (if needed)
  • Generates package.json with your selections
  • Installs chosen native AI packages
  • Sets up basic project structure
`)
  .action(async (projectPath?: string) => {
    const fs = require('fs');
    const path = require('path');
    
    // Use current directory if no path provided
    const targetPath = projectPath ? path.resolve(projectPath) : process.cwd();
    const projectName = projectPath ? path.basename(targetPath) : path.basename(process.cwd());

    try {
      // Create directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
        console.log(`${green('Created directory:')} ${cyan(targetPath)}`);
      }

      // Check if package.json already exists
      const packageJsonPath = path.join(targetPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const { overwrite } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'overwrite',
            message: 'package.json already exists. Overwrite?',
            default: false
          }
        ]);

        if (!overwrite) {
          console.log(`${yellow('Warning:')} Operation cancelled.`);
          return;
        }
      }

      // Prompt for packages to install
      const { selectedPackages } = await inquirer.prompt([
        {
          type: 'checkbox',
          name: 'selectedPackages',
          message: 'Select native AI packages to install:',
          choices: [
            { name: '@nativeai/core - Core functionality', value: 'core' },
            { name: '@nativeai/ai - AI engine and models', value: 'ai' },
            { name: '@nativeai/ui - UI components', value: 'ui' },
            { name: '@nativeai/utils - Utility functions', value: 'utils' },
            { name: '@nativeai/workspace - Workspace management', value: 'workspace' }
          ]
        }
      ]);

      // Create package.json
      const packageJson: PackageJson = {
        name: projectName,
        version: '1.0.0',
        description: 'A native AI project',
        main: 'index.js',
        scripts: {
          test: 'echo "Error: no test specified" && exit 1'
        },
        keywords: ['ai', 'native'],
        author: '',
        license: 'MIT',
        dependencies: {}
      };

      // Add selected packages as dependencies
      selectedPackages.forEach((pkg: string) => {
        packageJson.dependencies[`@nativeai/${pkg}`] = '^0.9.1';
      });

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`${green('Created')} ${cyan('package.json')} in ${dim(targetPath)}`);

      // Install dependencies if any packages were selected
      if (selectedPackages.length > 0) {
        const packageList = selectedPackages.map((p: string) => cyan(p)).join(', ');
        const spinner = ora(`Installing ${packageList}...`).start();
        
        const { spawn } = require('child_process');
        
        await new Promise<void>((resolve, reject) => {
          const npmInstall = spawn('npm', ['install'], {
            cwd: targetPath,
            stdio: 'inherit',
            shell: true
          });

          npmInstall.on('close', (code: number) => {
            if (code === 0) {
              resolve();
            } else {
              reject(new Error(`npm install failed with code ${code}`));
            }
          });

          npmInstall.on('error', reject);
        });
        
        spinner.succeed(`Successfully installed ${green(selectedPackages.length.toString())} package(s)!`);
      }

      console.log(`\n${green('Project')} ${bold(cyan(`"${projectName}"`))} created successfully!`);
      if (projectPath) {
        console.log(`${dim('Navigate to your project:')} ${yellow(`cd ${projectPath}`)}`);
      }
      
      if (selectedPackages.length > 0) {
        console.log(`\n${dim('Next steps:')}`);
        console.log(`  • Start coding with your selected packages`);
        console.log(`  • Check the documentation at ${blue('https://github.com/ai-standards/nativeai')}`);
      }

    } catch (error) {
      console.error(`${bold('Error:')} Failed to create project`);
      console.error(`${error}`);
    }
  });

// MCP Commands
const mcpCommand = program
  .command('mcp')
  .description('Model Context Protocol server management');

mcpCommand
  .command('start [server]')
  .description('Start MCP server (defaults to core)')
  .action(async (server?: string) => {
    const { loadMCPConfig } = await import('./mcp.js');
    const config = loadMCPConfig();
    const targetServer = server || 'core';
    
    if (!config.servers[targetServer]) {
      console.error(`${bold('Error:')} Unknown server: ${targetServer}`);
      console.log(`Available servers: ${Object.keys(config.servers).join(', ')}`);
      return;
    }
    
    const serverConfig = config.servers[targetServer];
    if (!serverConfig.enabled) {
      console.error(`${bold('Error:')} Server ${targetServer} is disabled`);
      return;
    }
    
    const spinner = ora(`Starting ${targetServer} MCP server...`).start();
    
    // Simulate server startup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    spinner.succeed(`${green('✓')} ${targetServer} MCP server started on port ${serverConfig.port}`);
    console.log(`  ${dim('Description:')} ${serverConfig.description}`);
    console.log(`  ${dim('Tools:')} Available for ${serverConfig.description}`);
    console.log(`\n${dim('Note:')} This is a placeholder implementation. Full MCP server coming soon!`);
  });

mcpCommand
  .command('stop [server]')
  .description('Stop MCP server (defaults to core)')
  .action(async (server?: string) => {
    const targetServer = server || 'core';
    const spinner = ora(`Stopping ${targetServer} MCP server...`).start();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    spinner.succeed(`${green('✓')} ${targetServer} MCP server stopped`);
  });

mcpCommand
  .command('list')
  .description('List available MCP servers')
  .action(async () => {
    const { loadMCPConfig } = await import('./mcp.js');
    const config = loadMCPConfig();
    
    console.log(`${bold('Available MCP Servers:')}`);
    console.log('━'.repeat(50));
    
    Object.values(config.servers).forEach((server: any) => {
      const status = server.enabled ? green('✓') : yellow('✗');
      console.log(`${status} ${bold(server.name.toUpperCase())}`);
      console.log(`  ${dim('Description:')} ${server.description}`);
      console.log(`  ${dim('Port:')} ${server.port}`);
      console.log('');
    });
  });

mcpCommand
  .command('tools [server]')
  .description('List available tools (optionally for a specific server)')
  .action(async (server?: string) => {
    const { getServerTools } = await import('./mcp.js');
    const tools = getServerTools();
    
    if (server) {
      const serverTools = tools[server as keyof typeof tools];
      if (serverTools) {
        console.log(`${bold(`Tools for ${server} server:`)}`);
        console.log('━'.repeat(30));
        serverTools.forEach(tool => console.log(`${green('•')} ${tool}`));
      } else {
        console.error(`${bold('Error:')} Unknown server: ${server}`);
        console.log(`Available servers: ${Object.keys(tools).join(', ')}`);
      }
    } else {
      console.log(`${bold('Available Tools by Server:')}`);
      console.log('━'.repeat(50));
      Object.entries(tools).forEach(([serverName, toolList]) => {
        console.log(`\n${bold(serverName.toUpperCase())}:`);
        toolList.forEach(tool => console.log(`  ${green('•')} ${tool}`));
      });
    }
  });

mcpCommand
  .command('config')
  .description('Display MCP configuration')
  .action(async () => {
    const { loadMCPConfig } = await import('./mcp.js');
    const config = loadMCPConfig();
    
    console.log(`${bold('MCP Configuration:')}`);
    console.log('━'.repeat(50));
    console.log(JSON.stringify(config, null, 2));
  });

// Parse command line arguments
if (require.main === module) {
  program.parse();
}

export { program };