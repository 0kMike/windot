import React, {useState} from "react";
import styles from "./NavBar.module.css"
import {menuItems} from "../../provider/dataProvider"
import NavBarItem from "./NavBarItem/NavBarItem";
import Settings from "./Settings/Settings";
import {defaultTheme} from "../../provider/themeProvider";

interface INavBar {

}

const NavBar: React.FC = (props: INavBar) => {

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const generateMenuItems = () => {
    return menuItems.map((item, index) => {
      return (
        <NavBarItem text={item.translation} key={index}/>
      )
    });
  }

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  }

  const svgColor = defaultTheme.accent
  console.log(showSettings)

  return (
    <nav className={styles.container}>
      <section className={styles.pageTitle}>
        windot
      </section>
      <section className={styles.menu}>
        {generateMenuItems()}
        <div className={styles.settingsButton} onClick={toggleSettings}>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill={svgColor}
               width="25px"
               height="25px">
            <g>
              <path d="M0,0h24v24H0V0z"
                    fill="none"/>
              <path
                d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
            </g>
          </svg>
        </div>
        {showSettings && <Settings/>}
      </section>
    </nav>
  );
}

export default NavBar;