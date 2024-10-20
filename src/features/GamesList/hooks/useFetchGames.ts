// React imports
import { useState, useEffect } from 'react';
// FS imports
import gamesService from '../services/games-service';
import { Game } from '../types/games';
import { getRequestError } from '../../../utils/errors';

const useFetchGames = () => {
    const [games, setGames] = useState<Game[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const cleanUp = (controller: AbortController) => {
        return controller.abort();
    };

    useEffect(() => {
        const fetchGames = async () => {
            const { request, controller } = gamesService.getGames();
            try {
                const { data: { results } } = await request;
                setGames(results || []);
            }
            catch (err) {
                setError(getRequestError(err));
            }
            finally {
                setIsLoading(false);
            }
            () => cleanUp(controller);
        };
        fetchGames();
    }, []);

    return { games, isLoading, error };

};

export default useFetchGames;