/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
     
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1024',
    },
    extend: {
      colors:{
        primary: '#01ff1aff',
        darkprimary: '#0a7200ff',
        secondary: '#7cff5eff',
        darkpecondary: '#00e300ff',
        background: '#dffed4ff',
        darkbackground: '#373737ff',
        darkText: '#ffffffff',
        textos: '#0b0b0bff',
      },
    },
  },
  plugins: [],
};
