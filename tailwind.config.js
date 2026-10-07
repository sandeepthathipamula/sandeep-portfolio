/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { brand: '#0F6B4B', orange: '#FF8A00' }, fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] } } },
  plugins: [],
}
