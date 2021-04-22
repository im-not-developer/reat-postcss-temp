module.exports = () => {
  return {
    include: ['node_modules'],
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-autoreset')({
        reset: {
          'font-size': 'var(--font-size)',
          'font-family': 'var(--font-family)',
        },
      }),
      require('postcss-hexrgba'),
      require('autoprefixer'),
      // require('postcss-preset-env'),
    ],
  };
};
