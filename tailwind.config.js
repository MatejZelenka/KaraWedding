module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#004721',
      'yellow': '#CCAC00',
      'silver': '#FFFBE5',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}