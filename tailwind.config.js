/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bleached-sand': '#f5f2ea',
        'ocean-deep': '#2e6f6b',
        'teak-accent': '#b7895f',
        'limestone': '#f6f3ec',
        'sea-glass': '#9bb7ad',
        'tide': '#3b6f70',
        'sand': '#efe9df',
        'charcoal': '#1c1a17',
        'ink': '#0f0e0c',
        'clay': '#c9b59a',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
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
