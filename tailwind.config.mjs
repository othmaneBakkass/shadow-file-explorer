import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				background: colors.gray,
				secondary: colors.indigo,
			},
		},
	},
	plugins: [],
};
