/** @format */

// /** @format */

// module.exports = config => {
//   require('react-app-rewire-postcss')(config, {
//     include: ['node_modules'],
//     plugins: [
//       require('postcss-import'),
//       require('postcss-nested'),
//       require('postcss-autoreset'),
//       require('postcss-hexrgba'),
//       require('autoprefixer')
//     ]
//   });

//   return config;
// };
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1
    }),
    require('postcss-nesting'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
};
