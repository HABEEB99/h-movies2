module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				body: '#BDC7C9',
				header: '#2B4F60',
				btn: '#845460',
				cta: '#EAD3CB',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};
