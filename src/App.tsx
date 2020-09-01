import React, {CSSProperties, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import {accentColor, theme, baseColor} from "./interfaces/ITheme";

const App: React.FunctionComponent = () => {

  const [usedTheme, setUsedTheme] = useState<theme>(
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
      <NavBar usedTheme={usedTheme} setUsedTheme={setUsedTheme}/>
      <AnimationCircle usedTheme={usedTheme} diameter={800} duration={80} opacity={50}/>
      <AnimationCircle usedTheme={usedTheme} diameter={500} duration={100} opacity={100}/>
    </div>
  );
}

export default App;
