const js = require('@eslint/js');
const esLintGlobals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...esLintGlobals.node,
                ...Object.keys(esLintGlobals.browser).filter((objKey)=>{
                    objKey !== 'AudioWorkletGlobalScope ';
                }),
            },
        },

        rules: {
            'array-bracket-spacing': ['error', 'never'],
            'brace-style': ['error', '1tbs'],
            'comma-dangle': ['error', 'always-multiline'],
            'comma-style': ['error', 'last'],
            'eqeqeq': ['error', 'always'],
            'indent': ['error', 4, {
                'SwitchCase': 1,
            }],
            'linebreak-style': ['error', 'unix'],
            'keyword-spacing': 'error',
            'prefer-const': 'error',
            'new-parens': 'error',
            'no-case-declarations': 'off',
            'no-const-assign': 'error',
            'no-unused-vars': ['error', { 'args': 'none' }],
            'no-whitespace-before-property': 'error',
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'space-before-blocks': 'error',
            'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
            'space-in-parens': ['error', 'never'],
            'space-infix-ops': 'error',
            'strict': ['error', 'never'],
        },
    },
];
