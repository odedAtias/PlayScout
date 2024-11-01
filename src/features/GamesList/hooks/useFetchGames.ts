// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';

export const useFetchGames = () => {
    const response = useFetchData<GamesFetchResponse>(gamesService);
    return { ...response, games: response?.payload?.results || [] };
};