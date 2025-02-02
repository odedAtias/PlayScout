// Third party libraries imports
import { useQuery } from "@tanstack/react-query";
// FS imports
import { gamesService } from "features/Games/GamesList/services";
import { GameDetails } from "features/Games/GameDetails/types";

export const useFetchGame = (id: string) => {

    const queryOptions = Object.freeze({
        queryKey: ['game', id],
        queryFn: () => gamesService.getById<GameDetails>(id),
    });

    return useQuery(queryOptions);
};