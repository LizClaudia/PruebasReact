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
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.EN_GB ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.EN_GB)}
            >
                {" "}
                EN-GB
            </ButtonComponent>
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.EN_US ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.EN_US)}
            >
                {" "}
                EN-US
            </ButtonComponent>
            <ButtonComponent
                className={`App-buttonActions ${i18n.language === LANGUAGES.ES_ES ? "active" : ""}`}
                onClick={() => changeLanguage(LANGUAGES.ES_ES)}
            >
                {" "}
                ES
            </ButtonComponent>
            <BreadcrumbComponent />
        </header>
    );
}

export default Header;
