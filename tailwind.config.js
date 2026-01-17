/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#DC2626',
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['"Zalando Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Zalando Sans SemiExpanded"', 'system-ui', 'sans-serif'],
        display: ['"Zalando Sans Expanded"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'huge': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        blackcat: {
          'primary': '#000000',
          'secondary': '#FFFFFF',
          'accent': '#DC2626',
          'neutral': '#FAFAFA',
          'base-100': '#FFFFFF',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  },
}

