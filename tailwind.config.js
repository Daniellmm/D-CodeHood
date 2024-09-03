/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textblue: "#1A43BF",
        lightText: "#959595",
        box1: "#6335c5",
        box2: "#0d88bf",
        box3: "#394cf3",
      }
    },
  },
  plugins: [],
}

