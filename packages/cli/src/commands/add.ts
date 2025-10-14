import ora from 'ora';
import { spawn } from 'child_process';
import { bold, green, yellow, cyan, dim } from 'colorette';

export async function handleAdd(packageName: string): Promise<void> {
  const availablePackages = ['ui', 'core', 'ai', 'utils', 'workspace'];
  
  if (!availablePackages.includes(packageName)) {
    console.error(`${bold('Error:')} Unknown package: ${yellow(packageName)}`);
    console.log(`\n${bold('Available packages:')} ${availablePackages.map(p => cyan(p)).join(', ')}`);
    console.log(`\n${dim('Use')} ${green('nativeai help add')} ${dim('for more information.')}`);
    return;
  }

  const spinner = ora(`Installing ${cyan(`@nativeai/${packageName}`)}...`).start();
  
  try {
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
}