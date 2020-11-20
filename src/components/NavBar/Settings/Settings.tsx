import React from "react";
import styles from "./Settings.module.css";
import {accentColor, ITheme} from "../../../interfaces/ITheme";
import {translate} from "../../../provider/languageProvider";
import AccenColorButton from "./AccentColorButton/AccenColorButton";

interface ISettingsProps {
  usedTheme: ITheme,
  setUsedTheme(theme: ITheme): void,
  setShowSettings(isTrue: boolean): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {
  const {usedTheme, setUsedTheme, setShowSettings} = props;

  const mouseLeaveHandler = () => {
    setShowSettings(false)
  }

  return (
    <div className={styles.container} onMouseLeave={mouseLeaveHandler}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_accentColor")}:</div>
        <AccenColorButton color={accentColor.orange} usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
        <AccenColorButton color={accentColor.blue} usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
        <AccenColorButton color={accentColor.cyan} usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
        <AccenColorButton color={accentColor.yellow} usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
      </div>
    </div>
  );
}

export default Settings;
