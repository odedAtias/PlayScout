// FS imports
import { GamesParamsState, GamesParamsAction } from "./types";

export const initialState: GamesParamsState = {
    selectedGenre: null,
    selectedPlatform: null,
    selectedOrderOption: null,
    page: 1,
    search: "",
};

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
        case "INCREMENT_PAGE":
            return { ...state, page: state.page + 1 };
        case "RESET_PAGE":
            return { ...state, page: 1 };
        case "UPDATE_SEARCH":
            return { ...state, search: action.payload };
        default:
            return state;
    }
};