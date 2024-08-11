/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "orange",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
        testColor: "Black",
      },
    },
  },
  plugins: [],
};
