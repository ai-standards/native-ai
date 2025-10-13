# Electron + React + TypeScript + Vite + Tailwind CSS# Native AI Example - React + TypeScript + Vite + Electron



A minimal starter template for building desktop applications with modern web technologies.A minimal Hello World application built with React, TypeScript, Vite, and Electron.



## Features## Features



- ⚡ **Vite** - Fast build tool and dev server- ⚛️ React 18 with TypeScript

- ⚛️ **React 18** - Modern React with hooks- ⚡ Vite for fast development

- 🔷 **TypeScript** - Type safety and better developer experience- 🖥️ Electron for desktop app capabilities

- 🎨 **Tailwind CSS** - Utility-first CSS framework- 🎨 Modern UI with gradient backgrounds and glassmorphism effects

- 📦 **Electron** - Build cross-platform desktop apps- 🔧 Hot reload in development mode



## Getting Started## Getting Started



### Prerequisites### Prerequisites



Make sure you have Node.js (version 16 or higher) installed on your system.- Node.js (version 16 or higher)

- npm

### Installation

### Installation

1. Install dependencies:

```bash1. Install dependencies:

npm install```bash

```npm install

```

### Development

### Development

1. Start the development server:

```bashTo run the app in development mode:

npm run electron:dev

``````bash

# Start both Vite dev server and Electron

This will start both the Vite dev server and launch the Electron app in development mode with hot reloading.npm run electron:dev

```

### Building for Production

This will:

1. Build the application:1. Start the Vite development server on http://localhost:5173

```bash2. Launch Electron with hot reload enabled

npm run build3. Open developer tools automatically

```

### Building

2. Package the app for distribution:

```bashTo build the application:

npm run electron:pack

``````bash

# Build both renderer and main processes

## Project Structurenpm run build



```# Or use the build script

├── electron/           # Electron main process fileschmod +x build.sh

│   ├── main.ts        # Main process entry point./build.sh

│   ├── preload.ts     # Preload script for secure context bridge```

│   └── util.ts        # Utility functions

├── src/               # React application source### Running Production Build

│   ├── App.tsx        # Main React component

│   ├── main.tsx       # React entry pointAfter building, you can run the production version:

│   ├── index.css      # Tailwind CSS imports

│   └── vite-env.d.ts  # TypeScript declarations```bash

├── index.html         # HTML templatenpm run electron

├── package.json       # Dependencies and scripts```

├── tsconfig.json      # TypeScript configuration

├── vite.config.ts     # Vite configuration### Creating Distributable

├── tailwind.config.js # Tailwind CSS configuration

└── postcss.config.js  # PostCSS configurationTo create a distributable package:

```

```bash

## Available Scriptsnpm run dist

```

- `npm run dev` - Start Vite dev server only

- `npm run build` - Build for production## Project Structure

- `npm run preview` - Preview production build

- `npm run electron:dev` - Start development with Electron```

- `npm run electron:pack` - Package app for distributionexample/

- `npm run electron:build` - Build and package for production├── electron/          # Electron main process

│   ├── main.ts        # Main Electron process

## Customization│   └── preload.ts     # Preload script

├── src/               # React application

- **Styling**: Edit `src/App.tsx` and use Tailwind CSS classes│   ├── App.tsx        # Main React component

- **Electron**: Modify `electron/main.ts` for window configuration and app behavior│   ├── App.css        # Styles

- **Build**: Configure `electron-builder` options in `package.json` under the `build` section│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles
├── dist/              # Built files
│   ├── main/          # Built Electron main process
│   └── renderer/      # Built React app
└── package.json       # Dependencies and scripts
```

## Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run electron` - Run Electron app
- `npm run electron:dev` - Run in development mode with hot reload
- `npm run dist` - Create distributable package

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Electron** - Desktop app framework
- **CSS3** - Styling with modern effects