import { useEffect, useState } from "react";
import { THEMES } from "../enums/global.enum";
import { LOCAL_STORAGE } from "../enums/local_storage.enum";

export const useTheme = () => {
    const [theme, setTheme] = useState<THEMES>(
        (localStorage.getItem(LOCAL_STORAGE.THEME) as THEMES) || THEMES.LIGHT
    );

    useEffect(() => {
        document.body.classList.remove(THEMES.LIGHT, THEMES.DARK);
        document.body.classList.add(theme);
        localStorage.setItem(LOCAL_STORAGE.THEME, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        );
    };

    return { theme, toggleTheme };
};
