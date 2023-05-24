/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#D926A9',
        'sort': '#2B2B2B'
      },
      fontFamily: {
        'sofachrome': 'sofachrome, sans-serif'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
