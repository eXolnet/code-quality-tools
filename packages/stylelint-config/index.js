module.exports = {
    'extends': 'stylelint-config-standard',
    'plugins': [
        'stylelint-scss',
    ],
    'rules': {
        'indentation': 4,
        'selector-pseudo-element-colon-notation': 'single',
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
};
