const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      width: ['hover'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.theme-color-50': {
          color: ' var(--theme-color-50) !important',
        },
        '.theme-color-100': {
          color: 'var(--theme-color-100) !important',
        },
        '.theme-color-200': {
          color: 'var(--theme-color-200) !important',
        },
        '.theme-color-300': {
          color: 'var(--theme-color-300) !important',
        },
        '.theme-color-400': {
          color: 'var(--theme-color-400) !important',
        },
        '.theme-color-500': {
          color: 'var(--theme-color-500) !important',
        },
        '.theme-color-600': {
          color: 'var(--theme-color-600) !important',
        },
        '.theme-color-700': {
          color: 'var(--theme-color-700) !important',
        },
        '.theme-color-800': {
          color: 'var(--theme-color-800) !important',
        },
        '.theme-color-900': {
          color: 'var(--theme-color-900) !important',
        },
        '.theme-bg-50': {
          backgroundColor: ' var(--theme-color-50) !important',
        },
        '.theme-bg-100': {
          backgroundColor: 'var(--theme-color-100) !important',
        },
        '.theme-bg-200': {
          backgroundColor: 'var(--theme-color-200) !important',
        },
        '.theme-bg-300': {
          backgroundColor: 'var(--theme-color-300) !important',
        },
        '.theme-bg-400': {
          backgroundColor: 'var(--theme-color-400) !important',
        },
        '.theme-bg-500': {
          backgroundColor: 'var(--theme-color-500) !important',
        },
        '.theme-bg-600': {
          backgroundColor: 'var(--theme-color-600) !important',
        },
        '.theme-bg-700': {
          backgroundColor: 'var(--theme-color-700) !important',
        },
        '.theme-bg-800': {
          backgroundColor: 'var(--theme-color-800) !important',
        },
        '.theme-bg-900': {
          backgroundColor: 'var(--theme-color-900) !important',
        },
      }

      addUtilities(newUtilities, ['dark', 'hover'])
    }),
  ],
}
