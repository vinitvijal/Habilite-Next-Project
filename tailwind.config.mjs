/** @type {import('tailwindcss').Config} */
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
      keyframes:{
        "slide-in-down": {
              "0%": {
                  visibility: "visible",
                  transform: "translate3d(0, -100%, 0)",
              },
              "100%": {
                  transform: "translate3d(0, 0, 0)",
              },
          },
        "slide-out-up": {
              "0%": {
                  transform: "translate3d(0, 0, 0)",
              },
              "100%": {
                  visibility: "hidden",
                  transform: "translate3d(0, -100%, 0)",
              },
          },
      },
      animation:{
        slideindown: 'slide-in-down 1s ease-in-out 0.25s 1',
        slideoutup: 'slide-out-up 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
};
