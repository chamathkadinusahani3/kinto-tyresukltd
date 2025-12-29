
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D31E2A',
          dark: '#B01820', // Hover state
        },
        dark: {
          bg: '#0A0A0A',
          card: '#1A1A1A',
          border: '#2A2A2A',
          hover: '#252525'
        },
        gray: {
          900: '#FFFFFF', // Remap for dark mode headings
          800: '#E5E5E5', // Remap for body text
          600: '#A0A0A0', // Remap for muted text
          500: '#737373',
          100: '#1A1A1A', // Remap light gray bg to dark card
          50: '#0A0A0A',  // Remap lightest gray to dark bg
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(0,0,0,0.3)',
        'glow': '0 0 20px rgba(211, 30, 42, 0.15)',
      }
    },
  },
  plugins: [],
}
