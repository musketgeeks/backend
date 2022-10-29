const fs = require("fs");

const folders = fs
  .readdirSync("src", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const foldersPaths = ["@app", "@test", "@config", "@modules", "@database", "@common", "@providers"];

const noUnusedVarRule = [
  "error",
  {
    vars: "all",
    varsIgnorePattern: "^_",
    args: "after-used",
    argsIgnorePattern: "^_",
    ignoreRestSiblings: true
  }
];

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "import",
    "unused-imports",
    "prettier"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    curly: "error",
    "no-console": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": noUnusedVarRule,
    "unused-imports/no-unused-vars": noUnusedVarRule,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow"
      }
    ],
    "@typescript-eslint/indent": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^@nestjs",
            "^@nestjs\\/([a-z0-9]+)",
            "^nestjs",
            "^nestjs\\/([a-z0-9]+)",
            "^nestjs-([a-z0-9]+)",
            "^jest\\/([a-z0-9]+)",
            "^jest-([a-z0-9]+)",
            "^@?\\w"
          ],
          [
            `^(${foldersPaths.join("|")})(/.*|$)`,
            `^(${folders.join("|")})(/.*|$)`
          ],
          ["^\\.", "^"]
        ]
      }
    ],
    "prettier/prettier": ["error", { usePrettierrc: true }]
  },
  overrides: [
    {
      // For config files
      files: ["*.cjs", "*.mjs", "*.js"],
      env: {
        node: true
      },
      extends: ["prettier"],
      plugins: ["prettier"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "prettier/prettier": ["error", { usePrettierrc: true }]
      }
    }
  ]
};