import React, {CSSProperties, useState} from 'react';
import './App.css';
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {IColors} from "./interfaces/IColors";
import {colorPalettes} from "./provider/colorProvider";
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import Button from './components/Content/Button/Button';
import ButtonPanel from './components/Content/ButtonPanel/ButtonPanel';

const App: React.FunctionComponent = () => {

  document.title = "windot";

  const [colors, setColors] = useState<IColors>(
    colorPalettes[0]
  );
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: colors.background,
    color: colors.text,
  }

  return (
    <div className="App" style={appBackgroundStyle}>
      <BrowserRouter>
        <Route to={"/"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
              <ButtonPanel colors={colors}>
                <Button text="GitHub" colors={colors}/>
                <Button text="view cv" colors={colors}/>
              </ButtonPanel>
            </Content>
            <AnimationCircle colors={colors} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle colors={colors} diameter={500} duration={100} opacity={100}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
