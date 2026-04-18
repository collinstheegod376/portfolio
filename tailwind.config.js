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
        "glass-base": "rgba(255, 255, 255, 0.05)",
        "glass-surface": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-glow": "rgba(0, 153, 255, 0.15)",
        "primary": "#3b82f6",
        "primary-light": "#60a5fa",
        "primary-glow": "rgba(59, 130, 246, 0.5)",
        "secondary": "#93c5fd",
        "background-dark": "#020617",
        "on-background": "#f8fafc",
        "on-surface": "#cbd5e1",
        "on-surface-variant": "#94a3b8",
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
