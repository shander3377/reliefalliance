import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    extend: {
      gridCoulmn: {
        'span-50': 'span 50 / span 50'
      }
    },
	},
	darkMode: "class",
	plugins: [
		nextui({
			layout: {
				dividerWeight: "2px",
			},
		}),
	],
};
