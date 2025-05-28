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
      animation: {
        'book-open-left': 'bookOpenLeft 2.5s ease-in-out forwards',
        'book-open-right': 'bookOpenRight 2.5s ease-in-out forwards',
        'loading-progress': 'loadingProgress 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'content-reveal': 'contentReveal 1s ease-out 3s forwards',
        'book-close-to-open': 'bookCloseToOpen 2.5s ease-in-out forwards',
        'spine-glow': 'spineGlow 2s ease-in-out infinite',
      },
      keyframes: {
        bookOpenLeft: {
          '0%': { 
            transform: 'perspective(1200px) rotateY(-90deg)',
            opacity: '0.2'
          },
          '30%': { 
            transform: 'perspective(1200px) rotateY(-45deg)',
            opacity: '0.6'
          },
          '70%': { 
            transform: 'perspective(1200px) rotateY(-10deg)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'perspective(1200px) rotateY(0deg)',
            opacity: '1'
          }
        },
        bookOpenRight: {
          '0%': { 
            transform: 'perspective(1200px) rotateY(90deg)',
            opacity: '0.2'
          },
          '30%': { 
            transform: 'perspective(1200px) rotateY(45deg)',
            opacity: '0.6'
          },
          '70%': { 
            transform: 'perspective(1200px) rotateY(10deg)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'perspective(1200px) rotateY(0deg)',
            opacity: '1'
          }
        },
        loadingProgress: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'translateX(50%)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(200%)',
            opacity: '0.5'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        contentReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        bookCloseToOpen: {
          '0%': { 
            transform: 'perspective(1200px) rotateX(-5deg) scale(0.9)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'perspective(1200px) rotateX(-2deg) scale(0.95)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'perspective(1200px) rotateX(0deg) scale(1)',
            opacity: '1'
          }
        },
        spineGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(229, 184, 134, 0.3)',
            opacity: '0.8'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(229, 184, 134, 0.6)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
} 