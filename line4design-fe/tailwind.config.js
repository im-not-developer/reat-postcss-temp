// const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-gray': '#e4e4e4',
      },
      height: {
        header: '3.5rem',
        'full-map': 'calc(100% - 3.5rem - 1.75rem)',
        footer: '1.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
