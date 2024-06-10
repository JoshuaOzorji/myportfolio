import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			screens: {
				sm: "300px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},

			fontFamily: {
				abel: ["var(--font-abel)"],
				noto: ["var(--font-noto)"],
				inter: ["var(--font-inter)"],
				chonburi: ["var(--font-chonburi)"],
			},
		},
	},

	plugins: [],
	darkMode: "class",
};
export default config;
