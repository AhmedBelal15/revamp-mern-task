module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    // we want to force semicolons
    semi: ["error", "always"],
    "linebreak-style": ["disabled", "windows"],
  },
};
