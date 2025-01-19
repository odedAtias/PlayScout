// React imports
import { createContext, Dispatch } from "react"
// FS imports
import { GamesParamsState, GamesParamsAction } from "context/gamesParams"

// This is the exact object that will be shared between all components
export interface GamesParamsContextProps {
    state: GamesParamsState;
    dispatch: Dispatch<GamesParamsAction>;
};

export const GamesParamsContext = createContext<GamesParamsContextProps>({} as GamesParamsContextProps);