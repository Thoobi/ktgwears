/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        'logo': 'url(/src/assets/ktg-logo.svg), pointer',
      }
    },
  },
  plugins: [],
}

