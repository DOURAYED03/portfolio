/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // This file (for Vite)
    "./src/**/*.{js,jsx,ts,tsx}"  // All JS/TS/JSX/TSX files inside src/
  ],
  theme: {
    extend: {},  // You can customize your theme here later
  },
  plugins: [],   // Add Tailwind plugins here if needed
}
