const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [],
  theme: {
    colors: {
      ...colors,
      'prim-light': '#00A6ED',
      'prim-dark': '#0077B2',
    },
  },
};
