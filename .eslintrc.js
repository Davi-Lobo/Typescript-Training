module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
    }
}
