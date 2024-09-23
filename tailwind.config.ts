import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      md: '480px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        mono: ['var(--font-roboto-mono)'],
      },
      fontSize: {
        'body-caption': ['0.75rem', '1.125rem'],
        h4: ['2.125rem', '134%'],
        h3: ['3rem', 'initial'],
        h2: ['3.75rem', '4.375rem'],
        h5: ['1.5rem', '2.25rem'],
        'h5-regular': ['1.5rem', '2.125rem'],
        body: ['1.125rem', '1.625rem'],
        'body-regular': ['1.125rem', '1.625rem'],
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
