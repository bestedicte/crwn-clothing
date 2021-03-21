module.exports = {
	extends: [
		'plugin:@dekode/base',
		'plugin:@dekode/react',
	],
	plugins: [
		'@dekode',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'arrow-body-style': 'off',
		'func-names': 'off',
		'import/extensions': 'off',
		'import/no-named-as-default': 'off',
		'import/prefer-default-export': 'off',
		'no-console': 'off',
		'no-shadow': 'off',
		'no-undefined': 'off',
		'react/jsx-fragments': 'off',
		'react/jsx-filename-extension': [ 2, { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] } ],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		camelcase: 'off',
		'react/state-in-constructor': 'off',
		'no-unused-vars': 'warn',
		'no-alert': 'warn',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
			},
		},
	},
};
