module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
    tsconfigRootDir: __dirname, // 新增
    project: ["tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/tslint", "vue"],
  ignorePatterns: [".eslintrc.js", "auto-imports.d.ts", "components.d.ts", "enc.d.ts"],
  rules: {
    "@typescript-eslint/tslint/config": [
      "warn",
      {
        lintFile: "./tslint.json", // path to tslint.json of your project
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
    // "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "vue/multi-word-component-names": "off",
    // indent: [
    //   "off",
    //   // "tab"
    // ],
    "linebreak-style": ["warn", "unix"],
    "prettier/prettier": "warn",
    quotes: ["warn", "double"],
    // semi: ["error", "always"],
  },
};
