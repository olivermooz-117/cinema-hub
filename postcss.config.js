// postcss.config.js
// This file tells Vite how to process CSS
// Location: Project ROOT (same level as package.json)

export default {
  plugins: {
    tailwindcss: {},      // Process Tailwind CSS directives
    autoprefixer: {},     // Add browser prefixes automatically
  }
}
