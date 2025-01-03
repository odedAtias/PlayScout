// React imports
import { useContext, Context as ReactContext } from "react";

const useCreateContext = <T>(Context: ReactContext<T | undefined>): T => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useCreateContext must be used within its Provider");
    }
    return context;
};

export default useCreateContext;