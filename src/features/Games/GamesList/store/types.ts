// FS imports
import { orderType } from "features/SortSelector/types"

export interface SelectedGenre {
    id: number;
    name: string;
}

export interface SelectedPlatform {
    id: number;
    name: string;
}

export interface GamesParamsState {
    selectedGenre: SelectedGenre | null;
    selectedPlatform: SelectedPlatform | null;
    selectedOrderOption: orderType | null;
    search: string;
}

export interface GamesParamsReducers {
    selectGenre: (genre: SelectedGenre) => void;
    deselectGenre: () => void;
    selectPlatform: (platform: SelectedPlatform) => void;
    selectOrderOption: (order: orderType) => void;
    updateSearch: (search: string) => void;
};