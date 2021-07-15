const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      pink: colors.pink,
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
