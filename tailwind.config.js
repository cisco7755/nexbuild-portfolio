/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#F7F6FB',
        night: '#1B1446',
        'night-2': '#261E58',
        mist: '#F6F4FC',
        line: '#E4E0F0',
        brand: {
          50: '#F8F1FF',
          100: '#F3E8FF',
          300: '#FF4FD8',
          600: '#7B3DFF',
          700: '#6426E6',
        },
        ink: {
          100: '#D8D5E4',
          200: '#8E95A3',
          300: '#5B6475',
          400: '#3A345C',
          500: '#1B1446',
        },
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}
