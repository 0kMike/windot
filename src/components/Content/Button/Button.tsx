import React, { CSSProperties } from "react";
import { IColors } from "../../../interfaces/IColors";
import styles from "./Button.module.css"

interface IButtonProps {
    colors: IColors,
    text: string,
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {colors, text} = props;

  const buttonStyle: CSSProperties = {
    backgroundColor: colors.accent,
    color: colors.backgroundVariant,
  }

  return <input type="button" className={styles.container} style={buttonStyle} value={text.toUpperCase()}/>
};

export default Button;
