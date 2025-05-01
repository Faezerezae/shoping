import { createContext } from "react";

type TAppContext = {
    data: string
}
export const AppContext = createContext({} as TAppContext)

