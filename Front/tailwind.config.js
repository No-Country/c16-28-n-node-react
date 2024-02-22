/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'sky-blue': '#76B4CC',
      orange: '##FF6F00',
      yellow: '#FFA000',
      background: '#EEEEEE',
      dark: '#1C1A1A',
      black: '#211A1A',
      gray: '#3E3B3B',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      title: '1.375rem',
      subtitle: '1.125rem',
      text: '0.875rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
};
