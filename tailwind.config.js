/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, './components/**/*.(ts|tsx)')],
  theme: {
    extend: {
      boxShadow: {
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
