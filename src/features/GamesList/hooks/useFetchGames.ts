// Third party libraries imports
import { useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { Game, GamesFetchResponse } from '../types/games';
import { RootState } from '../../../store/store';
import { orderType } from '../../SortSelector/types/types';
import { useEffect, useState, useCallback } from 'react';
import useOnScrollBottom from './useOnScrollBottom';
import { PAGE_SIZE } from '../utils/constants';

type ParamsDependencies = string | number | orderType | null;

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page: number;
    page_size: number;
}

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption } = useSelector((state: RootState) => state.gamesParams);

    const [page, setPage] = useState<number>(1);
    const [needToFetchMore, setNeedToFetchMore] = useState<boolean>(false);
    const [games, setGames] = useState<Game[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false); // Prevent overlapping fetches

    const paramsDependencies: ParamsDependencies[] = [
        selectedGenre,
        selectedPlatform,
        selctedOrderOption,
        page,
    ];

    const params: Params = {
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        ordering: selctedOrderOption === 'none' ? null : selctedOrderOption,
        page: page,
        page_size: PAGE_SIZE,
    };

    const fetchMoreGames = useCallback(() => {
        // Enable to fetch more games only after the previous fetch has finished
        if (!needToFetchMore && !isFetching) {
            setNeedToFetchMore(true);
            setPage((prevPage: number) => prevPage + 1);
        }
    }, [needToFetchMore, isFetching]);

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, paramsDependencies);

    useEffect(() => {
        if (payload?.results) {
            setGames((prevGames: Game[]) => {
                const existingIds = new Set(prevGames.map((game) => game.id));
                const newGames = payload.results.filter((game: Game) => !existingIds.has(game.id));
                return [...prevGames, ...newGames];
            });
        }
        setNeedToFetchMore(false);
        setIsFetching(false);
    }, [payload?.results]);

    // Prevent multiple fetchMoreGames calls in quick succession
    useEffect(() => {
        if (needToFetchMore) {
            setIsFetching(true);
        }
    }, [needToFetchMore]);

    useOnScrollBottom(fetchMoreGames);

    return { games, error, isLoading };
};