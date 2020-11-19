import React from "react";
import styles from "./MainPage.module.css";
import NavBar from "../NavBar/NavBar";
import {ITheme} from "../../interfaces/ITheme";

interface IMainPageProps {
  usedTheme: ITheme,
  setUsedTheme(theme: ITheme): void,
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const {usedTheme, setUsedTheme} = props;
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default MainPage;
