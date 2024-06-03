/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      clipPath: {
        'custom': 'polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%)',
      },
      colors: {
      primary: '"#854CE6', 
      text_primary: '#C8CFD8',
      white: '#ffffff',
      'theme-card': '#f8f9fa', // Light grayish color for card backgrounds
      'theme-primary': '#6366f1', // Blueish color for primary elements
      'theme-text_secondary': '#4b5563', // Dark gray for secondary text
      'theme-text_black': '#111827', // Almost black for primary text
      'theme-text_primary': '#111827', // your theme color
        'theme-bgLight': '#e5e7eb', // light background color
        'theme-bg': '#d1d5db', // background color
    },
    display: ['hover', 'focus'],
    backgroundImage: {
      'gradient-hero': 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
    },
    boxShadow: {
      'custom-shadow': '20px 20px 60px #1F2634, -20px -20px 60px #1F2634',
    },},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}