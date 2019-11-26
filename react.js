const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const eslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': ERROR,
    'curly': [ERROR, 'all'],
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, { allowPattern: '_' }],
    'eqeqeq': [ERROR, 'allow-null'],
    'no-else-return': [ERROR, {allowElseIf: false}],
    'no-multi-spaces': ERROR,
    'no-useless-return': ERROR,
    'no-process-env': ERROR,
    'no-process-exit': ERROR,
    // Stylistic Issues
    'block-spacing': WARN,
    'brace-style': [WARN, '1tbs', { allowSingleLine: true }],
    'comma-dangle': [WARN, 'never'],
    'comma-spacing': WARN,
    'comma-style': [WARN, 'last'],
    'computed-property-spacing': WARN,
    'eol-last': WARN,
    'func-call-spacing': WARN,
    'indent': [WARN, 2, { SwitchCase: 1 }],
    'jsx-quotes': [WARN, 'prefer-double'],
    'linebreak-style': [WARN, 'unix'],
    'no-trailing-spaces': WARN,
    'semi': [ERROR, 'always'],
    'semi-spacing': [WARN, { before: false, after: true }],
    'semi-style': [WARN, 'last']
  }
};

module.exports = eslintConfig;