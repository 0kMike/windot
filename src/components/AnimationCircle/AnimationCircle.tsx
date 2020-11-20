import React, {CSSProperties} from "react";
import styles from "./AnimationCircle.module.css"
import {ITheme} from "../../interfaces/ITheme";

interface IAnimationCircleProps {
  usedColorPalette: ITheme,
  diameter: number,
  duration: number,
  opacity: number,
}

const AnimationCircle: React.FC<IAnimationCircleProps> = (props) => {

  const {usedColorPalette, diameter, duration, opacity,} = props;

  const animationStyle: CSSProperties = {
    backgroundColor: usedColorPalette.accentColor,
    width: `${diameter}px`,
    height: `${diameter}px`,
    opacity: `${opacity}%`,
    animationDuration: `${duration}s`,
    right: `-${diameter/2}px`,
    bottom: `-${diameter/2}px`,
  };

  return (
    <div className={styles.container} style={animationStyle}/>
  );
}

export default AnimationCircle;