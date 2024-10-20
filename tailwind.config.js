/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        turquoise: {
          500: '#40E0D0', // Turquoise blue color
        },
      },
    },
  },
  plugins: [],
};