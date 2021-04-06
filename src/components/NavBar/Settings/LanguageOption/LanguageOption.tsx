import React from "react";
import { setLanguage } from "../../../../provider/languageProvider";
import styles from "./LanguageOption.module.css";

interface ILanguageOptionProps {
    language: string,
    index: number,
}

const LanguageOption: React.FC<ILanguageOptionProps> = (props) => {
const {language, index} = props;

const languageOptionClickHandler = () => {
    setLanguage(language);
  }

    return <div className={styles.container} onClick={languageOptionClickHandler}>{language}</div>;
}

export default LanguageOption;