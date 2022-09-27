/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#012b72',
      },
      minWidth: {
        '120': '120px',
        '320': '220px'
      },
      backgroundImage: {
        'hero-image': "url('/public/hero_img.jpg')",
      }
    },
  },
  plugins: [],
}