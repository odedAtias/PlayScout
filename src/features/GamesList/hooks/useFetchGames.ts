// React imports
import { useEffect, useState, useCallback, useMemo } from 'react';
// Third party libraries imports
import { useDispatch, useSelector } from 'react-redux';
// FS imports (Default imports)
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import useOnScrollBottom from './useOnScrollBottom';
// FS imports (Named imports)
import { Game, GamesFetchResponse } from '../types/games';
import { AppDispatch, RootState } from '../../../store/store';
import { orderType } from '../../SortSelector/types/types';
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
    const dispatch = useDispatch<AppDispatch>();

    const { selectedGenre, selectedPlatform, selctedOrderOption, page, search } = useSelector((state: RootState) => state.gamesParams);

    const selectedGenreId = selectedGenre ? selectedGenre?.id : null;
    const selectedPlatformId = selectedPlatform? selectedPlatform?.id : null;

    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false); // Prevent overlapping fetches
    const [needToFetchMore, setNeedToFetchMore] = useState<boolean>(false);
    const [games, setGames] = useState<Game[]>([]);

    const paramsDependencies: ParamDependency[] = useMemo(() => [selectedGenreId, selectedPlatformId, selctedOrderOption, page, search], [selectedGenre, selectedPlatformId, selctedOrderOption, page, search]);

    const params: Params = useMemo(() => ({
        genres: selectedGenreId,
        parent_platforms: selectedPlatformId,
        ordering: selctedOrderOption === 'none' ? null : selctedOrderOption,
        page,
        page_size: PAGE_SIZE,
        search,
    }), [paramsDependencies]);

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, paramsDependencies);

    const fetchMoreGames = useCallback(() => {
        // Enable fetching more games only after the previous fetch has finished
        if (!needToFetchMore && !isFetchingMore) {
            if (!isFetchingMore && !isLoading) {
                dispatch(incrementPage());
                setNeedToFetchMore(true);
            }
        }
    }, [needToFetchMore, isFetchingMore, isLoading]);

    useOnScrollBottom(fetchMoreGames);

    useEffect(() => {
        page > 1 && dispatch(resetPage());
    }, [selectedGenreId, selectedPlatformId, selctedOrderOption, search]);

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

    return { games, error, isLoading, needToFetchMore };
};