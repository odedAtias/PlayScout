// Third-party libraries imports
import { useInfiniteQuery } from "@tanstack/react-query";
// FS imports
import gamesService from "../services/games-service";
import { FetchResponse } from "../../../types/global";
import { Game, Params } from "../types";
import { GAMES_CACHE_KEY, PAGE_SIZE } from "../utils";
import { useCreateContext } from "../../../hooks/useCreateContext";
import { GamesParamsContext } from "../../../context/gamesParams/GamesParamsContext";
import { omitFalsyValues } from "../../../utils";

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
            GAMES_CACHE_KEY,
            { filteredParamsObject },
        ],
        queryFn: ({ pageParam = 1 }) =>
            gamesService.getAll({ params: { ...params, page: pageParam } }),
        getNextPageParam,
        initialPageParam: 1,
    });
};