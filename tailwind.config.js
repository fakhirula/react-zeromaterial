/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    navbar: {
      styles: {
        base: {
          navbar: {
            shadow: {
              boxShadow: "shadow-md",
            },
          }
        }
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'eerie': '#1A1A1A',
      // 'seagreen': '#43936c',
      // 'teal': '#045f50'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {},
  },
  plugins: [
  ],
});