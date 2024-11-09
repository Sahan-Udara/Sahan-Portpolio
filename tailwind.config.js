/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1470': {'max': '1470px'}, // Custom breakpoint at 1470px
      },
    },
  },
  plugins: [],
};
