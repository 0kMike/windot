import React, {CSSProperties, useState} from 'react';
import './App.css';
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import {accentColor, baseColor, ITheme} from "./interfaces/ITheme";
import Content from "./components/Content/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import {horizontalDirection, verticalDirection} from "./interfaces/IAbsolutePosition";

const App: React.FunctionComponent = () => {

  const [usedTheme, setUsedTheme] = useState<ITheme>(
    {
      baseColors: {background: baseColor.light, foreground: baseColor.dark},
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
          <Redirect to={"/home"}/>
        </Route>
        <Route to={"/home"}>
          <MainPage usedTheme={usedTheme} setUsedTheme={setUsedTheme}>
            <Content marginTop={100} color={usedTheme.baseColors.foreground}/>
            <AnimationCircle usedTheme={usedTheme} diameter={800} duration={80} opacity={50} position={{
              verticalDirection: verticalDirection.bottom,
              verticalDistance: -400,
              horizontalDirection: horizontalDirection.right,
              horizontalDistance: -400
            }}/>
            <AnimationCircle usedTheme={usedTheme} diameter={500} duration={100} opacity={100} position={{
              verticalDirection: verticalDirection.bottom,
              verticalDistance: -250,
              horizontalDirection: horizontalDirection.right,
              horizontalDistance: -250
            }}/>
          </MainPage>
        </Route>
        {/*<Route to={"/aboutme"}>*/}
        {/*  <MainPage usedTheme={usedTheme} setUsedTheme={setUsedTheme}>*/}
        {/*    /!*<AnimationCircle usedTheme={usedTheme} diameter={600} duration={60} opacity={50}/>*!/*/}
        {/*    /!*<AnimationCircle usedTheme={usedTheme} diameter={350} duration={80} opacity={100}/>*!/*/}
        {/*  </MainPage>*/}
        {/*</Route>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
