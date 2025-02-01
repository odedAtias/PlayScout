// Third party libraries imports
import { useQuery } from "@tanstack/react-query";
import { gamesService } from "features/Games/GamesList/services";
import { GameDetails } from "../types";

export const useFetchGame = (id?: string) => {

    if (!id) {
        throw new Error("Invalid game id");
    }

    const queryOptions = Object.freeze({
        queryKey: ['game', id],
        queryFn: () => gamesService.getById<GameDetails>(id),
    });

    return useQuery(queryOptions);
};