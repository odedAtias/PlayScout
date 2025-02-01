// Third party libraries imports
import { AxiosRequestConfig } from 'axios';
// FS imports
import { apiClient } from "services";

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

    getById = async<T>(id: string, requestConfig: AxiosRequestConfig = {}) => {
        try {
            const response = await apiClient.get<T>(`${this.endpoint}/${id}`, { ...requestConfig });
            return response?.data;
        }
        catch (error) {
            throw error;
        }
        finally {
            console.log(`The method getById ${this.endpoint}/${id} finished ...`);
        }
    }
};