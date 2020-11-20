import React, {CSSProperties, useState} from 'react';
import './App.css';
import Content from "./components/Content/Content";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
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
            <NavBar usedColorPalette={usedColorPalette} setUsedColorPalette={setUsedColorPalette} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} color={usedColorPalette.text}/>
            {/*<AnimationCircle usedColorPalette={usedColorPalette} diameter={800} duration={80} opacity={50}/>*/}
            {/*<AnimationCircle usedColorPalette={usedColorPalette} diameter={500} duration={100} opacity={100}/>*/}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
