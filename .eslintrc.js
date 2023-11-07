module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Add any custom ESLint rules you want to use here
  },
};