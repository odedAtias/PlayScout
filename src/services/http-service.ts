// FS imports
import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

export class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>(requestConfig: AxiosRequestConfig = {}) {
        const controller: AbortController = new AbortController();
        const request = apiClient.get<T>(this.endpoint, { signal: controller.signal, ...requestConfig });
        return { request, controller };
    }

};