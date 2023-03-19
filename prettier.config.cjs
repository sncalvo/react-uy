/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
};

module.exports = config;
