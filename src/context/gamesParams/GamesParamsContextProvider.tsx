// React imports
import { FC, ReactNode, Reducer, useReducer } from "react";
// Other fs imports
import { GamesParamsAction, GamesParamsState } from "./types";
import { gamesParamsReducer, initialState } from "./gamesParamsReducer";
import { GamesParamsContext } from "./GamesParamsContext";

interface GamesParamsContextProviderProps {
    children: ReactNode;
};

export const GamesParamsContextProvider: FC<GamesParamsContextProviderProps> = ({ children }: GamesParamsContextProviderProps) => {
    
    const [state, dispatch] = useReducer<Reducer<GamesParamsState, GamesParamsAction>>(gamesParamsReducer, initialState):

    return (
        <GamesParamsContext.Provider value={{ state, dispatch }}>
            {children}
        </GamesParamsContext.Provider>
    );
};

export default GamesParamsContextProvider;