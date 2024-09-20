/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: '#fc3c44',
				background: '#000',
				white: '#fff',
				muted: '#9ca3af',
				icon: '#fff',
				maximumTrackTintColor: 'rgba(255,255,255,0.4)',
				minimumTrackTintColor: 'rgba(255,255,255,0.6)',
			},
			fontSize: {
				xs: 12,
				sm: 16,
				base: 20,
				lg: 24,
			},
			padding: {
				horizontal: 24,
			},
		},
		plugins: [],
	},
}
