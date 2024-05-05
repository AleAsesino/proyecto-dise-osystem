/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'bg-barraNavegacion': '#242222',
        'bg-barraLateral': '#2E2E2E',
      }
      
    },
  },
  plugins: [],
}

