import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {supportedLanguages, translate} from "../../../provider/languageProvider";
import {IColors} from "../../../interfaces/IColors";
import {colorPalettes} from "../../../provider/colorProvider"
import ColorOption from "./ColorOption/ColorOption";
import LanguageOption from "./LanguageOption/LanguageOption";

interface ISettingsProps {
  colors: IColors,
  setColors(colorPalette: IColors): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {
  const {colors, setColors} = props;

  const cssStyle: CSSProperties = {
    backgroundColor: colors.backgroundVariant,
    boxShadow: `0px 3px 6px black`,
  }

  const generateColorOptions =
    colorPalettes.map((item, index) => {
      return (
        <ColorOption colors={item} key={index} index={index} setColors={setColors}/>
      )
    })

    //TODO generate languageOptions from
  const generateLanguageOptions = 
  supportedLanguages.map((item, index) => {
    return <LanguageOption key={index} language={item} index={index}/>;
  });


  return (
    <div className={styles.container} style={cssStyle}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_color")}</div>
        <div className={styles.column}>
          {generateColorOptions}
        </div>
      </div>
        <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_language")}</div>
        <div className={styles.column}>
          {generateLanguageOptions}
        </div>
      </div>
    </div>
  );
}

export default Settings;
