import React, { CSSProperties } from "react";
import { IColors } from "../../../interfaces/IColors";
import styles from "./SmallButton.module.css";

interface ISmallButtonProps {
    colors: IColors,
}

const SmallButton: React.FunctionComponent<ISmallButtonProps> = (props) => {
    const {colors} = props;

    const smallButtonStyle: CSSProperties = {
        color: colors.accent,
        backgroundColor: colors.background,
    }

    return (
        <input type="button" className={styles.container} style={smallButtonStyle}/>
    )
}

export default SmallButton;