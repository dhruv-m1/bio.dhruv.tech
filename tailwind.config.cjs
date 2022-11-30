/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {
				'dark-blue': 'hsla(223, 49%, 8%, 1)',
				'medium-dark-blue': 'hsla(221, 55%, 11%, 1)',
				'medium-blue': 'hsla(221, 58%, 13%, 1)',
				'light-blue': 'hsla(198, 87%, 42%, 1)',
				'turquoise-25': 'hsla(191, 86%, 41%, 0.25)',
				'turquoise-6': 'hsla(191, 86%, 41%, 0.06)',
				'turquoise-0': 'hsla(191, 86%, 41%, 0)',
				'w':'hsla(0, 0%, 100%, 0.2)'
			},

			fontFamily: {
				'poppins': 'Poppins'
			}
		

		},
	},
	plugins: [],
}
