import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {translate} from "../../../provider/languageProvider";
import {IColorPalette} from "../../../interfaces/IColorPalette";

interface ISettingsProps {
  usedColorPalette: IColorPalette,
  setUsedColorPalette(colorPalette: IColorPalette): void,
  setShowSettings(isTrue: boolean): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {
  const {usedColorPalette, setUsedColorPalette, setShowSettings} = props;

  const mouseLeaveHandler = () => {
    setShowSettings(false)
  }

  const cssStyle: CSSProperties = {
    backgroundColor: usedColorPalette.accentVariant1,
  }

  return (
    <div className={styles.container} style={cssStyle} onMouseLeave={mouseLeaveHandler}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_accentColor")}:</div>
      </div>
    </div>
  );
}

export default Settings;
