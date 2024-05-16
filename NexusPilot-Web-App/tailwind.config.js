/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#EDE7E3",
      "background-2": "#D9D9D9",
      "active-el": "#007BFF",
      primary: "#003366",
      secondary: "#FFFFFF",
      accent: "#FFA500",
      heading: "#000000",
      error: "red",
    },
    extend: {},
  },
  plugins: [],
};
