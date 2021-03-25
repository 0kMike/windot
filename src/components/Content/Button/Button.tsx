import React from "react";
import { IColors } from "../../../interfaces/IColors";
import styles from "./Button.module.css"

interface IButtonProps {
    colors: IColors,
    text: string,
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {text} = props;

  return <input className={styles.container} type="button" value={text}>

  </input>;
};

export default Button;
