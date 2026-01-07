/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1024',
    },
    extend: {
      
    },
  },
  plugins: [],
};
