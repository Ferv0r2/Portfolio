/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        main: '#EA7A29',
        bg_main: '#151521',
        bg_sub: '#1b1b28',
      },
      gridTemplateRows: {
        footer: 'auto 1fr auto',
      },
      animation: {
        shake: 'shake 0.3s linear backwards',
        wave: 'wave 30s ease infinite',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateY(2px) scale(0.9) rotateZ(4deg)',
          },
          '50%': {
            transform: 'translateY(-2px) scale(1.2) rotateZ(-4deg)',
          },
          '100%': {
            transform: 'translateY(2px) scale(1) rotateZ(0deg)',
          },
        },
        wave: {
          '0%': {
            'background-position': '50% 0%',
          },
          '50%': {
            'background-position': '50% 100%',
          },
          '100%': {
            'background-position': '50% 0%',
          },
        },
      },
    },
  },
  plugins: [],
}
