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
        <header className="App-header" data-testid="header-settings-button">
            <img src={logo} className="App-logo" alt="logo" />
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.EN_GB ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.EN_GB)}
                data-testid="en-GB"
            >
                {" "}
                EN-GB
            </ButtonComponent>
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.EN_US ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.EN_US)}
                data-testid="en-US"
            >
                {" "}
                EN-US
            </ButtonComponent>
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.ES_ES ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.ES_ES)}
                data-testid="es-ES"
            >
                {" "}
                ES
            </ButtonComponent>
            <ButtonComponent
                className="App-buttonActions"
                onClick={toggleTheme}
                data-testid="change-theme"
            >
                {theme === "light"
                    ? `${t("APP.NAVBAR.SETTINGS.THEMES.LIGHT")}`
                    : `${t("APP.NAVBAR.SETTINGS.THEMES.DARK")}`}
            </ButtonComponent>
            <BreadcrumbComponent />
        </header>
    );
}

export default Header;
