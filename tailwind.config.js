/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        bluess: "#4d39f1",
        subtelCol: "#b0a1ff",
        lighPurple: "#7857ff",
        darkPurple: "#342bec",
        midPurple: "#5540f5",
        whitee: "#ffffff",
      },
      screens: {
        midMin: { min: "375px" },
        // mmin: { min: "680px" },
      },
      fontFamily: {
        fontHanken: ["Hanken Grotesk", "sans-serif"],
      },
      fontWeight: {
        "hanken-500": 500,
        "hanken-700": 700,
        "hanken-800": 800,
      },
    },
  },
  plugins: [],
};
