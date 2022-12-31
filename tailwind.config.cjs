/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brightBlue": "hsl(220, 98%, 61%)",
        "veryDarkBlue": "hsl(235, 21%, 11%)",
        "veryDarkSaturatedBlue": "hsl(235, 24%, 19%)",
        "veryDarkGrayishBlue": "hsl(237, 14%, 26%)",
        "lightGrayishBlue": "hsl(234, 39%, 85%)",
        "extraLightGray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
}
