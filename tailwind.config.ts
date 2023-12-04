import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
      },
      colors: {
        primary: {
          DEFAULT: '#0AA884',
          100: '#0AA884',
          200: '#0AA884',
          300: '#0AA884',
          400: '#0AA884',
          500: '#0AA884',
          600: '#0AA884',
          700: '#0AA884',
          800: '#0AA884',
          900: '#0AA884',
        },
        gray: {
          DEFAULT: '#F5F5F5',
          light: '#FAFBFC',
          dark: 'rgba(30, 30, 30, 0.7)',
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
