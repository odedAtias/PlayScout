// FS imports
import useFetchData from '../../../hooks/useFetchData';
import genreService from '../services/genres-service';
import { GenresFetchResponse } from '../types';

export const useFetchGenres = () => {
    const { payload, isLoading, error } = useFetchData<GenresFetchResponse>(genreService);
    const genres = payload?.results || [];
    return { genres, error, isLoading };
};