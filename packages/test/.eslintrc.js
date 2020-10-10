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
  }
};
