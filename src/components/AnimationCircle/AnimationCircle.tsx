import React, {CSSProperties} from "react";
import styles from "./AnimationCircle.module.css"

interface IAnimationCircleProps {
    diameter: number,
    duration: number,
    opacity: number,
}

const AnimationCircle: React.FC<IAnimationCircleProps> = (props) => {

    const inlineStyle: CSSProperties = {
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