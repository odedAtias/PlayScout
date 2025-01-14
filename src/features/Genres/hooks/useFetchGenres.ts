// Third party libraries imports
import { useQuery } from '@tanstack/react-query';
// FS imports
import genresService from '../services/genres-service';
import { REACT_QUERY_KEY_GENRES } from '../utils';
import { FetchResponse } from '../../../types/global';
import { Genre } from '../types';

export const useFetchGenres = () => {

    const queryOptions = Object.freeze({
        queryKey: REACT_QUERY_KEY_GENRES,
        queryFn: genresService.getAll,
    });

    const { data, isLoading, error } = useQuery<FetchResponse<Genre>>(queryOptions);

    return { genres: data?.results || [], isLoading, error };
};