import { createContext, ReactNode, useContext, useState } from "react";

type TypeThemeContext = {
    theme: string;
    toggleTheme: VoidFunction;
}

const ThemeContext = createContext<TypeThemeContext>(null!);

export function ThemeProvider({ children }: { children: ReactNode}){
    const[theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(theme => theme === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);