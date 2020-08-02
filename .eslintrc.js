/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: { node: true },
  extends: ['ackama', 'ackama/@typescript-eslint'],
  ignorePatterns: ['!.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'error',
  }
};

module.exports = config;
