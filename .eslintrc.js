module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base',
  ],
  globals: {
    EventListener: true,
    ParentNode: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',

    'max-len': ['error', {
      code: 100,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    'import/prefer-default-export': 'off',
    'no-mixed-operators': 'error', // 禁止混合无分界使用不同操作符
    'no-underscore-dangle': 0,
  },
};
