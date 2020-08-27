import React from "react";
import styles from "./NavBar.module.css"

interface INavBar {

}

const NavBar: React.FC = (props: INavBar) => {
    return (
        <div className={styles.container}>
            hello
        </div>
    );
}

export default NavBar;