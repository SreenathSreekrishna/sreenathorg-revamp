/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xxxs': '360px',
      'xxs':'450px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontFamily: {
      main: ['\'Roboto\''],
    }
  },
  plugins: [],
}