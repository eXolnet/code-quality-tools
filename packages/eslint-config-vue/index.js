module.exports = {
    extends: [
        require.resolve('@exolnet/eslint-config-base'),
        'plugin:vue/recommended',
    ],

    plugins: ['vue'],

    rules: {
        'vue/require-v-for-key': 'off',
    },

    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
