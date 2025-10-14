# Native AI Electron App

A minimal Electron application built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js (version 16 or higher)
- npm

## Installation

1. Clone or navigate to this project directory
2. Install dependencies:

```bash
npm install
```

## Development

To run the app in development mode:

```bash
npm run electron:dev
```

This will start the Vite development server and launch the Electron app. The app will automatically reload when you make changes to the code.

## Building

To build the app for production:

```bash
npm run build
```

To build and package the app as a distributable:

```bash
npm run electron:build
```

The packaged app will be available in the `release` directory.

## Project Structure

- `src/` - React application source code
- `electron/` - Electron main process and preload scripts
- `dist/` - Built web application
- `dist-electron/` - Built Electron scripts
- `release/` - Packaged application files

## Technologies

- **Electron** - Desktop app framework
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework