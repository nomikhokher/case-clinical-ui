const plugin = require('tailwindcss/plugin')
const list = require('./safelist')

module.exports = {
  important: true,
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    options: {
      safelist: list.safeList,
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      height: {
        mobile: '812px',
      },
      width: {
        mobile: '375px',
        code: '840px',
      },
      invert: {
        1: '1',
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
    screens: {
      xs: '425px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      width: ['hover'],
      zIndex: ['hover', 'active'],
      display: ['responsive', 'group-hover', 'group-focus'],
      borderRadius: ['dark'],
      borderColor: ['dark'],
      borderStyle: ['dark'],
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

        '.theme-border-50': {
          borderColor: 'var(--theme-color-50) !important',
        },
        '.theme-border-100': {
          borderColor: 'var(--theme-color-100) !important',
        },
        '.theme-border-200': {
          borderColor: 'var(--theme-color-200) !important',
        },
        '.theme-border-300': {
          borderColor: 'var(--theme-color-300) !important',
        },
        '.theme-border-400': {
          borderColor: 'var(--theme-color-400) !important',
        },
        '.theme-border-500': {
          borderColor: 'var(--theme-color-500) !important',
        },
        '.theme-border-600': {
          borderColor: 'var(--theme-color-600) !important',
        },
        '.theme-border-700': {
          borderColor: 'var(--theme-color-700) !important',
        },
        '.theme-border-800': {
          borderColor: 'var(--theme-color-800) !important',
        },
        '.theme-border-900': {
          borderColor: 'var(--theme-color-900) !important',
        },
      }

      addUtilities(newUtilities, ['dark', 'hover'])
    }),
  ],
}
