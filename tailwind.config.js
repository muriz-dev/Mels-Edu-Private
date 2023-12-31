/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{html,js}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: 'Open Sans',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
};
