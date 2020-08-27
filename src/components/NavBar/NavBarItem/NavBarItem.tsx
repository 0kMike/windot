import React from "react";
import styles from "./NavBarItem.module.css"
import {translate} from "../../../provider/languageProvider";

interface INavBarItemProps {
    text: string,
}

const NavBarItem: React.FC<INavBarItemProps> = (props) => {
    return (
        <div className={styles.container}>
            {translate(props.text)}
        </div>
    );
}

export default NavBarItem;
