/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkGreen: "#354033",
        lightGray: "#dddddd3d",
        parrotGreen: "#309b3b",
        fadeGreen: "#324031",
      },
      borderColor: {
        lightGray: "#777777",
      },
      textColor: {
        fadeGreen: "#324031",
        lightGray: "#354033",
        darkGreen: "#354033",
      },
      fontSize:{
        xl: '45pt',
        lg: '27pt',
        md: '24pt',
        sm: '18pt',
        nm: '16pt',
        xs: '14pt',
      },
      fontFamily: {
        SangBleuKingdomTrial: "SangBleuKingdomTrial",
        AvenirLight: "AvenirLight",
        Avenir: "Avenir",
      },
      screens: {
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        xxl:"1400px",
        xxxl:"1700",
        larger:"1600px",

      },
      container: {
        center: true,
        padding: "0.75rem",
      },
    },
  },
  plugins: [],
}