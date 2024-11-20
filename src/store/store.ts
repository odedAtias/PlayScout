// Third party libraries imports
import { configureStore } from '@reduxjs/toolkit';
// FS imports
import gamesParamsReducer from './gamesParams/gamesParamsSlice';

export const store = configureStore({
    reducer: {
        gamesParams: gamesParamsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;