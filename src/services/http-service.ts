import apiClient from "./api-client";

export class HttpService {

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