module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['babel'],
  rules: {
    // rules from babel plugin
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/flow-object-type': 'off',
    'babel/generator-star-spacing': ['warn', 'after'],
    'babel/new-cap': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/object-curly-spacing': ['warn', 'always'],
    'babel/object-shorthand': 'off',
    // possible errors
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['warn'],
    'no-extra-parens': ['warn'],
    'no-extra-semi': ['warn'],
    'no-func-assign': ['error'],
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-negated-in-lhs': ['error'],
    'no-obj-calls': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'use-isnan': ['error'],
    'valid-jsdoc': 'off',
    'valid-typeof': ['error'],
    // best practices
    'accessor-pairs': ['error'],
    'array-callback-return': 'off',
    'block-scoped-var': ['error'],
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': ['error', 'all'],
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowPattern: '_' }],
    'eqeqeq': ['error', 'allow-null'],
    'guard-for-in': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': 'off',
    'no-div-regex': ['error'],
    'no-else-return': ['error'],
    'no-empty-function': 'off',
    'no-empty-pattern': ['error'],
    'no-eq-null': 'off',
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error', { boolean: false }],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': 'off',
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': 'off',
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-native-reassign': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-return-assign': 'off',
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-labels': ['error'],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': 'off',
    'no-void': ['error'],
    'no-warning-comments': 'off',
    'no-with': ['error'],
    'radix': ['error'],
    'vars-on-top': 'off',
    'wrap-iife': ['error'],
    'yoda': ['error', 'never'],
    // strict mode
    'strict': ['error', 'never'],
    // variables
    'init-declarations': 'off',
    'no-catch-shadow': ['error'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'none', caughtErrors: 'all', caughtErrorsIgnorePattern: '^ignore' }],
    'no-use-before-define': ['error'],
    // node.js and commonjs
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': ['error', '^err'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['error'],
    'no-process-exit': ['error'],
    'no-restricted-modules': ['error'],
    'no-sync': 'off',
    // stylistic issues
    'array-bracket-spacing': 'off',
    'block-spacing': ['warn'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'camelcase': ['warn', { properties: 'never' }],
    'comma-spacing': ['warn'],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn'],
    'consistent-this': ['warn'],
    'eol-last': ['warn'],
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['warn'],
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': ['warn', { beforeBlockComment: true, beforeLineComment: false }],
    'max-depth': ['warn', 5],
    'max-len': ['warn', 120],
    'max-nested-callbacks': ['warn', 5],
    'max-params': ['warn', 5],
    'max-statements': ['warn', 50],
    'max-statements-per-line': 'off',
    'new-cap': 'off',
    'new-parens': ['warn'],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': ['warn'],
    'no-bitwise': ['warn'],
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn', false],
    'no-multiple-empty-lines': ['warn'],
    'no-negated-condition': 'off',
    'no-nested-ternary': ['warn'],
    'no-new-object': ['warn'],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-spaced-func': ['warn'],
    'no-ternary': 'off',
    'no-trailing-spaces': ['warn'],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-whitespace-before-property': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': ['warn', 'after'],
    'padded-blocks': 'off',
    'quote-props': 'off',
    'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    'require-jsdoc': 'off',
    'semi': ['error'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'sort-imports': ['warn', { ignoreCase: true, ignoreMemberSort: false, memberSyntaxSortOrder: ['none','single','all','multiple'] }],
    'sort-vars': ['warn'],
    'space-before-blocks': ['warn'],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],
    'space-in-parens': ['warn'],
    'space-infix-ops': ['warn'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['warn', 'always', { exceptions: ['-'] }],
    'wrap-regex': 'off',
    // ECMAScript 6
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': ['warn', { before: true, after: true }],
    'constructor-super': ['warn'],
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'no-class-assign': ['error'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': ['error'],
    'no-new-symbol': ['error'],
    'no-restricted-imports': 'off',
    'no-this-before-super': ['error'],
    'no-useless-constructor': ['warn'],
    'no-var': ['warn'],
    'object-shorthand': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['warn', { destructuring: 'all' }],
    'prefer-reflect': ['error', { exceptions: ['delete'] }],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['warn'],
    'prefer-template': ['warn'],
    'require-yield': 'off',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['warn', { before: false, after: true }]
  }
};
