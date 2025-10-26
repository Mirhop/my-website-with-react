/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },

      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },

        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'border-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.7)', // sky-400/70
            borderWidth: '3px',
          },
          '50%': {
            boxShadow: '0 0 20px 8px rgba(56, 189, 248, 0.3)', // sky-400/30
            borderWidth: '4px',
          },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
      },

      animation: {
        'float-custom': 'float 6s ease-in-out infinite',
        'border-pulse-custom': 'border-pulse 3s ease-in-out infinite',
        'gradient-x-custom': 'gradient-x 4s ease infinite',
        blob: 'blob 8s infinite alternate',
        'gradient-move': 'gradient-move 4s ease infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
    },
  },
  plugins: [],
}

