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
    // https://www.jetbrains.com/help/webstorm/eslint.html#ws_eslint_linting_typescript_files_with_eslint
    // webstorm 必须在最外层显示配置 parser
    plugins: [
        '@typescript-eslint'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    }
};
