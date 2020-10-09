import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {accentColor, baseColor, ITheme} from "../../../interfaces/ITheme";
import {translate} from "../../../provider/languageProvider";
import AccenColorButton from "./AccentColorButton/AccenColorButton";
import BaseColorButton from "./BaseColorButton/BaseColorButton";

interface ISettingsProps {
  usedTheme: ITheme,
  setUsedTheme(theme: ITheme): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {

  const settingsStyle: CSSProperties = {
    borderColor: props.usedTheme.baseColors.foreground,
    backgroundColor: props.usedTheme.baseColors.background,
    borderWidth: "1px",
    borderStyle: "solid"
  }

  return (
    <div className={styles.container} style={settingsStyle}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_darkTheme")}:</div>
        <BaseColorButton usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
      </div>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_accentColor")}:</div>
        <AccenColorButton color={accentColor.orange} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <AccenColorButton color={accentColor.blue} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <AccenColorButton color={accentColor.cyan} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
        <AccenColorButton color={accentColor.yellow} usedTheme={props.usedTheme} setUsedTheme={props.setUsedTheme}/>
      </div>
    </div>
  );
}

export default Settings;
