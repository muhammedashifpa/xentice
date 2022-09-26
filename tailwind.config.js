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
        'hero-image': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}