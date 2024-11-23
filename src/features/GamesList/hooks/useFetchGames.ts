// Third party libraries imports
import { useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';
import { RootState } from '../../../store/store';

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption } = useSelector((state: RootState) => state.gamesParams);
    const params = Object.freeze({
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        ordering: selctedOrderOption === "none" ? null : selctedOrderOption,
        page: 1,
        page_size: 30,
    });
    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, [selectedGenre, selectedPlatform, selctedOrderOption]);
    const games = payload?.results || [];
    return { games, error, isLoading };
};