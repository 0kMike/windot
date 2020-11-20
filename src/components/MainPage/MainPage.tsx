import React, {CSSProperties} from "react";
import styles from "./MainPage.module.css";
import NavBar from "../NavBar/NavBar";
import {ITheme} from "../../interfaces/ITheme";
import {IColorPalette} from "../../interfaces/IColorPalette";

interface IMainPageProps {
  usedColorPalette: IColorPalette,
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const {usedColorPalette} = props;

  const cssStyle: CSSProperties = {
    backgroundColor: usedColorPalette.background,
    color: usedColorPalette.text
  }

  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default MainPage;
