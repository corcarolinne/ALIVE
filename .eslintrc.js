module.exports = {
  plugins: ['fp', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    expect: false,
    assert: false,
  },
  extends: [
    'airbnb',
    // "react-app",
    'plugin:fp/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    // 'fp/no-mutation': [
    //   'error',
    //   {
    //     commonjs: true,
    //     allowThis: true,
    //     exceptions: [{ property: 'propTypes' }, { property: 'defaultProps' }],
    //   },
    // ],
    // "semi": [
    //     "error",
    //     "always"
    // ],
    'max-len': [
      'error',
      130,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ], // 120 is the Jetbrains default
    'comma-dangle': 'off', // prevent this causes a lot of useless work and git diffs
    'no-nested-ternary': 'off',
    'react/forbid-prop-types': 'off',
    'fp/no-mutating-methods': 'off',
    'jsx-a11y/click-events-have-key-events': 'off', // necessary for accessibility
    'jsx-a11y/no-static-element-interactions': 'off', // necessary for accessibility
    'react/no-typos': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-unused-expression': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'draft'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-loops': 'off',
    'fp/no-let': 'off',
    'no-debugger': 'warn',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
  },
}
