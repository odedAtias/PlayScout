// Third party libraries imports
import { useQuery } from '@tanstack/react-query';
// FS imports
import { FetchResponse } from 'types';
import { genresService } from 'features/Genres/services';
import { GENRES_CACHE_KEY } from 'features/Genres/utils';
import { Genre } from 'features/Genres/types';

export const useFetchGenres = () => {

    const queryOptions = Object.freeze({
        queryKey: GENRES_CACHE_KEY,
        queryFn: genresService.getAll,
    });

    const { data, isLoading, error } = useQuery<FetchResponse<Genre>>(queryOptions);

    return { genres: data?.results || [], isLoading, error };
};