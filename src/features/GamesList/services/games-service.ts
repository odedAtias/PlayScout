// FS imports
import { GamesFetchResponse } from "../types/games";
import apiClient from "./api-client";

class GamesService {
    getGames() {
        const controller: AbortController = new AbortController();
        const request = apiClient.get<GamesFetchResponse>('/games', { signal: controller.signal });
        return { request, controller };
    }
};

export default new GamesService();