// Third-party libraries imports
import { useInfiniteQuery } from "@tanstack/react-query";
// FS imports
import gamesService from "../services/games-service";
import { FetchResponse } from "../../../types/global";
import { Game } from "../types";
import { CACHE_KEY_GAMES, PAGE_SIZE } from "../utils";
import { useCreateContext } from "../../../hooks/useCreateContext";
import { GamesParamsContext } from "../../../context/gamesParams/GamesParamsContext";
import { orderType } from "../../SortSelector/types/order";
import { omitFalsyValues } from "../../../utils";

interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page_size: number;
    search: string;
}

export const useFetchGames = () => {

    const { state } = useCreateContext(GamesParamsContext);
    const { search, selectedGenre, selectedOrderOption, selectedPlatform } = state;

    const selectedGenreId = selectedGenre ? selectedGenre?.id : null;
    const selectedPlatformId = selectedPlatform ? selectedPlatform?.id : null;

    const params: Params = {
        genres: selectedGenreId,
        parent_platforms: selectedPlatformId,
        ordering: selectedOrderOption === 'none' ? null : selectedOrderOption,
        page_size: PAGE_SIZE,
        search,
    };

    const filteredParamsObject = omitFalsyValues<Params>(params)

    const getNextPageParam = (lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[]) => {
        return lastPage?.next ? allPages?.length + 1 : undefined;
    };

    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: [
            CACHE_KEY_GAMES,
            { filteredParamsObject },
        ],
        queryFn: ({ pageParam = 1 }) =>
            gamesService.getAll({ params: { ...params, page: pageParam } }),
        getNextPageParam,
        initialPageParam: 1,
    });
};