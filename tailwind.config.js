const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  //mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        orange: colors.orange,
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      // spacing: {
      //   28: "7rem",
      // },
      // letterSpacing: {
      //   tighter: "-.04em",
      // },
      // lineHeight: {
      //   tight: 1.2,
      // },
      // // fontSize: {
      //   "5xl": "2.5rem",
      //   "6xl": "2.75rem",
      //   "7xl": "4.5rem",
      //   "8xl": "6.25rem",
      // },
      // boxShadow: {
      //   small: "0 5px 10px rgba(0, 0, 0, 0.12)",
      //   medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('postcss-focus-visible'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    extend: {
      margin: ['first'],
    },
  },
}
