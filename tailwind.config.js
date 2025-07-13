/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'exo-2': ['var(--font-exo-2)'],
      },
    },
  },
  plugins: [],
}
