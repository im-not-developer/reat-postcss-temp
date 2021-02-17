// module.exports =  {
//   root: true,
//   parser:  '@typescript-eslint/parser', 
//   extends:  [
//       'plugin:@typescript-eslint/recommended', 
//       'prettier/@typescript-eslint', 
//       'plugin:prettier/recommended',
//   ],
//   parserOptions:  {
//     ecmaVersion:  2018,
//     sourceType:  'module', 
//     ecmaFeatures:  {
//       jsx:  true,  
//     },
//   },
//   rules:  {
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto",
//         "singleQuote": true 
//       },
//     ],
//   },
//   settings:  {
    
//   },
// };

module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "react/jsx-uses-vars": "error"
  },
  "ignorePatterns": ["*.config.js"]
}

