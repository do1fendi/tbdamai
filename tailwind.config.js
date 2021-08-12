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
      backgroundImage: theme => ({
        'tombak-pattern': "url('https://api.tbdamai.net/images/coran/B1/B1.jpg')",
        'hewan-pattern': "url('https://api.tbdamai.net/images/coran/Singa-Kecil/Singa-Kecil.jpg')",
        'lainnya-pattern': "url('https://api.tbdamai.net/images/coran/0821/0821.jpg')"
      })
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
