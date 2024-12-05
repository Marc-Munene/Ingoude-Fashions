/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mont-font': ['Montserrat','Arial', 'sans-serif'],
      },
      colors:{
        'cream': '#f1e6d8',
        'jungle-green': '#324444' 
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('tailwindcss-motion'),

  ],
}

