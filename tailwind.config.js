/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'lexend': ['Lexend', 'sans-serif'],
			},
			colors: {
				'cyber-black': '#0a0a0f',
				'cyber-dark': '#12121a',
				'neon-cyan': '#00fff9',
				'neon-magenta': '#ff00ff',
				'neon-pink': '#ff2d6a',
				'neon-blue': '#00b4ff',
				'neon-purple': '#bf00ff',
				'transit-yellow': '#ffe566',
			},
			animation: {
				'glitch': 'glitch 2.5s infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
				'scanline': 'scanline 8s linear infinite',
				'flicker': 'flicker 0.15s infinite',
				'train-pass': 'train-pass 12s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				glitch: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
				'glow-pulse': {
					'0%': { textShadow: '0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9' },
					'100%': { textShadow: '0 0 20px #00fff9, 0 0 40px #00fff9, 0 0 60px #00fff9, 0 0 80px #00fff9' },
				},
				scanline: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				flicker: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'train-pass': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(200vw)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(rgba(0, 255, 249, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 249, 0.03) 1px, transparent 1px)',
			},
		},
	},
	plugins: [],
}
