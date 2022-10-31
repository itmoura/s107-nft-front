/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E94DE1",
        secondary: "#26097F",
        background: "#171024",
      },
    },
  },
  plugins: [],
};
