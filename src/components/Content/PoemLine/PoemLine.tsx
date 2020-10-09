import React, {CSSProperties} from "react";
import styles from "./PoemLine.module.css";
import {IIndentation} from "../../../interfaces/IIndentation";

interface IPoemLineProps {
  text: string,
  size: number,
  indentation: IIndentation,
}

const PoemLine: React.FunctionComponent<IPoemLineProps> = (props) => {

  const poemLineStyle: CSSProperties = {
    marginLeft: `${props.indentation*50}px`,
    fontSize: `${props.size}px`,
  }

  return (
    <div className={styles.container} style={poemLineStyle}>
      {props.text}
    </div>
  );
}

export default PoemLine;
