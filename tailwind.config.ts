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
    },
    extend: {
      fontSize: {
        xs: ['0.75rem', '1.125rem'],
        h4: ['2.125rem', 'auto'],
        h2: ['3.75rem', '4.375rem'],
        h5: ['1.5rem', '2.25rem'],
        'body-regular': ['1.125rem', '1.625rem'],
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
