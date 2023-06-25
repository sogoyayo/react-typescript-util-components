module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Additional rules or overrides specific to your project
    '@typescript-eslint/no-unused-vars': 'off', // Example: Show warning for unused variables
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Example: Disable explicit module boundary types
    'prettier/prettier': ['error', { singleQuote: true }], // Example: Enforce single quotes with Prettier
    'no-console': 'off', // Example: Allow usage of console.log
    // ... other rules or overrides
  },
};
