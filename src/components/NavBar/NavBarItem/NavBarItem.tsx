import React, {CSSProperties, useState} from "react";
import styles from "./NavBarItem.module.css"
import {translate} from "../../../provider/languageProvider";
import {theme} from "../../../interfaces/ITheme";

interface INavBarItemProps {
  text: string,
  usedTheme: theme,
}

const NavBarItem: React.FC<INavBarItemProps> = (props) => {

  const [hoverState, setHoverState] = useState<boolean>(false);

  const navBarItemStyle: CSSProperties = hoverState ?
    {
      color: props.usedTheme.baseColors.background,
      backgroundColor: props.usedTheme.accentColor,
    } :
    {
      color: props.usedTheme.accentColor,
    };

  return (
    <div className={styles.container} style={navBarItemStyle} onMouseEnter={() => setHoverState(true)}
         onMouseLeave={() => setHoverState(false)}>
      {translate(props.text)}
    </div>
  );
}

export default NavBarItem;
