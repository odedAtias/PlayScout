// Third-party libraries imports
import { useInfiniteQuery } from "@tanstack/react-query";
// FS imports
import { omitFalsyValues } from "utils";
import { FetchResponse } from "types";
import { useCreateContext } from "hooks";
import { gamesService } from "features/Games/services";
import { Game, Params } from "features/Games/types";
import { GAMES_CACHE_KEY, PAGE_SIZE } from "features/Games/utils";
import { GamesParamsContext } from "context/gamesParams";

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