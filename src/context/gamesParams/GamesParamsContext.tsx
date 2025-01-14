// React imports
import { createContext, Dispatch } from "react";
// FS imports
import { GamesParamsState, GamesParamsAction } from "./types";

export interface GamesParamsContextProps {
    state: GamesParamsState;
    dispatch: Dispatch<GamesParamsAction>;
};

export const GamesParamsContext = createContext<GamesParamsContextProps | undefined>(undefined);