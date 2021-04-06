interface ILanguageFile {
    [index: string]: ILanguageContent
}

interface ILanguageContent {
    [name: string]: string,
}

// Add new languages here
export const supportedLanguages: string[] = ["EN", "DE", "KL"]


//TODO generate from supportedLanguages
const languagePhrases: ILanguageFile = {
    EN: require("../assets/i18n/EN.json"),
    DE: require("../assets/i18n/DE.json"),
    KL: require("../assets/i18n/KL.json"),
};

export const defaultLanguage = supportedLanguages[0];
export let usedLanguage = defaultLanguage;

export function translate(phrase: string) {
    return languagePhrases[usedLanguage][phrase];
}

export function setLanguage(lang: string) {
    usedLanguage = lang;
    localStorage.setItem("storedUserLanguage", usedLanguage);
}

export function loadLanguage() {
    const storedLanguage = localStorage.getItem("storedUserLanguage");
    if (storedLanguage) {
        setLanguage(storedLanguage);
    } else {
        setLanguage(defaultLanguage);
    }
}