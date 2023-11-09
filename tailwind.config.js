/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'montserrat', serif"],
      },
      colors: {
        'lightGrayishBlue': 'hsl(240, 78%, 98%)',
        'grayishBlue': 'hsl(234, 14%, 74%)',
        'grayish': 'hsl(233,13%,49%)',
        'darkGrayish': 'hsl(232,13%,33%)',
        
      },
      backgroundImage: {
        'linearGradient': 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
        'topBg': "url(./src/images/bg-top.svg)",

      },
      width: {
        '70': '17rem'
      }
    },
  },
  plugins: [],
}



