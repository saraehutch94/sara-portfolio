module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'navDarkGreen': '#0D2823',
      'navLightGreenHover': '#184a41',
      'navIconReg': '#22C55D',
      'navIconHover': '#49DE80',
      'greenBody': '#123A33',
    },
    screens: {
      'xs': '376px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik'],
      },
      transitionProperty: {
        'height-width': 'height, width',
      },
      transitionDuration: {
        '0.25': '0.25s',
      },
    },
  },
  plugins: [],
}
