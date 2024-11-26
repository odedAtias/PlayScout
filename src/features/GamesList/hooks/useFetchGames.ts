// Third party libraries imports
import { useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';
import { RootState } from '../../../store/store';
import { orderType } from '../../SortSelector/types/types';

type ParamsDependencies = string | number | orderType | null;

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
};

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption } = useSelector((state: RootState) => state.gamesParams);

    const paramsDependencies: ParamsDependencies[] = [selectedGenre, selectedPlatform, selctedOrderOption];

    const params: Params = {
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        ordering: selctedOrderOption === "none" ? null : selctedOrderOption
    }

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, paramsDependencies);

    const gamesData = payload?.results || [];
    return { gamesData, error, isLoading };
};