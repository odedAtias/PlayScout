// Third party libraries imports
import { useQuery } from '@tanstack/react-query';
// FS imports
import genresService from '../services/genres-service';
import { GenresFetchResponse } from '../types';
import { REACT_QUERY_KEY_GENRES } from '../constants';


export const useFetchGenres = () => {

    const queryOptions = Object.freeze({
        queryKey: REACT_QUERY_KEY_GENRES,
        queryFn: genresService.getAll,
    });

    const { data, isLoading, error } = useQuery<GenresFetchResponse>(queryOptions);

    return { genres: data?.results || [], isLoading, error };
};