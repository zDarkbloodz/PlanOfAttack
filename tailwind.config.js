/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'grid': 'grid 20s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'virus-float': 'virus-float 8s ease-in-out infinite',
        'lightning': 'lightning 1.5s ease-out infinite',
        'rock-spin': 'rock-spin 10s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'virus-float': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(90deg)' },
          '50%': { transform: 'translate(0, -20px) rotate(180deg)' },
          '75%': { transform: 'translate(-10px, -10px) rotate(270deg)' },
        },
        'lightning': {
          '0%, 100%': { opacity: 0 },
          '10%, 90%': { opacity: 0.1 },
          '50%': { opacity: 1 },
        },
        'rock-spin': {
          '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' },
        },
        'text-shimmer': {
          '0%': { textShadow: '0 0 10px rgba(0,255,242,0.5), 0 0 20px rgba(0,255,242,0.3)' },
          '50%': { textShadow: '0 0 20px rgba(0,255,242,0.8), 0 0 30px rgba(0,255,242,0.5), 0 0 40px rgba(0,255,242,0.3)' },
          '100%': { textShadow: '0 0 10px rgba(0,255,242,0.5), 0 0 20px rgba(0,255,242,0.3)' },
        },
      },
    },
  },
  plugins: [],
}