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
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
      },
    },
  },
  plugins: [],
}
