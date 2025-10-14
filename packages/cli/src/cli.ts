#!/usr/bin/env node

import { Command } from 'commander';
import { blue, green, yellow, cyan, bold, dim } from 'colorette';
import { handleAdd, handleNew } from './commands';

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
  .action(handleAdd);

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
  .action(handleNew);

// Parse command line arguments
if (require.main === module) {
  program.parse();
}

export { program };