// Third party libraries imports
import { useDispatch, useSelector } from 'react-redux';
// FS imports
import useFetchData from '../../../hooks/useFetchData';
import gamesService from '../services/games-service';
import { GamesFetchResponse } from '../types/games';
import { AppDispatch, RootState } from '../../../store/store';
import { PAGE_SIZE } from '../utils';
import { incrementPage } from '../../../store/gamesParams/gamesParamsSlice';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

export const useFetchGames = () => {
    const { selectedGenre, selectedPlatform, selctedOrderOption, page } = useSelector((state: RootState) => state.gamesParams);
    const [games, setGames] = useState([]);

    const dispatch = useDispatch<AppDispatch>();

    const params = Object.freeze({
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
        ordering: selctedOrderOption === "none" ? null : selctedOrderOption,
        page: page,
        page_size: PAGE_SIZE,
    });

    const { payload, isLoading, error } = useFetchData<GamesFetchResponse>(gamesService, { params }, [selectedGenre, selectedPlatform, selctedOrderOption, page]);

    useEffect(() => {
        if (payload?.results) {
            setGames((prevGames) => [...prevGames, ...payload.results]); // Append new results
        }
    }, [payload]);

    const loadMoreGames = () => {
        dispatch(incrementPage());
    };

    return { games, error, isLoading, loadMoreGames };
};