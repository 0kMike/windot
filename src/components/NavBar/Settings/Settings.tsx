import React, {CSSProperties} from "react";
import styles from "./Settings.module.css";
import {currentTheme, defaultTheme, setCurrentTheme, theme} from "../../../interfaces/ITheme";

interface ISettingsProps {
  usedTheme: theme,
}

const Settings: React.FC<ISettingsProps> = (props) => {

  const settingsStyle: CSSProperties = {
    borderColor: currentTheme.colors.foreground,
    backgroundColor: currentTheme.colors.background,
    borderWidth: "1px",
    borderStyle: "solid"
  }

  const buttonStyle: CSSProperties = defaultTheme.colors.background === "#eeeeee" ?
    {
      backgroundColor: props.usedTheme.baseColors.background,
      borderColor: props.usedTheme.accentColor,
    } :
    {
      backgroundColor: props.usedTheme.accentColor,
      borderColor: props.usedTheme.accentColor,
    };

  const darkThemeClickHandler = () => {
    if (props.usedTheme.baseColors.background === "#eeeeee") {
      setCurrentTheme({colors: {background: "#1c1c1c", foreground: "#eeeeee"}, accent: "#ffff00"})

    }
  }

  return (
    <div className={styles.container} style={settingsStyle}>
      <div className={styles.option}>
        <div className={styles.optionLabel}>Dark Theme:</div>
        <div className={styles.optionButton} style={buttonStyle} onClick={darkThemeClickHandler}/>
      </div>
    </div>
  );
}

export default Settings;
