/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './js/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'no-data': "url('./img/no-data.svg')",
        calculator: "url('./img/calculator-animate.svg')",
      },
    },
  },
  plugins: [],
};
