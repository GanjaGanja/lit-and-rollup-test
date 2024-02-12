module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
  ],
  rules: {
    "max-len": [
      "error",
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: ".* class=.*", // long tailwind classes
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
};
