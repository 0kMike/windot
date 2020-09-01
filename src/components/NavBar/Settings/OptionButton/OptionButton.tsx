import React, {CSSProperties} from "react";
import styles from "./OptionButton.module.css";
import {accentColor, baseColor, theme} from "../../../../interfaces/ITheme";

interface IOptionButtonProps {
  color: accentColor,
  usedTheme: theme,
  setUsedTheme(theme: theme): void,
}

const OptionButton: React.FunctionComponent<IOptionButtonProps> = (props) => {

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

export default OptionButton;
