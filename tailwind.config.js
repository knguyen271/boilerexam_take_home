/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Computer Modern"', 'Georgia', 'serif'], 
        }
      },
    },
    plugins: [],
}