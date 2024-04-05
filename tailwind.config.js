const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'dark-pattern-gradient-radial': `radial-gradient(${colors.indigo[700]} 0.5px, ${colors.zinc[900]} 0.5px)`,
				'light-pattern-gradient-radial': `radial-gradient(${colors.indigo[700]} 0.5px, ${colors.indigo[50]} 0.5px)`
			})
		}
	},
	plugins: []
};
