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
      },
      fontFamily: {
          custom: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

