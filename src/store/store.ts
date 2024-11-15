// Third party libraries imports
import { configureStore } from '@reduxjs/toolkit';
// FS imports
import genreReducer from './genre/genreSlice';

export const store = configureStore({
    reducer: {
        genre: genreReducer,
        // Add other reducers here if needed...

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;