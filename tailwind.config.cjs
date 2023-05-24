/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1A2118',
        'green': '#3B4A1F',
        'orange': '#D9843B',
        'beige': '#EFD7B4',
        'light-beige': '#F1E6E1'
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
