/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    'src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {    
      backgroundColor: {
        "overlay": "rgb(134,134,134);",
      },
    },
  },
  plugins: [],
}