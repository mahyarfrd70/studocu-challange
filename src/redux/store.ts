import {configureStore} from '@reduxjs/toolkit';

import questionsReducer from './questions/slice';

export const AppReducer = {
  questions: questionsReducer,
};

export const store = configureStore({
  reducer: AppReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
