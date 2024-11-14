// Third party libraries imports
import { useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';
import { RootState } from '../../../store/store';

export const useFetchGames = () => {
    const selectedGenre = useSelector((state: RootState) => state.selectedGenre);
    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params: { genres: selectedGenre } }, [selectedGenre]);
    const games = payload?.results || [];
    return { games, error, isLoading };
};