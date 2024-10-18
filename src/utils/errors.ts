import { CanceledError } from '../features/GamesList/services/api-client';


export const getRequestError = (err: unknown): string => {

    if (err instanceof CanceledError) {
        return 'The request was canceled.';
    }

    if (err instanceof Error) {
        return err.message || 'An error occurred, but no message was provided.';  // Handle cases where Error lacks a message
    }

    return 'An unknown error occurred.';
}