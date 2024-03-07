/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '475px',
      },
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '35rem',
      },
    },
    colors: {
      skyBlue: '#76B4CC',
      blue: '#0D47A1',
      orange: '#FF6F00',
      yellow: '#FFA000',
      background: '#EEEEEE',
      dark: '#1C1A1A',
      black: '#211A1A',
      gray: '#3E3B3B',
      red: '#FF0000',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      title: '1.375rem',
      subtitle: '1.125rem',
      text: '0.875rem',
      sm: '.8rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '2.2rem',
      '6xl': '2.4rem',
      '7xl': '2.6rem',
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
