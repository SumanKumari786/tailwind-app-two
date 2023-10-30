/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        darkGreen: '#354033',
      },
      textColor:{
        darkGreen: '#354033',
      },
      fontSize:{
        xl: '45pt',
        lg: '27pt',
        md: '24pt',
        sm: '18pt',
        nm: '16pt',
        xs: '14pt',
      }
    },
  },
  plugins: [],
}