/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/components/**/*.tsx"],

  theme: {
    colors: {
      "primary": "#2CDF75",

      "white": "white",
      "black": "black"
    },

    fontSize: {
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["4.5rem", { lineHeight: 1 }]
    },

    extend: {}
  },

  plugins: []
};