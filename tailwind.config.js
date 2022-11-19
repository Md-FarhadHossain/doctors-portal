/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#0FCFEC",
        secondary: "#19D3AE",
        darkGray: '#3A4256',
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },"light"],
  },

  plugins: [require('daisyui')],
}