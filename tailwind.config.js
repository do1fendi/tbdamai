const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#202020',
      white: colors.white,
      darkGray: '#3F3F3F',
      lightGray: '#707070',
      yellow: '#FFDF6C',
      indigo: '#4B0082',
      red: colors.rose,
      neptune: '#80BEAF',
      sinbad: {
        500: '#B3DDD1',
        700: '#7ec5b1',
        900: '#5bb59c'
      },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        // sinbad: {
        //   300: '#173e43',
        // }
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
      textDecoration: ['active'],
    },
  },
  plugins: [],
}
