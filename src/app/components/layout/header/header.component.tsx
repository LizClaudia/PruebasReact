import { useTranslation } from "react-i18next";
import logo from "../../../../assets/logo/logo.svg";
import BreadcrumbComponent from "../../shared/breadcrumbs/breadcrumbs.component";
import ButtonComponent from "../../shared/button/button.component";
import { LANGUAGES } from "../../../enums/global.enum";
import { useTheme } from "../../../types/theme.type";

function Header() {
    const { t, i18n } = useTranslation();

    const { theme, toggleTheme } = useTheme();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ButtonComponent
                className="App-buttonActions"
                onClick={toggleTheme}
            >
                {theme === "light"
                    ? `${t("APP.NAVBAR.SETTINGS.THEMES.LIGHT")}`
                    : `${t("APP.NAVBAR.SETTINGS.THEMES.DARK")}`}
            </ButtonComponent>

            {Object.values(LANGUAGES).map((lang) => (
                <ButtonComponent
                    className={`App-buttonActions ${i18n.language === lang ? "active" : ""}`}
                    onClick={() => changeLanguage(lang)}
                    key={lang}
                >
                    {lang.toUpperCase()}
                </ButtonComponent>
            ))}

            <BreadcrumbComponent />
        </header>
    );
}

export default Header;
