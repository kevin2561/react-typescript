import { createContext } from "react";

export type Theme = {
    background: string,
    color: string
}
export const ThemeContext = createContext<Theme>({
    background: 'red',
    color: 'orange'
});
