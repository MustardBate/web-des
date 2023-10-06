/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#4361EE",
        "heading1": "#34363F",
        "heading2": "#565863",
        "body": "#5B5D67",
        "captiontext": "#8C8F9F",
        "divider": "#E7E8EF",
        "background": "#F4F5F9",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    }
  },
  plugins: [],
}

