// React imports
import { useState, useEffect } from 'react';
// FS imports
import { getRequestError } from '../utils/errors';
import { HttpService } from '../services/http-service'
import { AxiosRequestConfig } from 'axios';


const useFetchData = <T>(service: HttpService, requestConfig: AxiosRequestConfig = {}, dependencies: unknown[] = []) => {
    const [payload, setPayload] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const cleanUp = (controller: AbortController) => controller.abort();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const { request, controller } = service.getAll<T>(requestConfig);
            try {
                const { data } = await request;
                setPayload(data);
            }
            catch (err) {
                setError(getRequestError(err));
            }
            finally {
                setIsLoading(false);
            }
            () => cleanUp(controller);
        };
        fetchData();
    }, [...dependencies]);

    return { payload, isLoading, error };
};

export default useFetchData;