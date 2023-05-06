module.exports = {
    root: true,
    extends: ['airbnb'], 
    parser: '@babel/eslint-parser', 
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Add your custom rules here
    },
  };
  