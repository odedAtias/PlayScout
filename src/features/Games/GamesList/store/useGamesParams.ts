// Third party libraries imports
import { create } from 'zustand';

import { GamesParamsReducers, GamesParamsState } from 'features/Games/GamesList/store';

const initialState: GamesParamsState = {
    selectedGenre: null,
    selectedPlatform: null,
    selectedOrderOption: null,
    search: '',
};

const useGamesParams = create<GamesParamsState & GamesParamsReducers>((set) => ({
    // Initial state
    ...initialState,
    // Reducers
    selectGenre: (genre) => set(() => ({ selectedGenre: genre })),
    deselectGenre: () => set(() => ({ selectedGenre: null })),
    selectPlatform: (platform) => set(() => ({ selectedPlatform: platform })),
    selectOrderOption: (order) => set(() => ({ selectedOrderOption: order })),
    updateSearch: (search) => set(() => ({ search })),
}));

export default useGamesParams;