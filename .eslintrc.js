module.exports = {
  extends: ["mantine"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/quotes": "off",
  },
};
