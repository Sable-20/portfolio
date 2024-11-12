import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import flowbitePlugin from "flowbite/plugin";

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,svx}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts,svx}'
	],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries, daisyui, flowbitePlugin],
	daisyui: {
		themes: ["light", "dim"],
	},
	darkMode: [
		'selector',
		'[data-theme="dim"]'
	]
} satisfies Config;
