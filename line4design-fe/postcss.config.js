const tailwindcss = require('tailwindcss');

module.exports = () => {
  return {
    include: ['node_modules'],
    plugins: [
      tailwindcss('./tailwind.js'),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-autoreset')({
        reset: {},
      }),
      require('postcss-hexrgba'),
      require('autoprefixer'),
      require('postcss-preset-env'),
    ],
  };
};
