/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        serif: ["Italiana", "serif"],
      },
      colors: {
        primary_backgroundLighterColor: {
          50: "#FAF8F5",
          100: "#F2EFEB",
          200: "#E8E4DF",
          300: "#DFD9D3",
          400: "#D0C8BF",
          500: "#CBC0B4",
        },
        primary_backgroundDarkerColor: {
          600: "#805A4A",
          700: "#67493C",
          800: "#4D372D",
          850: "#211712",
          900: "#1A120F",
          950: "#271C17",
        },
      },
    },
  },
  plugins: [],
};
