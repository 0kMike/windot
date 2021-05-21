import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { IColors } from "../../interfaces/IColors";
import { translate } from "../../provider/languageProvider";
import styles from "./Footer.module.css";

interface IFooterProps {
    colors: IColors,
}

export const Footer : React.FunctionComponent<IFooterProps> = (props) => {
    const {colors} = props;

const footerButtonStyle: CSSProperties = {
    color: colors.accent,
    backgroundColor: colors.background,
}

    return (
        <footer className={styles.container}>
            <Link to="/legal">
                <input type="button" value={translate("button_legal").toLowerCase()} className={styles.footerButton} style={footerButtonStyle}>
                </input>
            </Link>
            {props.children}
        </footer>
    )
};