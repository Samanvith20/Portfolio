/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      primary: '"#854CE6', 
      text_primary: '#C8CFD8',
      white: '#ffffff',
    },
    backgroundImage: {
      'gradient-hero': 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
    },
    boxShadow: {
      'custom-shadow': '20px 20px 60px #1F2634, -20px -20px 60px #1F2634',
    },},
  },
  plugins: [],
}