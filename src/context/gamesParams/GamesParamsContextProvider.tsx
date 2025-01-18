// React imports
import { FC, ReactNode, Reducer, useReducer } from "react";
// FS imports
import { GamesParamsAction, GamesParamsState, gamesParamsReducer, initialState, GamesParamsContext } from  "context/gamesParams"
interface GamesParamsContextProviderProps {
    children: ReactNode;
};

export const GamesParamsContextProvider: FC<GamesParamsContextProviderProps> = ({ children }: GamesParamsContextProviderProps) => {
    
    const [state, dispatch] = useReducer<Reducer<GamesParamsState, GamesParamsAction>>(gamesParamsReducer, initialState);

    return (
        <GamesParamsContext.Provider value={{ state, dispatch }}>
            {children}
        </GamesParamsContext.Provider>
    );
};

export default GamesParamsContextProvider;