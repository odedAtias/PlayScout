// React imports
import { useEffect, useState } from 'react';
// Third party libraries imports
import { useDispatch, useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { Game, GamesFetchResponse } from '../types/games';
import { AppDispatch, RootState } from '../../../store/store';
import { PAGE_SIZE as page_size } from '../utils';
import { incrementPage } from '../../../store/gamesParams/gamesParamsSlice';
import { orderType } from '../../SortSelector/types/types';

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page: number;
    page_size: number;
}

export const useFetchGames = () => {
    const [games, setGames] = useState<Game[]>([]);

    const { selectedGenre, selectedPlatform, selctedOrderOption, page } = useSelector((state: RootState) => state.gamesParams);

    const dispatch = useDispatch<AppDispatch>();

    const params: Params = Object.freeze({
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        page,
        page_size,
        ordering: selctedOrderOption === "none" ? null : selctedOrderOption,
    });

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, [selectedGenre, selectedPlatform, selctedOrderOption, page]);

    useEffect(() => {
        payload?.results && setGames((prevGames: Game[]) => [...prevGames, ...(payload?.results || [])]);
    }, [payload]);

    const loadMoreGames = () => {
        dispatch(incrementPage());
    };

    return { games, error, isLoading, loadMoreGames };
};