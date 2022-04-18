import {configureStore} from '@reduxjs/toolkit';
import type {Store} from '@reduxjs/toolkit';

import {render as rtlRender, RenderOptions} from '@testing-library/react';
import React, {PropsWithChildren, ReactElement} from 'react';
import {Provider} from 'react-redux';

import {AppReducer} from './redux/store';

interface WrapperRenderOptions extends RenderOptions {
  preloadedState?: any;
  store?: Store;
}

function render(
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({reducer: AppReducer, preloadedState}),
    ...renderOptions
  }: WrapperRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<Record<string, unknown>>) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react';
export {render};
