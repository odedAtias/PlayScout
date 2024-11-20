// Third parties libraries imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GamesParams {
    selectedGenre: number | null;
    selectedPlatform: number | null;
};

const initialState: GamesParams = {
    selectedGenre: null,
    selectedPlatform: null,
};

const gamesParamsSlice = createSlice({
    initialState,
    name: "gamesParams",
    reducers: {
        // selectedGenre reducers
        selectGenre: (state, action: PayloadAction<number>) => {
            state.selectedGenre = action.payload;
        },
        deselectGenre: (state) => {
            state.selectedGenre = null;
        },
        // selectedPlatforms reducers
        selectPlatform: (state, action: PayloadAction<number>) => {
            state.selectedPlatform = action.payload;
        },
    },
});

export const { selectGenre, selectPlatform, deselectGenre } = gamesParamsSlice.actions;

export default gamesParamsSlice.reducer;