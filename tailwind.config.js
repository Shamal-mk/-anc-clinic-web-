/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': '#A3B18A',
        'eucalyptus': '#588157',
        'champagne-gold': '#C5A880', // Refined softer luxury gold
        'royal-navy': '#0F172A',
        'clinical-white': '#FAF9F6', // Off-white/Alabaster luxury canvas
        'obsidian-charcoal': '#121212',
        'platinum-slate': '#E2E8F0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
