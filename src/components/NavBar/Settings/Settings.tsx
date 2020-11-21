import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {translate} from "../../../provider/languageProvider";
import {IColorPalette} from "../../../interfaces/IColorPalette";

interface ISettingsProps {
  usedColorPalette: IColorPalette,
  setUsedColorPalette(colorPalette: IColorPalette): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {
  const {usedColorPalette, setUsedColorPalette} = props;

  const cssStyle: CSSProperties = {
    backgroundColor: usedColorPalette.backgroundAlt,
    boxShadow: `0px 3px 6px ${usedColorPalette.accent}`,
  }

  return (
    <div className={styles.container} style={cssStyle}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>{translate("settings_accentColor")}:</div>
      </div>
    </div>
  );
}

export default Settings;
