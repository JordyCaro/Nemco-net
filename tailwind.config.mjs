/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF9F6B',
          DEFAULT: '#FF7F40',
          dark: '#FF5F15'
        },
        secondary: {
          light: '#6BE3FF',
          DEFAULT: '#40D9FF',
          dark: '#15CFFF'
        },
        accent: {
          light: '#B66BFF',
          DEFAULT: '#9940FF',
          dark: '#7C15FF'
        },
        success: {
          light: '#6BFFB0',
          DEFAULT: '#40FF8C',
          dark: '#15FF68'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true
  }
}