/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      "dark": "#121212",
      "dark-txt": "#ffffff",
      "light": "#ffffff",
      "light-txt": "#121212",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out',
        fadeOut: 'fadeOut 400ms ease-in',
        fadeIn: 'fadeIn 400ms ease-in',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' }, 
          '50%': { transform: 'rotate(5deg)' }
        },
        fadeOut: {
          '0%': { opacity: "100%"},
          '50%': { opacity: "50%"},
          '100%': { opacity: "0%"},
        },
        fadeIn: {
          '0%': { opacity: "0%"},
          '50%': { opacity: "50%"},
          '100%': { opacity: "100%"},
        },
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
