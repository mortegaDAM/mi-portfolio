/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'Sans Serif'],
        'noto-serif': ['"Noto Serif"', 'serif'],
      }
    },
  },
  plugins: [],
}

