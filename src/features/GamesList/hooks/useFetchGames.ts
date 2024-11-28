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

type ParamDependency = string | number | orderType | null;

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page: number;
    page_size: number;
}

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption } = useSelector(
        (state: RootState) => state.gamesParams
    );

    const [page, setPage] = useState<number>(1);
    const [games, setGames] = useState<Game[]>([]);

    const [isFetching, setIsFetching] = useState<boolean>(false); // Prevent overlapping fetches
    const [needToFetchMore, setNeedToFetchMore] = useState<boolean>(false);

    const paramsDependencies: ParamDependency[] = [
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
        // Enable fetching more games only after the previous fetch has finished
        if (!needToFetchMore && !isFetching) {
            setNeedToFetchMore(true);
            setPage((prevPage: number) => prevPage + 1);
        }
    }, [needToFetchMore, isFetching]);

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(
        gamesService,
        { params },
        paramsDependencies
    );

    useEffect(() => {
        setPage(1);
    }, [selectedGenre, selectedPlatform, selctedOrderOption]);

    useEffect(() => {
        if (payload?.results) {
            if (page > 1) {
                const newGames = payload?.results || [];
                setGames((prevGames: Game[]) => ([...prevGames, ...newGames]));
            }
            else {
                setGames(payload?.results || []);
            }
        }
        setNeedToFetchMore(false);
        setIsFetching(false);
    }, [payload?.results]);

    useEffect(() => {
        if (needToFetchMore) {
            setIsFetching(true);
        }
    }, [needToFetchMore]);

    useOnScrollBottom(fetchMoreGames);

    return { games, error, isLoading };
};
