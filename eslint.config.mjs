import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: 'babel-eslint',  // or 'espree' for default
  extends: ['next', 'eslint:recommended'],
  rules: {
    // Your custom rules here
    'no-unused-vars': 'warn',
  },
});
