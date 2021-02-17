import React, {CSSProperties} from "react";
import styles from "./MainPage.module.css";
import NavBar from "../NavBar/NavBar";
import {ITheme} from "../../interfaces/ITheme";
import {IColors} from "../../interfaces/IColors";

interface IMainPageProps {
  usedColorPalette: IColors,
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const {usedColorPalette} = props;

  const cssStyle: CSSProperties = {
    backgroundColor: usedColorPalette.background,
    color: usedColorPalette.background,
  }

  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default MainPage;
