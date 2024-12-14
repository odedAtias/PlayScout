// Third parties libraries imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderType } from "../../features/SortSelector/types/types";
import { SelectedGenre, SelectedPlatform } from "./types";

interface GamesParams {
    selectedGenre: SelectedGenre | null;
    selectedPlatform: SelectedPlatform | null;
    selctedOrderOption: orderType | null;
    page: number;
    search: string,

};

const initialState: GamesParams = {
    selectedGenre: null,
    selectedPlatform: null,
    selctedOrderOption: null,
    page: 1,
    search: '',
};

const gamesParamsSlice = createSlice({
    initialState,
    name: "gamesParams",
    reducers: {
        // selectedGenre reducers
        selectGenre: (state, action: PayloadAction<SelectedGenre>) => {
            state.selectedGenre = action.payload;
        },
        deselectGenre: (state) => {
            state.selectedGenre = null;
        },
        // selectedPlatforms reducers
        selectPlatform: (state, action: PayloadAction<SelectedPlatform>) => {
            state.selectedPlatform = action.payload;
        },
        // selected order option reducers
        selectOrderOption: (state, action: PayloadAction<orderType>) => {
            state.selctedOrderOption = action.payload;
        },
        // page reducers
        incrementPage: (state) => {
            state.page++
        },
        resetPage: (state) => {
            state.page = 1;
        },
        // search text reducers
        updateSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { selectGenre, selectPlatform, deselectGenre, selectOrderOption, incrementPage, resetPage, updateSearch } = gamesParamsSlice.actions;

export default gamesParamsSlice.reducer;