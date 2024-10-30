import apiClient from "./api-client";

class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller: AbortController = new AbortController();
        const request = apiClient.get<T>(this.endpoint, { signal: controller.signal });
        return { request, controller };
    }
};

// '/games'

const create = (endpoint: string) => new HttpService(endpoint);

export default create;