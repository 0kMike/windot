import React, {CSSProperties} from "react";
import styles from "./Content.module.css";
import {IColors} from "../../interfaces/IColors";

interface IContentProps {
  marginTop: number
  colors: IColors,
}

const Content: React.FunctionComponent<IContentProps> = (props) => {

  const contentStyle: CSSProperties = {
    marginTop: `${props.marginTop}px`,
    color: props.colors.text,
  }

  return (
    <div className={styles.container} style={contentStyle}>
      {props.children}
    </div>
  );
}

export default Content;
