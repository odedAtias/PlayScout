// FS imports
import apiClient from "./api-client";

class GamesService {
    getGames() {
        const controller: AbortController = new AbortController();
        const request = apiClient.get('/games', { signal: controller.signal });
        return { request, controller };
    }
};

export default new GamesService();