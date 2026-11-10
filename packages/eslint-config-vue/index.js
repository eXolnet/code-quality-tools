const configBase = require('@exolnet/eslint-config-base');
const pluginVue = require('eslint-plugin-vue');

module.exports = [
    ...configBase,
    ...pluginVue.configs['flat/recommended'],
    {

        rules: {
            'vue/component-definition-name-casing': 'off',
            'vue/require-v-for-key': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/max-attributes-per-line' : 'off',
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            'indent': 'off',
            'vue/script-indent': ['error', 4, {
                baseIndent: 1,
                switchCase: 1,
            }],
        },
    },
];
