/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgLight: '#fbfbfb',
        bgSidebarLight: '#ffffff',
        bgDark: '#0e1015',
        bgSidebarDark: '#13151b',
        btnDark: '#13151b',
        btnBorderDark: '#272a30'
      }
    }
  },
  plugins: []
}
