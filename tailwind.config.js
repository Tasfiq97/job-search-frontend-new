/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C5EEE",
        secondary: "#8ed1fc",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
