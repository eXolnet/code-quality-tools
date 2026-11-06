# @exolnet/stylelint-config

[![NPM version](http://img.shields.io/npm/v/@exolnet/stylelint-config.svg)](https://www.npmjs.org/package/@exolnet/stylelint-config)
[![Software License](https://img.shields.io/badge/license-MIT-8469ad.svg?style=flat-square)](LICENSE.md)

Stylelint configuration used at eXolnet.

## Installation

This configuration requires `stylelint` 17 and Node.js 20.19 or later.

Install this package along with its peer dependencies, and save them as `devDependencies`:

```
npm install --save-dev @exolnet/stylelint-config stylelint postcss
```

Then have your project's `.stylelintrc.json` file extend the ruleset.

```json
{
    "extends": "@exolnet/stylelint-config"
}
```

## License

Copyright © [eXolnet](https://www.exolnet.com). All rights reserved.

This code is licensed under the [MIT license](http://choosealicense.com/licenses/mit/).
Please see the [license file](LICENSE) for more information.
