/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070F2B', // Custom color name
        footer_header: '#1B1A55',
        app: '#535C91',
        posts: '#9290C3'
      },
    },
  },
  plugins: [],
}

