const fs = require('fs');

const folders = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const foldersPaths = ['@app', '@test'];

const noUnusedVarRule = [
	'error',
	{
		vars: 'all',
		varsIgnorePattern: '^_',
		args: 'after-used',
		argsIgnorePattern: '^_',
		ignoreRestSiblings: true
	}
];

module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},
	// extends: ['airbnb-base', 'plugin:prettier/recommended'],
	// plugins: ['prettier'],
	// rules: {
	// 	'prettier/prettier': ['error', { usePrettierrc: true }]
	// },
	overrides: [
		{
			// Rules for TypeScript
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'airbnb-base',
				'airbnb-typescript/base',
				'plugin:prettier/recommended',
				'prettier'
			],
			plugins: [
				'@typescript-eslint/eslint-plugin',
				'simple-import-sort',
				'import',
				'unused-imports',
				'prettier'
			],
			excludedFiles: ['*.js', '*.cjs', '*.mjs'],
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module'
			},
			rules: {
				curly: 'error',
				'no-console': 'error',
				'@typescript-eslint/interface-name-prefix': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unused-vars': noUnusedVarRule,
				'unused-imports/no-unused-vars': noUnusedVarRule,
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variableLike',
						format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow'
					}
				],
				'@typescript-eslint/indent': 'off',
				'import/prefer-default-export': 'off',
				'import/no-cycle': 'off',
				'simple-import-sort/exports': 'error',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',
				'unused-imports/no-unused-imports': 'error',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							[
								'^@nestjs',
								'^@nestjs\\/([a-z0-9]+)',
								'^nestjs',
								'^nestjs\\/([a-z0-9]+)',
								'^nestjs-([a-z0-9]+)',
								'^jest\\/([a-z0-9]+)',
								'^jest-([a-z0-9]+)',
								'^@?\\w'
							],
							[
								`^(${foldersPaths.join('|')})(/.*|$)`,
								`^(${folders.join('|')})(/.*|$)`
							],
							['^\\.', '^']
						]
					}
				],
				'prettier/prettier': ['error', { usePrettierrc: true }]
			}
		},
		{
			// For config files
			files: ['.eslintrc.cjs', 'commitlint.config.cjs', '*.cjs'],
			env: {
				node: true
			},
			extends: ['airbnb-base', 'plugin:prettier/recommended'],
			plugins: ['prettier'],
			rules: {
				'prettier/prettier': ['error', { usePrettierrc: true }]
			}
		}
	]
};
