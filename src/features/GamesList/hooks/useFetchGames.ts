// Third party libraries imports
import { useDispatch, useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import useOnScrollBottom from './useOnScrollBottom';
import { Game, GamesFetchResponse } from '../types/games';
import { AppDispatch, RootState } from '../../../store/store';
import { orderType } from '../../SortSelector/types/types';
import { useEffect, useState, useCallback } from 'react';
import { PAGE_SIZE } from '../utils/constants';
import { incrementPage, resetPage } from '../../../store/gamesParams/gamesParamsSlice';

type ParamDependency = string | number | orderType | null;

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page: number;
    page_size: number;
}

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption, page } = useSelector((state: RootState) => state.gamesParams);

    const [games, setGames] = useState<Game[]>([]);

    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false); // Prevent overlapping fetches
    const [needToFetchMore, setNeedToFetchMore] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const paramsDependencies: ParamDependency[] = [selectedGenre, selectedPlatform, selctedOrderOption, page];

    const params: Params = {
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        ordering: selctedOrderOption === 'none' ? null : selctedOrderOption,
        page: page,
        page_size: PAGE_SIZE,
    };

    const fetchMoreGames = useCallback(() => {
        // Enable fetching more games only after the previous fetch has finished
        if (!needToFetchMore && !isFetchingMore) {
            dispatch(incrementPage());
            setNeedToFetchMore(true);
        }
    }, [needToFetchMore, isFetchingMore]);

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, paramsDependencies);

    useEffect(() => {
        page > 1 && dispatch(resetPage());
    }, [selectedGenre, selectedPlatform, selctedOrderOption]);

    useEffect(() => {
        if (payload?.results && payload?.results?.length > 0) {
            setGames((prevGames: Game[]) => (page > 1 ? [...prevGames, ...payload?.results] : [...payload?.results]));
            setNeedToFetchMore(false);
            setIsFetchingMore(false);
        }
    }, [payload?.results]);

    useEffect(() => {
        needToFetchMore && setIsFetchingMore(true);
    }, [needToFetchMore]);

    useOnScrollBottom(fetchMoreGames);

    return { games, error, isLoading, needToFetchMore };
};
