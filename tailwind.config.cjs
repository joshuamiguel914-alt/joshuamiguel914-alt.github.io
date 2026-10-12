/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};
