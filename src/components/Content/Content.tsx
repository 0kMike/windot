import React, {CSSProperties} from "react";
import styles from "./Content.module.css";
import PoemLine from "./PoemLine/PoemLine";

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
      <PoemLine text={"Verily"} size={60} indentation={2}/>
      <PoemLine text={"I say unto thee,"} size={55} indentation={1}/>
      <PoemLine text={"Lay thine eyes"} size={55} indentation={0}/>
      <PoemLine text={"Upon the field"} size={50} indentation={1}/>
      <PoemLine text={"In which my fucks"} size={60} indentation={0}/>
      <PoemLine text={"Are grown."} size={50} indentation={0}/>
      <PoemLine text={"An behold"} size={60} indentation={1}/>
      <PoemLine text={"That it is barren."} size={50} indentation={2}/>
      <PoemLine text={"-mood."} size={25} indentation={6}/>
      <PoemLine text={"24:7"} size={20} indentation={7}/>
    </div>
  );
}

export default Content;
