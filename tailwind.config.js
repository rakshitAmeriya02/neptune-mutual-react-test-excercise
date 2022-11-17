/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primaryHover: "linear-gradient(90deg,#4e7dd9,#5358d8,#5358d8)",
      },
      translate: {
        "50%": "-50%",
      },
      colors: {
        borderGray: "#b0c4db",
      },
    },
  },
  plugins: [],
};
