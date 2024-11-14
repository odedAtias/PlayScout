import { configureStore } from '@reduxjs/toolkit';
import genreReducer from './genre/genreSlice';

export const store = configureStore({ reducer: genreReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;