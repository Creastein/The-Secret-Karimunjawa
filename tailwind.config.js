/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bleached-sand': '#f5f5f0', // Light beige/off-white (inferred from usage)
        'ocean-deep': '#006994',    // Deep blue/teal (inferred from usage)
        'teak-accent': '#c3a17e',   // Brown/wood tone (inferred from usage)
        'stone-50': '#fafaf9',
        'stone-100': '#f5f5f4',
        'stone-200': '#e7e5e4',
        'stone-300': '#d6d3d1',
        'stone-400': '#a8a29e',
        'stone-500': '#78716c',
        'stone-600': '#57534e',
        'stone-800': '#292524',
        'stone-900': '#1c1917',
        'stone-950': '#0c0a09',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Assuming a serif font is desired
        sans: ['Inter', 'sans-serif'],        // Assuming a sans-serif font is desired
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
