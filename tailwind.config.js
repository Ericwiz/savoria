/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/public/feedImg.jpg')",
      },
      screens: {
        'xs': '450px',
         // => @media (min-width: 400px) { ... }
         'm-md': {'max': '767px'},
      }
    },
  },
  plugins: [],
}