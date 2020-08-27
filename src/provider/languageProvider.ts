interface ILanguageFile {
    [index: string]: ILanguageContent
}

interface ILanguageContent{
    [name: string] : string,
}

const languagePhrases: ILanguageFile = {
    EN: require('../i18n/EN.json'),
    DE: require('../i18n/DE.json')
};

export const defaultLanguage = "EN";
export let usedLanguage = defaultLanguage;

export function getTranslation(phrase: string) {
    return languagePhrases[usedLanguage][phrase];
}

export function setUsedLanguage(lang: string) {
    usedLanguage = lang;
    localStorage.setItem("storedUserLanguage", usedLanguage);
}

export function loadCurrentLanguage() {
    const storedLanguage = localStorage.getItem("storedUserLanguage");
    if (storedLanguage) {
        setUsedLanguage(storedLanguage);
    } else {
        setUsedLanguage(defaultLanguage);
    }
}