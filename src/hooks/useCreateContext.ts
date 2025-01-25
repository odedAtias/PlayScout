// React imports
import { useContext, Context } from "react";

export const useCreateContext = <T>(context: Context<T>) => {
    
    const contextValue = useContext(context);

    if (!contextValue) {
        throw new Error('useCreateContext must be used within a Provider');
    }

    return contextValue;
};