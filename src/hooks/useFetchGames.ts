// React imports
import { useState, useEffect } from 'react';
// FS imports
import gamesService from '../services/games-service';
import { CanceledError } from '../services/api-client';

const useFetchGames = () => {
    const [games, setGames] = useState([]);
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
                setGames(data);
            }
            catch (err) {
                if (err instanceof CanceledError) {
                    setError(err?.message)
                }
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