module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "preact"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "warnOnUnsupportedTypeScriptVersion": false,
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/ban-ts-ignore": 0
  },
}
