/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#040440",
        light: "#F5F6F8",
      },
    },
  },
  plugins: [],
};
