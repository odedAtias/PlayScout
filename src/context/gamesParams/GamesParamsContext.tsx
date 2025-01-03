// React imports
import { createContext, Dispatch } from "react";
// Other fs imports
import { GamesParamsState, GamesParamsAction } from "./types";

interface ContextProps {
    state: GamesParamsState;
    dispatch: Dispatch<GamesParamsAction>;
};

export const GamesParamsContext = createContext<ContextProps | null>(null);