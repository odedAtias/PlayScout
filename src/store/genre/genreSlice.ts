// Third party libraries imports
import { createSlice } from "@reduxjs/toolkit";

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
        selectGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        deselectGenre: (state) => {
            state.selectedGenre = null;
        },
    },
});

export const { selectGenre, deselectGenre } = genreSlice.actions;

export default genreSlice.reducer;