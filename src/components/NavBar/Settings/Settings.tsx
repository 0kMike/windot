import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {currentTheme} from "../../../provider/themeProvider";

interface ISettingsProps {

}

const Settings: React.FC<ISettingsProps> = (props) => {

  const settingsStyle: CSSProperties = {
    borderColor: currentTheme.foreground,
    backgroundColor: currentTheme.background,
    borderWidth: "1px",
    borderStyle: "solid"
  }

  return (
    <div className={styles.container} style={settingsStyle}>
      <div className="option">

      </div>
      Dark Theme

    </div>
  );
}

export default Settings;
