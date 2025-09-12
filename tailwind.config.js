/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF7F0',
          100: '#FDEEE0',
          200: '#FADCC1',
          300: '#F7CAA2',
          400: '#F4B883',
          500: '#F1A664',
          600: '#EE9445',
          700: '#EB8226',
          800: '#BC6B1E',
          900: '#8D5017',
        },
        siena: {
          50: '#FEF7F0',
          100: '#FDEEE0',
          200: '#FADCC1',
          300: '#F7CAA2',
          400: '#F4B883',
          500: '#F1A664',
          600: '#EE9445',
          700: '#EB8226',
          800: '#BC6B1E',
          900: '#8D5017',
        },
        accent: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
};