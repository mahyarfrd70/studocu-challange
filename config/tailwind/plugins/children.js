const plugin = require('tailwindcss/plugin');

const childrenPlugin = plugin(function ({addVariant, e}) {
  addVariant('children', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`children${separator}${className}`)} > *`;
    });
  });
});

module.exports = childrenPlugin;
