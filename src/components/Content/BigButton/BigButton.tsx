import React, { CSSProperties } from "react";
import { IColors } from "../../../interfaces/IColors";
import styles from "./BigButton.module.css"

interface IBigButtonProps {
    colors: IColors,
    text: string,
}

const BigButton: React.FunctionComponent<IBigButtonProps> = (props) => {
  const {colors, text} = props;

  const buttonStyle: CSSProperties = {
    backgroundColor: colors.accent,
    color: colors.backgroundVariant,
  }

  return <input type="button" className={styles.container} style={buttonStyle} value={text.toUpperCase()}/>
};

export default BigButton;
