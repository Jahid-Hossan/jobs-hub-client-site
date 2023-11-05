/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: '#2dd4bf'

      },
    },

  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}

