import React, {CSSProperties} from "react";
import styles from "./AccentColorButton.module.css";
import {accentColor, baseColor, ITheme} from "../../../../interfaces/ITheme";

interface IOptionButtonProps {
  color: accentColor,
  usedTheme: ITheme,
  setUsedTheme(theme: ITheme): void,
}

const AccenColorButton: React.FunctionComponent<IOptionButtonProps> = (props) => {

  const colorStyle: CSSProperties = props.usedTheme.accentColor === props.color ?
    {
      backgroundColor: props.usedTheme.accentColor,
      borderColor: props.color,
    } :
    {
      backgroundColor: props.usedTheme.baseColors.background,
      borderColor: props.color,
    };

  const accentColorClickHandler = () => {
    props.setUsedTheme({
      baseColors: {background: props.usedTheme.baseColors.background, foreground: props.usedTheme.baseColors.foreground},
      accentColor: props.color
    })
  }

  return (
    <div className={styles.container} style={colorStyle} onClick={accentColorClickHandler}>

    </div>
  );
}

export default AccenColorButton;
