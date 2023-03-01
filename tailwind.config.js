/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'lexend': ['Lexend', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
