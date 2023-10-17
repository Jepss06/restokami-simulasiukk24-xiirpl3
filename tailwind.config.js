/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
			},
		},
	},
	plugins: [],
};
