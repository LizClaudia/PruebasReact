import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esESBackup from "./translations/esES-backup.json";
import enUSBackup from "./translations/enUS-backup.json";
import enGBBackup from "./translations/enGB-backup.json";
import { I18nType } from "@/app/types/translation.type";
import { LANGUAGES } from "../app/enums/global.enum";

const resources = {
    "en-US": {
        translation: enUSBackup,
    },
    "es-ES": {
        translation: esESBackup,
    },
    "en-GB": {
        translation: enGBBackup,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: LANGUAGES.EN_GB,
    fallbackLng: LANGUAGES.EN_GB,
});

export const filterTranslations = (
    translations: I18nType[],
    language: string
) => {
    return translations.find((lang) => lang.language === language)?.values;
};

export const setTranslations = (jsonTranslations: I18nType[]) => {
    if (!jsonTranslations) return;

    const enGB =
        filterTranslations(jsonTranslations, LANGUAGES.EN_GB) ?? enGBBackup;
    const enUS =
        filterTranslations(jsonTranslations, LANGUAGES.EN_US) ?? enUSBackup;
    const esES =
        filterTranslations(jsonTranslations, LANGUAGES.ES_ES) ?? esESBackup;

    enGB && i18n.addResourceBundle("en-GB", "translation", enGB);
    enUS && i18n.addResourceBundle("en-US", "translation", enUS);
    esES && i18n.addResourceBundle("es-ES", "translation", esES);
};

export default i18n;
