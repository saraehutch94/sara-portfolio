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
      width: {
        '20': '20px',
        '401.33': '401.33px',
        '475': '475px',
        '700': '700px',
        '802': '802px',
        '1189': '1189px',
        '1204': '1204px',
      },
      height: {
        '20': '20px',
        '320': '320px',
        '328': '328px',
      },
      transitionProperty: {
        'font-size': 'font-size',
        'height-width': 'height, width',
        'display': 'display',
      },
      transitionDuration: {
        '0.25': '0.25s',
      },
    },
  },
  plugins: [],
}
