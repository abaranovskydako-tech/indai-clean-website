import type { Config } from 'tailwindcss';

/**
 * INDAI Clean Design System Foundation
 * 
 * This configuration implements design tokens from Design System canons (v1.0.0).
 * 
 * Color tokens: INDAI_COLOR_PALETTE_CANON.md (v1.0.0)
 * Typography: INDAI_TYPOGRAPHY_CANON.md (v1.0.0)
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Color Palette Canon v1.0.0
        // Source: docs/00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_COLOR_PALETTE_CANON.md
        primary: {
          500: '#00B4D8', // Main brand — turquoise
        },
        ocean: {
          500: '#0077B6', // Secondary — ocean blue
        },
        accent: {
          500: '#FF9E1B', // CTAs — orange
        },
        dark: {
          500: '#023047', // Text — deep ocean
        },
        light: {
          200: '#F0F9FF', // Backgrounds — light blue
        },
      },
      fontFamily: {
        // Typography Canon v1.0.0
        // Source: docs/00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_TYPOGRAPHY_CANON.md
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;

