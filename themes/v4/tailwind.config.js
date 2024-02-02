/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontFamily: {
      header: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
