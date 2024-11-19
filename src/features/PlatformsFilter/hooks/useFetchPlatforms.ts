// FS imports
import useFetchData from "../../../hooks/useFetchData";
import platformsService from "../services/platforms-service";
import { PlatfromsFetchResponse } from "../types";


export const useFetchPlatforms = () => {
    const { payload, isLoading, error } = useFetchData<PlatfromsFetchResponse>(platformsService);
    const platforms = payload?.results || [];
    return { platforms, error, isLoading };
};