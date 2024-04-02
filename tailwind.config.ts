/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#040440",
        light: "#F5F6F8",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

export default config;
