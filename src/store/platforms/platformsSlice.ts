// Third party libraries imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlatformState {
    selectedPlatform: number | null;
};

const initialState: PlatformState = {
    selectedPlatform: null,
};

const platformSlice = createSlice({
    name: "platform",
    initialState,
    reducers: {
        selectPlatform: (state, action: PayloadAction<number>) => {
            state.selectedPlatform = action.payload;
        },
    },
});

export const { selectPlatform } = platformSlice.actions;

export default platformSlice.reducer;