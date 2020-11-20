import React, {CSSProperties, useState} from 'react';
import './App.css';
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import {accentColor, baseColor, ITheme} from "./interfaces/ITheme";
import Content from "./components/Content/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import {IColorPalette} from "./interfaces/IColorPalette";
import {colorPalletes} from "./provider/colorPaletteProvider";

const App: React.FunctionComponent = () => {

  document.title = "windot";

  const [usedColorPalette, setUsedColorPalette] = useState<IColorPalette>(
    colorPalletes[0]
  );
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: usedColorPalette.background,
    color: usedColorPalette.text,
  }

  return (
    <div className="App" style={appBackgroundStyle}>
      <BrowserRouter>
        <Route to={"/"}>
          <MainPage usedTheme={usedColorPalette} setUsedTheme={setUsedColorPalette}>
            <NavBar usedTheme={usedColorPalette} setUsedTheme={setUsedColorPalette} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} color={usedColorPalette.baseColors.foreground}/>
            <AnimationCircle usedTheme={usedColorPalette} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle usedTheme={usedColorPalette} diameter={500} duration={100} opacity={100}/>
          </MainPage>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
