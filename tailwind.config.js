/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#64BC46",
        "dark-green": "#2B5127",
        "light-green": "#DDEEDC",
        black: "#333333",
        white: "#FFFFFF",
        "light-background-green": "#F3F9F3",
        orange: "#FFBB6D",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        image: "40px",
      },
      width: {
        "small-container": "800px",
      },
    },
  },
  plugins: [],
};
