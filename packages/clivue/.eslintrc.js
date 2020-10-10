module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@lljj/eslint-config',
    '@lljj/eslint-config/vue',
    // '@vue/airbnb',
    // 'plugin:vue/essential',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/html-indent": [
      "error",
      4
    ],
    'vue/script-indent': [
      'error',
      4
    ]
  },
};
