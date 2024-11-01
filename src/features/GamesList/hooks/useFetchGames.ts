// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';

export const useFetchGames = () => {
    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService);
    const games = payload?.results || [];
    return { games, error, isLoading };
};