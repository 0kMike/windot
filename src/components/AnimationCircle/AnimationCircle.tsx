import React, {CSSProperties} from "react";
import styles from "./AnimationCircle.module.css"
import {ITheme} from "../../interfaces/ITheme";
import {IAbsolutePosition, verticalDirection} from "../../interfaces/IAbsolutePosition";

interface IAnimationCircleProps {
  usedTheme: ITheme,
  diameter: number,
  duration: number,
  opacity: number,
  position: IAbsolutePosition,
}

const AnimationCircle: React.FC<IAnimationCircleProps> = (props) => {

  const {usedTheme, diameter, duration, opacity, position} = props;

  const inlineStyle: CSSProperties = {
    backgroundColor: usedTheme.accentColor,
    width: `${diameter}px`,
    height: `${diameter}px`,
    opacity: `${opacity}%`,
    animationDuration: `${duration}s`,
  };

  let positionStyle: CSSProperties = {
  }

  if (position.verticalDirection) {
    switch (position.verticalDirection) {
      case verticalDirection.top:
        positionStyle = {top: `${position.verticalDistance}px`};
        break;
      case verticalDirection.bottom:
        positionStyle = {bottom: `${position.verticalDistance}px`};
        break;
    }
  }

  return (
    <div className={styles.container} style={{...inlineStyle, ...positionStyle}}/>
  );
}

export default AnimationCircle;