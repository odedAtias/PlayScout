// React imports
import { useState, useEffect } from 'react';
// FS imports
import gamesService from '../services/games-service';
import { CanceledError } from '../services/api-client';
import { Game } from '../types/games';

const useFetchGames = () => {
    const [games, setGames] = useState<Game[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const cleanUp = (controller: AbortController) => {
        return controller.abort();
    };

    useEffect(() => {
        const fetchGames = async () => {
            const { request, controller } = gamesService.getGames();
            try {
                const { data } = await request;
                console.log(data); // Remove this line for production code. Logs fetched games data to console.
                setGames(data?.results || []);
            }
            catch (err) {
                err instanceof CanceledError && setError(err?.message)
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