module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'plugin:import/resolver'],
  'import/reslover': {
    typescipt: {},
  },
  rules: {
    'object-curly-newline': 0,
    'import/extensions': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
  },
};
