module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        deepSeaBlue: '#0197d1',
        primary: "#FFD700",
        secondary: "#FFA500",
        dark: "#333333",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
