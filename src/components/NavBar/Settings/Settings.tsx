import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {accentColor, baseColor, theme} from "../../../interfaces/ITheme";
import {translate} from "../../../provider/languageProvider";
import OptionButton from "./OptionButton/OptionButton";

interface ISettingsProps {
  usedTheme: theme,
  setUsedTheme(theme: theme): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {

  const settingsStyle: CSSProperties = {
    borderColor: props.usedTheme.baseColors.foreground,
    backgroundColor: props.usedTheme.baseColors.background,
    borderWidth: "1px",
    borderStyle: "solid"
  }

  const darkThemeButtonStyle: CSSProperties = props.usedTheme.baseColors.background === baseColor.light ?
    {
      backgroundColor: props.usedTheme.baseColors.background,
      borderColor: props.usedTheme.accentColor,
    } :
    {
      backgroundColor: props.usedTheme.accentColor,
      borderColor: props.usedTheme.accentColor,
    };

  const darkThemeClickHandler = () => {
    if (props.usedTheme.baseColors.background === baseColor.light) {
      props.setUsedTheme({
        baseColors: {background: baseColor.dark, foreground: baseColor.light},
        accentColor: props.usedTheme.accentColor
      })
    } else {
      props.setUsedTheme({
        baseColors: {background: baseColor.light, foreground: baseColor.dark},
        accentColor: props.usedTheme.accentColor
      })
    }
  }

  return (
    <div className={styles.container} style={settingsStyle}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_darkTheme")}:</div>
        <div className={styles.optionButton} style={darkThemeButtonStyle} onClick={darkThemeClickHandler}/>
      </div>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_accentColor")}:</div>
        <OptionButton color={accentColor.orange} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <OptionButton color={accentColor.blue} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <OptionButton color={accentColor.cyan} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <OptionButton color={accentColor.yellow} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
      </div>
    </div>
  );
}

export default Settings;
