module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
	plugins: [],
	rules: {
		'vue/no-mutating-props': 'warn',
		'nuxt/no-globals-in-created': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-unused-vars': 'warn',
		'react/react-in-jsx-scope': 'off',
		'no-undef': 'off',
		semi: ['warn', 'never'],
		'max-len': ['warn', { code: 200, tabWidth: 2 }],
		quotes: ['warn', 'single', { avoidEscape: true }],
		'jsx-quotes': ['warn', 'prefer-single'],
		'comma-dangle': ['warn', 'never']
	}
}