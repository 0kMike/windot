import React, {CSSProperties} from "react";
import styles from "./AnimationCircle.module.css"
import {theme} from "../../interfaces/ITheme";

interface IAnimationCircleProps {
  usedTheme: theme,
  diameter: number,
  duration: number,
  opacity: number,
}

const AnimationCircle: React.FC<IAnimationCircleProps> = (props) => {

  const inlineStyle: CSSProperties = {
    backgroundColor: props.usedTheme.accentColor,
    width: `${props.diameter}px`,
    height: `${props.diameter}px`,
    right: `${props.diameter / 2 * -1}px`,
    bottom: `${props.diameter / 2 * -1}px`,
    opacity: `${props.opacity}%`,
    animationDuration: `${props.duration}s`,
  };

  return (
    <div className={styles.container} style={inlineStyle}>

    </div>
  );
}

export default AnimationCircle;