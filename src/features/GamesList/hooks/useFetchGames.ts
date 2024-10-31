// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { Game, GamesFetchResponse } from '../types/games';

const useFetchGames = () => {
    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService);
    const games: Game[] = payload?.results || [];
    return { games, error, isLoading };
};

export default useFetchGames;