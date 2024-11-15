import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--main-bg)',
				primary: 'var(--primary)',
				onPrimary: 'var(--on-primary)',
				secondary: 'var(--secondary)',
				onSecondary: 'var(--on-secondary)',
				foreground: 'var(--color)',
				cgreen: {
					100: '#d8f3dc',
					200: '#52b788',
					300: '#40916c',
					400: '#1b4332',
					500: '#081c15',
				},
				cblue: {
					100: '#a7c9e5',
					200: '#579ac6',
					300: '#4091b1',
					400: '#0c3e6a',
					500: '#031c35',
				},
				cred: {
					100: '#f8d7da',
					200: '#f28a8c',
					300: '#b14343',
					400: '#9e2a2f',
					500: '#7a1e21',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
