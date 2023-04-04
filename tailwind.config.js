module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',

			// default breakpoints but with 40px removed
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px'
			}
		},
		extend: {
			colors: {
				'dark': 'rgb(28,28,28)'
			},
			borderWidth: {
				DEFAULT: '1px',
				'1': '1px'
			},
			boxShadow: {
				'message': '0px 2px 7px #00000030',
				'messageDetails': '0px 2px 7px #00000030'
			}
		}
	},
	plugins: []
}
