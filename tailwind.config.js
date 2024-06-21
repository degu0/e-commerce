/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-custom': '#DB4444',
        'blue-login': '#CBE4E8',
        'gray-placeholder': '#A0A3BD',
        'gray-input': '#EFF0F6',
        'gray-line': '#D9DBE9',
        'secondary': '#F5F5F5',
        'black-opacity': 'rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        custom: ["Poppins", 'sans-serif'],
      },
      keyframes: {
        'underline-expand': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'underline-expand': 'underline-expand 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

