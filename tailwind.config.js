const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Space Mono"', 'sans-serif']
      }
    },
    colors: {
      black: colors.black,
      white: colors.white,
      blue: colors.lightBlue,
      gray: colors.coolGray
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
