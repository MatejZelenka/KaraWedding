/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors.js";

export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', "sans-serif"],
        tinos: ['"Tinos"', "sans-serif"],
      },
      boxShadow: {
        "3xl":
          "0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      backgroundImage: {
        eukaliptus: "url('/images/bg-eukaliptus.png')",
      },
    },
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: colors.green,
      yellow: colors.yellow,
      silver: colors.silver,
      red: colors.red,
      slate: {
        DEFAULT: "#f8f4ef",
        50: "#fdfcf9",
        100: "#faf9f3",
        200: "#f5f0e4",
        300: "#efe5d3",
        400: "#f8f4ef",
        500: "#f0e6d8",
        600: "#e6d7bf",
        700: "#dac7a3",
        800: "#cdb786",
        900: "#bfad66",
        950: "#8c7b49",
      },
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: {
        DEFAULT: "#3d3b3a",
        50: "#f3f2f1",
        100: "#e3e2e1",
        200: "#c1bdbb",
        300: "#9a8886",
        400: "#3d3b3a",
        500: "#494745",
        600: "#43413f",
        700: "#3c3a38",
        800: "#363533",
        900: "#2d2b2a",
        950: "#1f1e1e",
      },
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
