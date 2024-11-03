import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    ...Array.from({ length: 12 }, (_, i) => `lg:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:gap-x-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `ml:gap-x-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `gap-x-${i + 1}`),
  ],
  theme: {
    aspectRatio: {
      '7/4': '7 / 4',
      '5/4': '5 / 4',
      '128/25': '128 / 25',
      square: '1 / 1',
      video: '16 / 9',
    },
    backgroundImage: {
      lineGradient:
        'repeating-linear-gradient(-45deg,#F4F4F2 14px 36px,#E1E4D8 0px 37px)',
      twoColorGradient:
        'linear-gradient(90deg, rgba(176,214,227,1) 0%, rgba(176,214,227,1) 50%, rgba(201,193,147,1) 50%, rgba(201,193,147,1) 100%)',
    },
    colors: {
      'medium-grey': '#D1D1D1',
      grey: '#6D6D6D',
      orange: '#F05634',
      red: '#D64445',
      white: '#FFFFFF',
      'medium-red': '#F46263',
      'light-red': '#F9A1A0',
      'dark-blue': '#001769',
      black: '#2A2827',
      beige: '#F0EDE8',
      'light-grey': '#EFEFEF',
    },
    screens: {
      sm: '360px',
      md: '480px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        mono: ['var(--font-roboto-mono)'],
      },
      fontSize: {
        'body-caption': ['0.75rem', '1.125rem'],
        'body-caption-10': ['0.625rem', '1rem'],
        'body-caption-mob': ['0.625rem', '1rem'],
        'body-medium': ['0.75rem', '1.125rem'],
        h4: ['2.125rem', '134%'],
        'h4-mob': ['1.25rem', '1.875rem'],
        h3: ['3rem', 'initial'],
        'h3-mob': ['1.5rem', '2.125rem'],
        h2: ['3.75rem', '4.375rem'],
        h5: ['1.5rem', '2.25rem'],
        h6: ['1.25rem', 'initial'],
        'h5-regular': ['1.5rem', '2.125rem'],
        'h5-mob': ['1.125rem', '1.625rem'],
        body: ['1.125rem', '1.625rem'],
        'body-regular': ['1.125rem', '1.625rem'],
        'body-regular-mob': ['1rem', '1.5rem'],
        untitled: ['1.25rem', 'initial'],
      },
      fontWeight: {
        body: '500',
      },
      letterSpacing: {
        normal: '0.019rem',
        h5: '0.031rem',
        wider: '0.044rem',
      },
      margin: {
        30: '7.5rem',
        70: '17.5rem',
        50: '12.5rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
