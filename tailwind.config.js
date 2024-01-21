/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';
import colors from "tailwindcss/colors.js";

export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)' 
       },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': {
        DEFAULT: '#004721',
        50: '#e8f8f7',
        100: '#c3f0ec',
        200: '#8ae1d9',
        300: '#47cfc2',
        400: '#004721',
        500: '#00893f',
        600: '#006c34',
        700: '#005726',
        800: '#00421c',
        900: '#003117',
        950: '#001a0e'
      },
      'yellow': {
        DEFAULT: '#ccac00',
        50: '#fefdf8',
        100: '#fefcf0',
        200: '#fef8da',
        300: '#fef3bf',
        400: '#ccac00',
        500: '#e4c710',
        600: '#c49300',
        700: '#9f6b00',
        800: '#825300',
        900: '#6a4500',
        950: '#402f00'
      },
      'silver': {
        DEFAULT: '#FFFBE5',
        50: '#fffef8',
        100: '#fefef0',
        200: '#fefde1',
        300: '#fefcce',
        400: '#FFFBE5',
        500: '#fffcc2',
        600: '#fff8a3',
        700: '#fff47f',
        800: '#fff05b',
        900: '#ffe837',
        950: '#ffde00'
      },
      'red': colors.red,
      'slate': colors.slate,
      'gray': colors.gray,
      'zinc': colors.zinc,
      'neutral': colors.neutral,
      'stone': colors.stone,
      'orange': colors.orange,
      'amber': colors.amber,
      'lime': colors.lime,
      'emerald': colors.emerald,
      'teal': colors.teal,
      'cyan': colors.cyan,
      'sky': colors.sky,
      'blue': colors.blue,
      'indigo': colors.indigo,
      'violet': colors.violet,
      'purple': colors.purple,
      'fuchsia': colors.fuchsia,
      'pink': colors.pink,
      'rose': colors.rose
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
