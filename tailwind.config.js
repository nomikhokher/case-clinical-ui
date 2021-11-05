const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    options: {
      safelist: [
        'bg-red-700',
        'bg-blue-700',
        'bg-yellow-700',
        'bg-green-700',
        'bg-pink-700',
        'bg-purple-700',
        'bg-gray-700',
        'bg-indigo-700',
        'w-1/2',
        'w-1/3',
        'w-1/4',
        'w-2/3',
        'w-3/4',
        'w-4/5',
        'w-5/6',
        'w-11/12',
        'w-full',
        'h-40',
        'h-44',
        'h-48',
        'h-52',
        'h-56',
        'h-60',
        'h-64',
        'h-72',
        'h-80',
        'h-96',
        'h-screen',
        'rounded-sm',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-t-none',
        'rounded-t-sm',
        'rounded-t',
        'bg-pink-50',
        'bg-pink-100',
        'bg-pink-200',
        'bg-pink-400',
        'bg-pink-600',
        'bg-pink-800',
        'bg-pink-900',
        'bg-purple-50',
        'bg-purple-200',
        'bg-purple-400',
        'bg-purple-500',
        'bg-purple-600',
        'bg-purple-800',
        'bg-purple-900',
        'bg-indigo-400',
        'bg-indigo-900',
        'bg-gray-400',
        'bg-green-200',
        'bg-green-800',
        'bg-green-900',
        'bg-yellow-200',
        'bg-yellow-800',
        'bg-yellow-900',
        'bg-red-800',
        'bg-red-900',
        'bg-blue-400',
      ],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
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
