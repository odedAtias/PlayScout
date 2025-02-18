// Third-party libraries imports
import { useInfiniteQuery } from "@tanstack/react-query";
// FS imports
import { omitFalsyValues } from "features/Games/GamesList/utils";
import { FetchResponse } from "types";
import { gamesService } from "src/features/Games/GamesList/services";
import { Game, Params } from "src/features/Games/GamesList/types";
import { GAMES_CACHE_KEY, PAGE_SIZE } from "src/features/Games/GamesList/utils";
import { useGamesParams } from "features/Games/GamesList/store";

export const useFetchGames = () => {

    const { search, selectedGenre, selectedOrderOption, selectedPlatform } = useGamesParams();

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