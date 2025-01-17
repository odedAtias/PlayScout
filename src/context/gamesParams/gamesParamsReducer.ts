// FS imports
import { GamesParamsState, GamesParamsAction } from "context/gamesParams";

export const gamesParamsReducer = (state: GamesParamsState, action: GamesParamsAction): GamesParamsState => {
    switch (action.type) {
        case "SELECT_GENRE":
            return { ...state, selectedGenre: action.payload };
        case "DESELECT_GENRE":
            return { ...state, selectedGenre: null };
        case "SELECT_PLATFORM":
            return { ...state, selectedPlatform: action.payload };
        case "SELECT_ORDER_OPTION":
            return { ...state, selectedOrderOption: action.payload };
        case "UPDATE_SEARCH":
            return { ...state, search: action.payload };
        default:
            return state;
    }
};