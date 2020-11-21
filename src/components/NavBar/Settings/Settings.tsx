import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {translate} from "../../../provider/languageProvider";
import {IColors} from "../../../interfaces/IColors";

interface ISettingsProps {
  colors: IColors,
  setColors(colorPalette: IColors): void,
}

const Settings: React.FC<ISettingsProps> = (props) => {
  const {colors, setColors} = props;

  const cssStyle: CSSProperties = {
    backgroundColor: colors.backgroundAlt,
    boxShadow: `0px 3px 6px ${colors.accent}`,
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
