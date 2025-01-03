/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#1463F3",
        second: "#1D2A73",
        third: "#CCD0D8",
        fourth: "#84A4FC",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('accordion-open', '&[data-state="open"]');
    }),
    plugin(function ({ addVariant }) {
      addVariant('data-open', '&[data-state="open"]');
    }),
  ],
};
