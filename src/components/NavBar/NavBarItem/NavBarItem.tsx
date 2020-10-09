import React, {CSSProperties, useState} from "react";
import styles from "./NavBarItem.module.css"
import {translate} from "../../../provider/languageProvider";
import {ITheme} from "../../../interfaces/ITheme";
import {Link} from "react-router-dom";

interface INavBarItemProps {
  text: string,
  targetUrlPath: string,
  usedTheme: ITheme,
}

const NavBarItem: React.FC<INavBarItemProps> = (props) => {
  const {text, targetUrlPath, usedTheme} = props;

  const [hoverState, setHoverState] = useState<boolean>(false);

  const navBarItemStyle: CSSProperties = hoverState ?
    {
      color: usedTheme.baseColors.background,
      backgroundColor: usedTheme.accentColor,
    } :
    {
      color: usedTheme.accentColor,
    };

  return (
    <Link to={targetUrlPath} className={styles.container} style={navBarItemStyle} onMouseEnter={() => setHoverState(true)}
         onMouseLeave={() => setHoverState(false)}>
      {translate(text)}
    </Link>
  );
}

export default NavBarItem;
