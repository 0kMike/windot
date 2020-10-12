import React, {CSSProperties} from "react";
import styles from "./AnimationCircle.module.css"
import {ITheme} from "../../interfaces/ITheme";
import {horizontalDirection, IAbsolutePosition, verticalDirection} from "../../interfaces/IAbsolutePosition";

interface IAnimationCircleProps {
  usedTheme: ITheme,
  diameter: number,
  duration: number,
  opacity: number,
  position: IAbsolutePosition,
}

const AnimationCircle: React.FC<IAnimationCircleProps> = (props) => {

  const {usedTheme, diameter, duration, opacity, position} = props;

  const animationStyle: CSSProperties = {
    backgroundColor: usedTheme.accentColor,
    width: `${diameter}px`,
    height: `${diameter}px`,
    opacity: `${opacity}%`,
    animationDuration: `${duration}s`,
  };

  let verticalPositionStyle: CSSProperties = {
    bottom: 0,
  };
  let horizontalPositionStyle: CSSProperties = {};

  const generatePosition = () => {

    if (position.verticalDirection === verticalDirection.top) {
      verticalPositionStyle = {
        top: `${position.verticalDistance}`,
      }
    }
    else {
      verticalPositionStyle = {
        bottom: `${position.verticalDistance}`,
      }
    }

    if (position.horizontalDirection === horizontalDirection.left) {
      horizontalPositionStyle = {
        left: `${position.horizontalDistance}`,
      }
    }
    else {
      horizontalPositionStyle = {
        right: `${position.horizontalDistance}`,
      }
    }
  }

  generatePosition();

  return (
    <div className={styles.container} style={{...animationStyle, ...verticalPositionStyle, ...horizontalPositionStyle}}/>
  );
}

export default AnimationCircle;