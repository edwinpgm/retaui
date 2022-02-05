/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, './components/**/*.(ts|tsx)')],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
