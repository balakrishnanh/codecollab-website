import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mid: '981px',
      },
      colors: {
        cc: {
          maroon: '#881c1c', // dark maroon
          maroonAccent: '#9f3c37', // orangey maroon
          light: '#cfa19e', // light brown
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    typography,
  ],
}
