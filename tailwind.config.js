const colors = require('tailwindcss/colors');

function removeDeprecated(tailwindColors) {
  const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...rest } = tailwindColors;
  return rest;
}
module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [],
  theme: {
    colors: {
      ...removeDeprecated(colors),
      'prim-light': '#00A6ED',
      'prim-dark': '#0077B2',
    },
  },
};
