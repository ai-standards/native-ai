/// <reference types="vite/client" />

declare global {
  interface Window {
    electronAPI: {
      // Define any electron APIs exposed via preload script
    }
  }
}