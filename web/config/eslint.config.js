module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest-dom',
    'react',
    'testing-library'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    semi: 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  ignorePatterns: ['**/hooks/graphql.tsx']
};
