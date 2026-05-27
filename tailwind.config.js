/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#0c0c0d",
        "surface": "#131313",
        "surface-light": "#272727",
        "accent-mint": "#5fb9b0",
        "accent-purple": "#b292ff",
        "text-bright": "#f6f6f6",
        "text-muted": "#c8c8c8",
      },
      fontFamily: {
        "sans": ["Raleway", "sans-serif"],
        "heading": ["Raleway", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "3.5rem",
      },
    },
  },
  plugins: [],
}
