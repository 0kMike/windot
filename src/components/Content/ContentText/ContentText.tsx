import React from "react";
import styles from "./ContentText.module.css"

interface IContentProps {
  textSize: number,
  text: string,
}

const ContentText: React.FunctionComponent<IContentProps> = (props) => {
  const {textSize, text,} = props;


  return (
    <p className={styles.container} style={{fontSize: `${textSize}px`}}>
      {text}
    </p>
  );
}

export default ContentText;
