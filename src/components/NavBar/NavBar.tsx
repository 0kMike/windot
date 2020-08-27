import React from "react";
import styles from "./NavBar.module.css"
import {menuItems} from "../../provider/dataProvider"
import NavBarItem from "./NavBarItem/NavBarItem";

interface INavBar {

}

const NavBar: React.FC = (props: INavBar) => {

    const generateMenuItems = () => {
        return menuItems.map(item => {
            return (
                <NavBarItem text={item.translation}/>
            )
        });
    }

    return (
        <div className={styles.container}>
            <section className={styles.pageTitle}>
                windot
            </section>
            <section className={styles.menu}>
                {generateMenuItems()}
            </section>
        </div>
    );
}

export default NavBar;