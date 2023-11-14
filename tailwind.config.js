/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xs':'340px',
      'sm': '640px',
      'lg': '1024px',
    }
  },
  plugins: [],
}