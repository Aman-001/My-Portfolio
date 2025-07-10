/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideSparkle: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tinker: {
          '0%, 100%': { color: '#ffffff' },
          '50%': { color: '#facc15' }, // yellow-400
        },
      },
      animation: {
        slideSparkle: 'slideSparkle 2s linear infinite',
        marqueeLeft: 'marqueeLeft 10s linear infinite',
        marqueeRight: 'marqueeRight 12s linear infinite',
        tinker: 'tinker 1s infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        lobster: ['Lobster', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        robotoslab: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
