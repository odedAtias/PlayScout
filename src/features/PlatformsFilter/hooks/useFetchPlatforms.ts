// Third party libraries imports
import { useQuery } from "@tanstack/react-query";

// FS imports
import platformsService from "../services/platforms-service";
import { PlatfromsFetchResponse } from "../types";
import { PLATFORMS_CACHE_KEY } from "../constants";

export const useFetchPlatforms = () => {

    const queryOptions = Object.freeze({
        queryKey: PLATFORMS_CACHE_KEY,
        queryFn: platformsService.getAll,
    });

    const { data, error, isLoading } = useQuery<PlatfromsFetchResponse>(queryOptions);

    return { platforms: data?.results || [], error, isLoading };
};
