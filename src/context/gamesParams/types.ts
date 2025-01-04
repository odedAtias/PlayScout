// FS imports
import { orderType } from "../../features/SortSelector/types/types";

export interface SelectedGenre {
    id: number;
    name: string;
};

export interface SelectedPlatform {
    id: number;
    name: string;
};

export interface GamesParamsState {
    selectedGenre: SelectedGenre | null;
    selectedPlatform: SelectedPlatform | null;
    selectedOrderOption: orderType | null;
    page: number;
    search: string;
}

export type GamesParamsAction =
    | { type: "SELECT_GENRE"; payload: SelectedGenre }
    | { type: "DESELECT_GENRE" }
    | { type: "SELECT_PLATFORM"; payload: SelectedPlatform }
    | { type: "SELECT_ORDER_OPTION"; payload: orderType }
    | { type: "INCREMENT_PAGE" }
    | { type: "RESET_PAGE" }
    | { type: "UPDATE_SEARCH"; payload: string };