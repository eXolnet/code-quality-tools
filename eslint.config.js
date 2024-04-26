const configBase = require('./packages/eslint-config-base/index.js');

module.exports = [
    ...configBase,
    {
        "rules": {
            // If your editor cannot show these to you, occasionally turn this off and run the linter
            "no-warning-comments": 0
        }
    }
];
