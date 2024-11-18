/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    padding: {
      Default: "20px",
      md: "40px",
    },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}