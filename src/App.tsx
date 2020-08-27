import React, {CSSProperties, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import {themeProvider, defaultTheme, currentTheme} from "./provider/themeProvider";

const App: React.FC = () => {

  const [theme, setTheme] = useState<themeProvider>(defaultTheme);

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: theme.background,
    color: theme.foreground,
  }

  const applyTheme = () => {
    setTheme({background: "#1c1c1c", foreground: "#eeeeee", accent: "#ff3d00"});
  }

  return (
    <div className="App" style={appBackgroundStyle}>
      <NavBar/>
      <AnimationCircle diameter={800} duration={80} opacity={50}/>
      <AnimationCircle diameter={500} duration={100} opacity={100}/>
    </div>
  );
}

export default App;
