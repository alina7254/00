export const cdnBaseUrl = "https://cdn.simplelocalize.io"; 
export const environment = "_latest"; 
export const projectToken = "1841797e4f72487fa7cade73b888e4db";

import i18n, { InitOptions } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import axios, { AxiosRequestConfig } from 'axios';

const isProductionCode = process.env.NODE_ENV === 'production';
const fallbackLanguage = 'en';


const loadPath = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}`;
const loadPathWithNamespaces = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}/{{ns}}`;


const configuration: AxiosRequestConfig = {
    headers: {
        'X-SimpleLocalize-Token': "3064a562C0aEb7Ae5E0170402123dF4c5b49D88d85532c80"
    }
};

interface TranslationKey {
    key: string;
    namespace: string;
}

interface Translation {
    key: string;
    namespace: string;
    language: string;
    text: string;
}


const createTranslationKeys = async (requestBody: { translationKeys: TranslationKey[] }) => {
    try {
        await axios.post(`${cdnBaseUrl}/v1/translation-keys/bulk`, requestBody, configuration);
    } catch (error) {
        console.error(`Error during creating translation keys: ${error}`);
    }
};


const updateTranslations = async (requestBody: { translations: Translation[] }) => {
    try {
        await axios.patch(`${cdnBaseUrl}/v2/translations/bulk`, requestBody, configuration);
    } catch (error) {
        console.error(`Error during updating translations: ${error}`);
    }
};


const missing: Translation[] = [];


const saveMissing = async () => {
    if (missing.length === 0 || isProductionCode) {
        return;
    }
    console.info(`Saving ${missing.length} missing translation keys`);

    const translationKeys: TranslationKey[] = missing.map(element => ({
        key: element.key,
        namespace: element.namespace,
    }));

    await createTranslationKeys({ translationKeys });

    await updateTranslations({ translations: missing });

    missing.length = 0;
};


setInterval(saveMissing, 30000); 


const i18nOptions: InitOptions = {
    fallbackLng: fallbackLanguage,
    backend: {
        loadPath: loadPath, 
        loadPathWithNamespaces: loadPathWithNamespaces
    },
    saveMissing: !isProductionCode,
    defaultNS: "", 
    missingKeyHandler: async (languages, namespace, translationKey, fallbackValue) => {
        console.debug(`[${namespace ?? "default"}][${translationKey}] not available in Translation Hosting`);
        missing.push({
            key: translationKey,
            namespace: namespace ?? "",
            language: languages[0] ?? fallbackLanguage,
            text: fallbackValue ?? "",
        });
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nOptions);

export default i18n;




