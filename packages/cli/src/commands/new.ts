import inquirer from 'inquirer';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { bold, green, yellow, cyan, dim, blue } from 'colorette';

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

interface TemplateConfig {
  name: string;
  description: string;
  files: string[];
}

export async function handleNew(projectPath?: string): Promise<void> {
  try {
    // Use current directory if no path provided
    const targetPath = projectPath ? path.resolve(projectPath) : process.cwd();
    const projectName = projectPath ? path.basename(targetPath) : path.basename(process.cwd());

    // Check if the target directory exists and is not empty
    if (fs.existsSync(targetPath)) {
      const files = fs.readdirSync(targetPath);
      if (files.length > 0) {
        const { action } = await inquirer.prompt([
          {
            type: 'list',
            name: 'action',
            message: `Directory ${cyan(targetPath)} is not empty. What would you like to do?`,
            choices: [
              { name: 'Create a new subdirectory for the project', value: 'subdir' },
              { name: 'Continue and create project in current directory', value: 'continue' },
              { name: 'Cancel', value: 'cancel' }
            ]
          }
        ]);

        if (action === 'cancel') {
          console.log(`${yellow('Operation cancelled.')}`);
          return;
        } else if (action === 'subdir') {
          const { subdirName } = await inquirer.prompt([
            {
              type: 'input',
              name: 'subdirName',
              message: 'Enter subdirectory name:',
              default: projectName
            }
          ]);
          const newTargetPath = path.join(targetPath, subdirName);
          return handleNew(newTargetPath);
        }
      }
    } else {
      // Create the directory if it doesn't exist
      fs.mkdirSync(targetPath, { recursive: true });
      console.log(`${green('Created directory:')} ${cyan(targetPath)}`);
    }

    // Load the template configuration
    const templatePath = path.resolve(__dirname, '../../templates/core/template.json');
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found at ${templatePath}`);
    }

    const templateConfig: TemplateConfig = JSON.parse(fs.readFileSync(templatePath, 'utf-8'));
    console.log(`${dim('Using template:')} ${cyan(templateConfig.name)} - ${templateConfig.description}`);

    // Copy template files
    const spinner = ora('Copying template files...').start();
    const templateDir = path.dirname(templatePath);
    
    for (const file of templateConfig.files) {
      const sourcePath = path.join(templateDir, file);
      const destPath = path.join(targetPath, file);
      
      // Create directory if it doesn't exist
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy the file
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
      } else {
        spinner.warn(`Template file not found: ${file}`);
      }
    }
    
    spinner.succeed('Template files copied successfully!');

    // Update package.json with the project name
    const packageJsonPath = path.join(targetPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      packageJson.name = projectName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`${green('Updated')} ${cyan('package.json')} with project name: ${bold(projectName)}`);
    }

    // Update index.html with the project name
    const indexHtmlPath = path.join(targetPath, 'index.html');
    if (fs.existsSync(indexHtmlPath)) {
      let htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');
      htmlContent = htmlContent.replace(/\{\{title\}\}/g, projectName);
      fs.writeFileSync(indexHtmlPath, htmlContent);
      console.log(`${green('Updated')} ${cyan('index.html')} with project title: ${bold(projectName)}`);
    }

    // Run npm install
    console.log(`\n${dim('Installing dependencies...')}`);
    const installSpinner = ora('Running npm install...').start();
    
    await new Promise<void>((resolve, reject) => {
      const npmInstall = spawn('npm', ['install'], {
        cwd: targetPath,
        stdio: 'pipe',
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
    
    installSpinner.succeed('Dependencies installed successfully!');

    // Run npm run build
    console.log(`\n${dim('Building project...')}`);
    const buildSpinner = ora('Running npm run build...').start();
    
    await new Promise<void>((resolve, reject) => {
      const npmBuild = spawn('npm', ['run', 'build'], {
        cwd: targetPath,
        stdio: 'pipe',
        shell: true
      });

      npmBuild.on('close', (code: number) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`npm run build failed with code ${code}`));
        }
      });

      npmBuild.on('error', reject);
    });
    
    buildSpinner.succeed('Project built successfully!');

    // Start the development server
    console.log(`\n${green('🎉 Project')} ${bold(cyan(`"${projectName}"`))} ${green('created successfully!')}`);
    console.log(`\n${dim('Starting development server...')}`);
    
    const devSpinner = ora('Running npm run electron:dev...').start();
    
    const electronDev = spawn('npm', ['run', 'electron:dev'], {
      cwd: targetPath,
      stdio: 'inherit',
      shell: true,
      detached: true
    });

    devSpinner.succeed('Development server started!');
    
    console.log(`\n${dim('Next steps:')}`);
    if (projectPath) {
      console.log(`  • Navigate to your project: ${yellow(`cd ${projectPath}`)}`);
    }
    console.log(`  • The Electron app should now be running`);
    console.log(`  • Edit files in ${cyan('src/')} to start developing`);
    console.log(`  • Check the documentation at ${blue('https://github.com/ai-standards/nativeai')}`);
    
  } catch (error) {
    console.error(`\n${bold('Error:')} Failed to create project`);
    console.error(`${error}`);
    process.exit(1);
  }
}
