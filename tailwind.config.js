module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('./config/tailwind/plugins/children')],
};
