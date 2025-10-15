# Storybook GitHub Pages Deployment

This repository is configured to automatically deploy the Storybook documentation to GitHub Pages.

## Setup Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/ai-standards/native-ai`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Workflow Triggers

The Storybook will be automatically built and deployed when:
- Code is pushed to `main` or `develop` branches
- Changes are made to files in `packages/ui/` directory

### 3. Access Your Deployed Site

Once deployed, your documentation site will be available at:
- **Main Site**: `https://ai-standards.github.io/native-ai/`
- **Storybook**: `https://ai-standards.github.io/native-ai/storybook/`

### 4. Manual Deployment (if needed)

You can also manually trigger a deployment by:
1. Going to the **Actions** tab in your repository
2. Selecting the **Deploy Storybook to GitHub Pages** workflow
3. Clicking **Run workflow**

## Local Development

To work with Storybook locally:

```bash
# Navigate to the UI package
cd packages/ui

# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

## Configuration

The deployment is configured through:
- `.github/workflows/deploy-storybook.yml` - GitHub Actions workflow
- `packages/ui/.storybook/main.ts` - Storybook configuration
- `packages/ui/package.json` - Build scripts

## Troubleshooting

### Build Fails
- Check that all dependencies are properly installed
- Ensure all component stories are valid
- Verify TypeScript compilation passes

### Assets Not Loading
- Check the base URL configuration in `main.ts`
- Ensure static assets are in the correct directory
- Verify the GitHub Pages source is set to "GitHub Actions"

### Permissions Issues
- Ensure the repository has GitHub Pages enabled
- Check that the workflow has the necessary permissions (should be automatic)

## Customization

To customize the deployment:
1. Edit `.github/workflows/deploy-storybook.yml` for workflow changes
2. Modify `packages/ui/.storybook/main.ts` for Storybook configuration
3. Update build scripts in `packages/ui/package.json` as needed