// Third party libraries imports
import apiClient from "./api-client";
// FS imports
import { AxiosRequestConfig } from "axios";

export class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async<T>(requestConfig: AxiosRequestConfig = {}) => {
        try {
            const response = await apiClient.get<T>(this.endpoint, { ...requestConfig });
            return response?.data;
        }
        catch (error) {
            throw error;
        }
        finally {
            console.log(`The method getAll ${this.endpoint} finished ...`);
        }
    }
};