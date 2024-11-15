// Third party libraries imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenreState {
    selectedGenre: number | null;
};

const initialState: GenreState = {
    selectedGenre: null,
};

const genreSlice = createSlice({
    name: "genre",
    initialState,
    reducers: {
        selectGenre: (state, action: PayloadAction<number>) => {
            state.selectedGenre = action.payload;
        },
        deselectGenre: (state) => {
            state.selectedGenre = null;
        },
    },
});

export const { selectGenre, deselectGenre } = genreSlice.actions;

export default genreSlice.reducer;