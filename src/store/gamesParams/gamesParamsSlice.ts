// Third parties libraries imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderType } from "../../features/SortSelector/types/types";

interface GamesParams {
    selectedGenre: number | null;
    selectedPlatform: number | null;
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