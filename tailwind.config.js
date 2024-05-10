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
      },
    },
  },
  plugins: [],
}

