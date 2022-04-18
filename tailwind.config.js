const plugin = require('tailwindcss/plugin');

const childrenPlugin = plugin(function ({addVariant, e}) {
  addVariant('children', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`children${separator}${className}`)} > *`;
    });
  });
});

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), childrenPlugin],
};
