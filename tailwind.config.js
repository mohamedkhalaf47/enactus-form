/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: "url(/Assets/background.jpg)",
      boxShadow:{
        '3xl': '3px 3px 41px 3px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

