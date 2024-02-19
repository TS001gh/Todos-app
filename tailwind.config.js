/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0rem)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.35s ease forwards',
      },
    },
  },
  plugins: [],
};
