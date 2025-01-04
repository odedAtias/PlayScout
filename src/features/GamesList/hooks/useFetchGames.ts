// React imports
import { useEffect, useState, useCallback, useMemo } from 'react';
// FS imports (Default imports)
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import useOnScrollBottom from './useOnScrollBottom';
// FS imports (Named imports)
import { Game, GamesFetchResponse } from '../types/games';
import { orderType } from '../../SortSelector/types/types';
import { PAGE_SIZE } from '../utils/constants';
import { incrementPage, resetPage } from '../../../store/gamesParams/gamesParamsSlice';
import useCreateContext from '../../../hooks/useCreateContext';
import { GamesParamsContext } from '../../../context/gamesParams/GamesParamsContext';

type ParamDependency = string | number | orderType | null;

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page: number;
    page_size: number;
}

export const useFetchGames = () => {
    const { state, dispatch } = useCreateContext(GamesParamsContext);

    const { selectedGenre, selectedPlatform, selectedOrderOption, page, search } = state;

    const selectedGenreId = selectedGenre ? selectedGenre?.id : null;
    const selectedPlatformId = selectedPlatform ? selectedPlatform?.id : null;

    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false); // Prevent overlapping fetches
    const [needToFetchMore, setNeedToFetchMore] = useState<boolean>(false);
    const [games, setGames] = useState<Game[]>([]);

    const paramsDependencies: ParamDependency[] = useMemo(() => [selectedGenreId, selectedPlatformId, selectedOrderOption, page, search], [selectedGenre, selectedPlatformId, selectedOrderOption, page, search]);

    const params: Params = useMemo(() => ({
        genres: selectedGenreId,
        parent_platforms: selectedPlatformId,
        ordering: selectedOrderOption === 'none' ? null : selectedOrderOption,
        page,
        page_size: PAGE_SIZE,
        search,
    }), [paramsDependencies]);

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, paramsDependencies);

    const fetchMoreGames = useCallback(() => {
        // Enable fetching more games only after the previous fetch has finished
        if (!needToFetchMore && !isFetchingMore) {
            if (!isFetchingMore && !isLoading) {
                dispatch({ type: 'INCREMENT_PAGE' });
                setNeedToFetchMore(true);
            }
        }
    }, [needToFetchMore, isFetchingMore, isLoading]);

    useOnScrollBottom(fetchMoreGames);

    useEffect(() => {
        page > 1 && dispatch({ type: 'RESET_PAGE' });
    }, [selectedGenreId, selectedPlatformId, selectedOrderOption, search]);

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