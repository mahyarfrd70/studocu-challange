import '../src/assets/styles/globals.css';

export const parameters = {
  passArgsFirst: true,
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
