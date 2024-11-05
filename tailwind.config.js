/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'close-menu': {
          '0%': { transform: 'translateX(0)', display: 'block' },
          '100%': { transform: 'translateX(100%)', display: 'none' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out',
        'close-menu': 'close-menu 0.5s ease-in-out',
      },
      colors: {
        'own-brown': '#3A2C1F'
      }
    },
  },
  plugins: [],
}

