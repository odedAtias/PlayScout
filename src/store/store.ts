// Third party libraries imports
import { configureStore } from '@reduxjs/toolkit';
// FS imports
import genreReducer from './genre/genreSlice';
import platformReducer from './platforms/platformsSlice';

export const store = configureStore({
    reducer: {
        genre: genreReducer,
        platform: platformReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;