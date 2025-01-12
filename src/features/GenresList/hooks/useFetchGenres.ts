// Third party libraries imports
import { useQuery } from '@tanstack/react-query';
// FS imports
import genresService from '../services/genres-service';
import { GenresFetchResponse } from '../types';


export const useFetchGenres = () => {
    const { data, isLoading, error } = useQuery<GenresFetchResponse>({ queryKey: ['genres'], queryFn: genresService.getAll<GenresFetchResponse> });
    return { genres: data?.results || [], isLoading, error };
};