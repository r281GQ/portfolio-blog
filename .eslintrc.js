module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ['airbnb-base', 'plugin:react/recommended', 'eslint:recommended'],
  rules: {
    'import/extensions': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn', { argsIgnorePattern: 'getState|payload' }],
    'import/no-unresolved': ['off'],
    'import/no-extraneous-dependencies': 'off',
    'react/display-name': ['off'],
    'react/prop-types': [
      'error',
      {
        ignore: [
          'meta',
          'submit',
          'pristine',
          'input',
          'invalid',
          'submitting',
          'handleSubmit',
          'initialize',
          'reset',
          'fields'
        ]
      }
    ],
    'no-console': ['warn'],
    'import/first': ['off']
  },
  settings: {
    'import/resolver': 'webpack'
  },
  globals: {
    __DEV__: true,
    fetch: true,
    graphql: true,
    document: true,
    window: true
  },
  env: {}
};
