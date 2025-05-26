/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-primary': '#1e2a4a',
        'navy-dark': '#162038',
        'navy-light': '#2a3a5a',
        'gold': '#f5cda1',
        'gold-accent': '#e6b886',
        'gold-light': '#fef3e2',
      },
      fontFamily: {
        'chinese': ['Noto Serif TC', 'serif'],
        'primary': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 