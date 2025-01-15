// Third party libraries imports
import { useQuery } from '@tanstack/react-query';
// FS imports
import genresService from '../services/genres-service';
import { GENRES_CACHE_KEY } from '../utils';
import { FetchResponse } from '../../../types/global';
import { Genre } from '../types';

export const useFetchGenres = () => {

    const queryOptions = Object.freeze({
        queryKey: GENRES_CACHE_KEY,
        queryFn: genresService.getAll,
    });

    const { data, isLoading, error } = useQuery<FetchResponse<Genre>>(queryOptions);

    return { genres: data?.results || [], isLoading, error };
};