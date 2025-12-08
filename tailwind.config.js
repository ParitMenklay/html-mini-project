/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'baloo' คือชื่อที่คุณจะนำไปใช้ใน Tailwind เช่น class="font-baloo"
        'baloo': ['"Baloo Bhai 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}