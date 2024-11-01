// FS imports
import useFetchData from '../../../hooks/useFetchData';
import genreService from '../services/genres-service';

export const useFetchGenres = () => {
    const { payload, isLoading, error } = useFetchData<any>(genreService);
    const genres = payload?.results || [];
    return { genres, error, isLoading };
};