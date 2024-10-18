// Third party libraries imports
import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
        'key': import.meta.env.VITE_API_KEY,
    },
});

export { CanceledError };