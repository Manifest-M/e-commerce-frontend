/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Amazon-like color palette
        'amazon-blue-dark': '#131921',
        'amazon-blue-mid': '#232f3e',
        'amazon-link': '#007185',
        'amazon-orange': '#ff9900', // Primary accent for CTA/buttons
        'amazon-yellow': '#f3a847', // Secondary accent for stars/highlights
      },
    },
  },
  plugins: [],
}
