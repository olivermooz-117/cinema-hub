// tailwind.config.js
// This file configures Tailwind CSS for the Cinema Hub project
// Location: Project ROOT (same level as package.json)

/** @type {import('tailwindcss').Config} */
export default {
  // content: Tells Tailwind which files to scan for class names
  // Only scan these file types to save build time and avoid errors
  content: [
    "./index.html",                     // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",      // All React files in src folder and subfolders
  ],
  
  // theme: Customize Tailwind's default theme
  theme: {
    // extend: ADD new styles without removing Tailwind's defaults
    extend: {
      
      // ========== CUSTOM COLORS ==========
      colors: {
        // 'cinema' namespace - use like: bg-cinema-purple-primary
        'cinema': {
          
          // PURPLE FAMILY
          'purple': {
            primary: '#8B5CF6',    // Bright purple (main brand color)
            dark: '#4C1D95',        // Deep dark purple (for backgrounds)
            light: '#A78BFA',       // Light purple (for hover states)
            glow: '#7C3AED',        // Medium purple (for glow effects)
          },
          
          // BLACK FAMILY
          'black': {
            pure: '#000000',        // Pure black (darkest)
            dark: '#0A0A0A',        // Almost black (slightly lighter)
            card: '#111111',        // Card background color
            lighter: '#1A1A1A',     // Lightest black (for hover)
          },
          
          // WHITE FAMILY
          'white': {
            pure: '#FFFFFF',        // Pure white (brightest)
            off: '#F3F4F6',         // Off-white (slightly gray)
            muted: '#D1D5DB',       // Muted white/gray (secondary text)
          }
        }
      },
      
      // ========== CUSTOM FONTS ==========
      fontFamily: {
        // For headings (H1, H2, H3, etc.)
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        // For body text (paragraphs, etc.)
        'body': ['Inter', 'Poppins', 'sans-serif'],
        // For special text (showtimes, ticket info)
        'cinema': ['Montserrat', 'sans-serif'],
      },
      
      // ========== CUSTOM BACKGROUND GRADIENTS ==========
      backgroundImage: {
        // Purple gradient (diagonal)
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
        // Dark gradient (top to bottom)
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)',
        // Card gradient (diagonal, subtle)
        'gradient-card': 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
      },
      
      // ========== CUSTOM BOX SHADOWS ==========
      boxShadow: {
        // Small purple glow
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        // Large purple glow
        'purple-glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
        // Inner purple glow
        'purple-glow-inner': 'inset 0 0 20px rgba(139, 92, 246, 0.2)',
      },
      
      // ========== CUSTOM ANIMATIONS ==========
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      
      // ========== CUSTOM KEYFRAMES (for animations) ==========
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  
  // plugins: Add any Tailwind plugins here
  plugins: [],
}