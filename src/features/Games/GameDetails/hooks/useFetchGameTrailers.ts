// Third party libraries imports
import { useQuery } from "@tanstack/react-query";
// FS imports
import { HttpService } from "services";
import { Trailer } from "features/Games/GameDetails/types";



export const useFetchGameTrailers = (id: string) => {

    const gameTrailersService = new HttpService(`/games/${id}/movies`);

    const queryOptions = Object.freeze({
        queryKey: ['trailers', id],
        queryFn: gameTrailersService.getAll,
    });

    return useQuery<Trailer>(queryOptions);
};