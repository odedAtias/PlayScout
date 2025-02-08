// Third party libraries imports
import { useQuery } from '@tanstack/react-query'
// FS imports
import { HttpService } from 'services'
import { FetchResponse } from 'types';
import { Screenshot } from 'features/Games/GameDetails/types';

export const useFetchGameScreenshots = (gameId: string) => {

    const gameScreenshotsService = new HttpService(`/games/${gameId}/screenshots`);

    const queryOptions = Object.freeze({
        queryKey: ['screenshots', gameId],
        queryFn: gameScreenshotsService.getAll,
    });

    const response = useQuery<FetchResponse<Screenshot>>(queryOptions);

    return { ...response, data: response?.data?.results };

};