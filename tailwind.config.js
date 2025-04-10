module.exports = {
	// ...existing code...
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// ...existing code...
		extend: {
			// ...existing code...
			borderRadius: {
				DEFAULT: "1rem",
				lg: "1.5rem",
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					"San Francisco",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
	// ...existing code...
};
