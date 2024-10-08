/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#495E57',
				secondary: '#F4CE14',
				dark: '#333333',
				medium: '#999999',
				light: '#EDEFEE',
				peach: '#EE9972',
				tan: '#FBDABB',
			},
			fontFamily: {
				serif: ['Markazi Text', 'Georgia', 'serif'],
				sans: ['Karla', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				rounded: '.5rem',
				md: '.5rem',
				lg: '1rem',
			},
			// ringColor: {
			// 	default: '#495E57',
			// 	primary: '#495E57',
			// },
			ringColor: false,
		},
	},
	safelist: [
		{
			pattern: /bg-(primary|light|dark|white)/,
		},
		{
			pattern: /text-(primary|light|dark|white)/,
		},
	],

	plugins: [require('@tailwindcss/forms')],
}
