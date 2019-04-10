module.exports = {
    extends: [
        require.resolve('@exolnet/eslint-config-base'),
        'plugin:react/recommended',
    ],

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    plugins: ['react'],

    settings: {
        react: {
            pragma: 'React',
            version: 'latest',
        },
    },

    rules: {
        'comma-dangle': 0,
        'react/jsx-uses-vars': ['error'],
        'react/display-name': ['error'],
        'no-unused-vars': ['warn'],
        'no-console': ['error'],
        'no-unexpected-multiline': ['warn'],
    },
};
