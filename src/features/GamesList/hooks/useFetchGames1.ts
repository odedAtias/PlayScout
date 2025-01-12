// Third-party libraries imports
import { useInfiniteQuery } from "@tanstack/react-query";
// FS imports
import { FetchResponse } from "../../../types/global";
import { Game } from "../types";
import gamesService from "../services/games-service";
import { CACHE_KEY_GAMES, PAGE_SIZE } from "../utils";

export const useFetchGames1 = () => {

    const getNextPageParam = (lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[]) => {
        return lastPage?.results?.length > 0 ? allPages?.length + 1 : undefined;
    };

    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: CACHE_KEY_GAMES,
        queryFn: ({ pageParam = 1 }) => gamesService.getAll({ params: { page: pageParam, page_size: PAGE_SIZE } }),
        getNextPageParam,
        initialPageParam: 1,
    });
};