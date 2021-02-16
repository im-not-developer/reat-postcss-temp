module.exports = {
  include: [
    'node_modules',
  ],
  plugins: [
    {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 0,
      },
    },

    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-autoreset')({
        reset: {
          margin: 0,
          padding: 0,
          borderRadius: 0,
            color: 'var(--primary-text-color)',
            'font-size': 'var(--font-size)',
            'font-family': 'var(--font-family)',
            'background-color': 'var(--body-background-color)',
        },
    }),
    require('postcss-hexrgba'),
    require('autoprefixer'),
  ],
};