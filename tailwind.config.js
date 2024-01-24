/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "uber": "url('assets/bguber.png')",
        'city': "url('assets/bg-city.png')",
      }
    },
  },
  plugins: [],
}

