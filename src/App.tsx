import React, {CSSProperties, useState} from 'react';
import './App.css';
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import {accentColor, baseColor, ITheme} from "./interfaces/ITheme";
import Content from "./components/Content/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

const App: React.FunctionComponent = () => {

  document.title = "windot";

  const [usedTheme, setUsedTheme] = useState<ITheme>(
    {
      baseColors: {background: baseColor.dark, foreground: baseColor.light},
      accentColor: accentColor.orange
    }
  );

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: usedTheme.baseColors.background,
    color: usedTheme.baseColors.foreground,
  }

  return (
    <div className="App" style={appBackgroundStyle}>
      <BrowserRouter>
        <Route to={"/"}>
          <MainPage usedTheme={usedTheme} setUsedTheme={setUsedTheme}>
            <NavBar usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
            <Content marginTop={100} color={usedTheme.baseColors.foreground}/>
            <AnimationCircle usedTheme={usedTheme} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle usedTheme={usedTheme} diameter={500} duration={100} opacity={100}/>
          </MainPage>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
