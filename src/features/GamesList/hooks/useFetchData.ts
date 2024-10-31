// React imports
import { useState, useEffect } from 'react';
// FS imports
import { getRequestError } from '../../../utils/errors';
import { HttpService } from '../services/http-service'

const useFetchData = <T>(service: HttpService) => {
    const [payload, setPayload] = useState<T[] | T>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const cleanUp = (controller: AbortController) => {
        return controller.abort();
    };

    useEffect(() => {
        const fetchData = async () => {
            const { request, controller } = service.getAll<T>();
            try {
                const { data } = await request;
                console.log("====data", data);
                setPayload(data || []);
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
    }, []);

    return { payload, isLoading, error };
};

export default useFetchData;