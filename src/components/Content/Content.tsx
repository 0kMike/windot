import React, {CSSProperties} from "react";
import styles from "./Content.module.css";
import {IColors} from "../../interfaces/IColors";
import ContentText from "./ContentText/ContentText";

interface IContentProps {
  marginTop: number
  usedColorPalette: IColors,
}

const Content: React.FunctionComponent<IContentProps> = (props) => {

  const contentStyle: CSSProperties = {
    marginTop: `${props.marginTop}px`,
    color: props.usedColorPalette.text,
  }

  return (
    <div className={styles.container} style={contentStyle}>
      <ContentText textSize={50} text={"Hello There!"}/>
      <ContentText textSize={20} text={"It looks like you found my little website."}/>
      <ContentText textSize={20} text={"Pleas let me introduce myself."}/>
      <ContentText textSize={20} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis odio eu massa commodo, vel aliquam mauris bibendum. Proin vitae quam purus. Suspendisse sollicitudin sapien vitae molestie convallis. Etiam lectus leo, pulvinar eget eros sed, cursus iaculis metus. Donec augue diam, volutpat id tellus sed, venenatis sollicitudin felis. Maecenas at ipsum gravida ante egestas hendrerit. Sed ultricies sagittis ante, at facilisis nisl rutrum at."}/>
      {props.children}
    </div>
  );
}

export default Content;
