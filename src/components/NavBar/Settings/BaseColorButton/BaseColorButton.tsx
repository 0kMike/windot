import React, {CSSProperties} from "react";
import styles from "./BaseColorButton.module.css";
import {baseColor, theme} from "../../../../interfaces/ITheme";

interface IOptionButtonProps {
  usedTheme: theme,
  setUsedTheme(theme: theme): void,
}

const BaseColorButton: React.FunctionComponent<IOptionButtonProps> = (props) => {

  const colorStyle: CSSProperties = props.usedTheme.baseColors.background === baseColor.light ?
    {
      backgroundColor: props.usedTheme.baseColors.background,
      borderColor: props.usedTheme.accentColor,
    } :
    {
      backgroundColor: props.usedTheme.accentColor,
      borderColor: props.usedTheme.accentColor,
    };

  const baseColorClickHandler = () => {
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
    <div className={styles.container} style={colorStyle} onClick={baseColorClickHandler}>

    </div>
  );
}

export default BaseColorButton;
