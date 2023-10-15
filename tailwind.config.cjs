/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {
				'dark-blue': 'hsla(223, 49%, 8%, 1)',
				'medium-dark-blue': 'hsla(221, 55%, 11%, 1)',
				'medium-blue': 'hsla(221, 58%, 13%, 1)',
				'light-blue': 'hsla(198, 94%, 36%, 1)',
				'medium-turquoise': 'hsla(191, 86%, 41%, 1)',
				'turquoise-25': 'hsla(191, 86%, 41%, 0.25)',
				'turquoise-6': 'hsla(191, 86%, 41%, 0.06)',
				'turquoise-0': 'hsla(191, 86%, 41%, 0)',
				'medium-purple': 'hsla(259, 94%, 35%,1)'
			},

			fontFamily: {
				'poppins': 'Poppins'
			},

			animation: {
				type: 'type 2s ease-out 0.7s forwards',
				cursor: 'cursor .6s linear infinite alternate'
			},
			keyframes: {
				type: {
					'0%': { width: '0ch' },
					'2.5%, 5%': { width: '1.01ch' },
					'7.5%, 10%': { width: '2.04ch' },
					'12.5%, 15%': { width: '2.5ch' },
					'17.5%, 20%': { width: '2.95ch' },
					'22.5%, 25%': { width: '3.99ch' },
					'27.5%, 30%': { width: '4.44ch' },
					'32.5%, 35%': { width: '5.478ch' },
					'37.5%, 40%': { width: '6.52ch' },
					'42.5%, 45%': { width: '6.84ch' },
					'47.5%, 50%': { width: '8.06ch' },
					'52.5%, 55%': { width: '8.39ch' },
					'57.5%, 60%': { width: '9.33ch' },
					'62.5%, 65%': { width: '10.28ch' },
					'67.5%, 70%': { width: '11.20ch' },
					'72.5%, 75%': { width: '12.24ch' },
					'77.5%, 80%': { width: '12.89ch' },
					'82.5%, 85%': { width: '13.34ch' },
					'87.5%, 90%': { width: '14.38ch' },
					'92.5%, 95%': { width: '15.423ch' }
				  },

				  cursor: {
					'0%, 40%': { opacity: '0' },
					'60%, 100%': { opacity: '1' },
				  }
		  
	
			},
		

		},
	},
	plugins: [],
}
