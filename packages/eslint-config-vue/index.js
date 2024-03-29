module.exports = {
    extends: [
        require.resolve('@exolnet/eslint-config-base'),
        'plugin:vue/vue3-recommended',
    ],

    plugins: ['vue'],

    rules: {
        'vue/component-definition-name-casing': 'off',
        'vue/require-v-for-key': 'off',
    },

    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            rules: {
                indent: 'off',
                'vue/html-indent': ['warn', 4],
                'vue/max-attributes-per-line' : 'off',
            },
        },
    ],
};
