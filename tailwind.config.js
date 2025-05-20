/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#0397b3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#fd2842",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
      },
      boxShadow: {
        cyanShadow: "8px 8px 20px 0px rgba(94, 206, 220, 0.5)",
        "cyan-medium-shadow": "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 169, 79, 0.5)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ["Josefin Sans"],
        special: ["Roboto"],
      },
    },
  },
  plugins: [typography],
};

export default config;
