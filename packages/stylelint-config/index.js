module.exports = {
    'extends': 'stylelint-config-standard',
    'plugins': [
        'stylelint-scss',
    ],
    'rules': {
        'at-rule-no-unknown': null,
        'indentation': 4,
        'no-descending-specificity': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'single',
    },
};
