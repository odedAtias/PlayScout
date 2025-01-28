// Third party libraries imports
import { create } from 'zustand';

import { SelectedGenre, SelectedPlatform } from './types';

import { orderType } from 'src/features/SortSelector/types';

interface GamesParamsState {
    selectedGenre: SelectedGenre | null;
    selectedPlatform: SelectedPlatform | null;
    selectedOrderOption: orderType | null;
    search: string;
};

interface GamesParamsReducers {
    selectGenre: (genre: SelectedGenre) => void;
    deselectGenre: () => void;
    selectPlatform: (platform: SelectedPlatform) => void;
    selectOrderOption: (order: orderType) => void;
    updateSearch: (search: string) => void;
};

const initialState: GamesParamsState = {
    selectedGenre: null,
    selectedPlatform: null,
    selectedOrderOption: null,
    search: '',
};

const useGamesParams = create<GamesParamsState & GamesParamsReducers>((set) => ({
    ...initialState,
    selectGenre: (genre) => set(() => ({ selectedGenre: genre })),
    deselectGenre: () => set(() => ({ selectedGenre: null })),
    selectPlatform: (platform) => set(() => ({ selectedPlatform: platform })),
    selectOrderOption: (order) => set(() => ({ selectedOrderOption: order })),
    updateSearch: (search) => set(() => ({ search })),
}));

export default useGamesParams;