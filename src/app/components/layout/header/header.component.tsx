import { useTranslation } from "react-i18next";
import logo from "../../../../assets/logo/logo.svg";
import BreadcrumbComponent from "../../shared/breadcrumbs/breadcrumbs.component";
import ButtonComponent from "../../shared/button/button.component";
import { LANGUAGES } from "../../../enums/global.enum";
function Header() {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

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
