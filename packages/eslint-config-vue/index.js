const configBase = require('@exolnet/eslint-config-base');
const pluginVue = require('eslint-plugin-vue');

module.exports = [
    ...configBase,
    ...pluginVue.configs['flat/recommended'],
    {

        rules: {
            'vue/component-definition-name-casing': 'off',
            'vue/require-v-for-key': 'off',
            'indent': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/max-attributes-per-line' : 'off',
        },
    },
];
