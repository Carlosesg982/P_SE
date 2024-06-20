/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'azul' : '#002060',
			  },
			backgroundImage: {
			'f-banner': "url('/public/f-banner.png')",
			'custom-gradient': 'linear-gradient(to right, #E9E4F0, #D3CCE3)',
			},
		},
	},
	plugins: [],
}
