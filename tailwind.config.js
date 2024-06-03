/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1668e8",
          50: "#eef8ff",
          100: "#daefff",
          200: "#bce4ff",
          300: "#8fd3ff",
          400: "#5ab9ff",
          500: "#339afe",
          600: "#1d7bf3",
          700: "#1668e8",
          800: "#1851b5",
          900: "#1a478e",
          950: "#142d57",
        },
        secondary: "#C7F2AB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
