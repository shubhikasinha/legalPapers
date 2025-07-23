/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        // or create custom:
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        brand: '#2c1000',
        light: "#47352a",
      },
    },
  },
  plugins: [],
}

