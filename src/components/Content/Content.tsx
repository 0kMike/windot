import React, {CSSProperties} from "react";
import styles from "./Content.module.css";
import SlidingText from "./ContentText/ContentText";

interface IContentProps {
  marginTop: number
  color: string,
}

const Content: React.FunctionComponent<IContentProps> = (props) => {

  const contentStyle: CSSProperties = {
    marginTop: `${props.marginTop}px`,
    color: props.color,
  }

  return (
    <div className={styles.container} style={contentStyle}>
      <SlidingText textSize={60} text={"Hello There!"}/>
      <SlidingText textSize={20} text={"It looks like you found my little website."}/>
      {props.children}
    </div>
  );
}

export default Content;
