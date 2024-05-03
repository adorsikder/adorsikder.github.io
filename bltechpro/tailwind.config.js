/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './pages/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-black": "#070E20",
        "purple-black": "#362853",
        "primary-text": "#090910",
        "custom-gray": "#020420",
        "custom-black": "#231f20",
        "custom-black-hover": "#413C3D",
        separator: "#F0F0F0"
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms'),],
}

