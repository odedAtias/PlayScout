// Third party libraries imports
import { useQuery } from "@tanstack/react-query";

// FS imports
import { FetchResponse } from "types";
import { platformsService } from "features/PlatformsFilter/services";
import { PLATFORMS_CACHE_KEY } from "features/PlatformsFilter/utils";
import { Platform } from "features/PlatformsFilter/types";

export const useFetchPlatforms = () => {

    const queryOptions = Object.freeze({
        queryKey: PLATFORMS_CACHE_KEY,
        queryFn: platformsService.getAll,
    });

    const { data, error, isLoading } = useQuery<FetchResponse<Platform>>(queryOptions);

    return { platforms: data?.results || [], error, isLoading };
};
