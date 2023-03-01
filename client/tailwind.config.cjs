/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        "openSans" : ["Open Sans", "sans"] 
      }
    },
  },
  plugins: [],
}
