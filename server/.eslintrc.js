module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ["import"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": "error",
    eqeqeq: ["error", "always"],
    "no-param-reassign": "error",

    // Import
    "import/default": "error",
    "import/export": "error",
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        json: "always",
      },
    ],
    "import/first": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          ["unknown", "internal"],
          "parent",
          "sibling",
          "index",
          "type",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-unassigned-import": "warn",
    "import/no-duplicates": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
};
