# @exolnet/eslint-config-base

[![NPM version](http://img.shields.io/npm/v/@exolnet/eslint-config-base.svg)](https://www.npmjs.org/package/@exolnet/eslint-config-base)
[![Software License](https://img.shields.io/badge/license-MIT-8469ad.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/github/actions/workflow/status/eXolnet/code-quality-tools/ci.yml?label=tests&style=flat-square)](https://github.com/eXolnet/code-quality-tools/actions?query=workflow%3Aci)

ESLint configuration for JavaScript projects used at eXolnet.

## Installation

Install this package, and save it as a `devDependency`:

```
npm install --save-dev @exolnet/eslint-config-base
```

Then have your project's `.eslintrc.json` file extend the ruleset.

```json
{
    "extends": "@exolnet/eslint-config-base"
}
```

If you are using YAML or JavaScript for your [ESLint configuration file format](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) ensure you use the correct syntax for the language used.

## License

Copyright © [eXolnet](https://www.exolnet.com). All rights reserved.

This code is licensed under the [MIT license](http://choosealicense.com/licenses/mit/).
Please see the [license file](LICENSE) for more information.
