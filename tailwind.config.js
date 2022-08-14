/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, './components/**/*.(ts|tsx)')],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A9E0F1',
          200: '#81CFEA',
          300: '#58BDE2',
          400: '#30A9DA',
          500: '#0994D1',
          600: '#096BBD',
          700: '#0948A9',
          800: '#092B95',
          900: '#081481',
        },
        secondary: {
          100: '#A9F2C8',
          200: '#7FEBAF',
          300: '#57E498',
          400: '#2FDC81',
          500: '#07D36C',
          600: '#07BF7E',
          700: '#07AA89',
          800: '#07968E',
          900: '#077782',
        },
        tertiary: {
          100: '#F8F9FA',
          200: '#D7DDE3',
          300: '#B7C1CB',
          400: '#96A4B4',
          500: '#76879C',
          600: '#626B81',
          700: '#4D5165',
          800: '#38384A',
          900: '#25242F',
        },
      },
      boxShadow: {
        inner: 'inset 1px 1px, inset -1px -1px',
        'inner-l': 'inset 1px 0',
        'inner-l-2': 'inset 2px 0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
