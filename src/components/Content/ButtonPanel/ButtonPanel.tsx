import React from "react";
import { IColors } from "../../../interfaces/IColors";
import styles from "./ButtonPanel.module.css";

interface IButtonPanelProps {
  colors: IColors;
}

const ButtonPanel: React.FunctionComponent<IButtonPanelProps> = (props) => {
  return <div className={styles.container}>
        {props.children}
      </div>;
};

export default ButtonPanel;
