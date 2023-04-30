/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "menu-item": "linear-gradient(to bottom, #f1f2f3 25px, #222831 25px)"
      },
      container: {
        screens: {
          xs: "293px",
          sm: "453px",
          md: "690px",
          xl: "930px",
          "2xl": "1140px",
        },
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        "menu-img-box": "#f1f2f3"
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      custommd: "992px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
