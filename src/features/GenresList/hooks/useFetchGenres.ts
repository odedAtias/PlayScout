// FS imports
import useFetchData from '../../../hooks/useFetchData';
import genreService from '../services/genres-service';
import { GenresFetchResponse } from '../types';

export const useFetchGenres = () => {
    const response = useFetchData<GenresFetchResponse>(genreService);
    return { ...response, genres: response?.payload?.results || [] };
};