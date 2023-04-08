/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './js/*.js'],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0a2342',
      },
    },
  },
  plugins: [],
};
