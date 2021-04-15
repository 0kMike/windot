import React, {CSSProperties, useEffect, useState} from 'react';
import './App.css';
import Content from "./components/Content/Content";
import {BrowserRouter, Link, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {IColors} from "./interfaces/IColors";
import {colorPalettes} from "./provider/colorProvider";
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";
import Button from './components/Content/Button/Button';
import ButtonPanel from './components/Content/ButtonPanel/ButtonPanel';
import ContentText from './components/Content/ContentText/ContentText';
import { defaultLanguage, loadLanguage, translate, } from './provider/languageProvider';

const App: React.FunctionComponent = () => {

  document.title = "windot";

  const [colors, setColors] = useState<IColors>(colorPalettes[0]);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage)

  useEffect(() =>{
    loadLanguage();
  },[])

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: colors.background,
    color: colors.text,
  }

//TODO texts for ContentText component need to be stored in language files under assets/i18n
//TODO minimize code, e.g. AnimationCircle outside of router
  return (
    <div className="App" style={appBackgroundStyle}>
      <AnimationCircle colors={colors} diameter={800} duration={80} opacity={50}/>
      <AnimationCircle colors={colors} diameter={500} duration={100} opacity={100}/>
      <BrowserRouter>
        <Route exact path={"/"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            <ContentText textSize={50} text={translate("home_welcome")}/>
            <ContentText textSize={20} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis odio eu massa commodo, vel aliquam mauris bibendum. Proin vitae quam purus. Suspendisse sollicitudin sapien vitae molestie convallis. Etiam lectus leo, pulvinar eget eros sed, cursus iaculis metus. Donec augue diam, volutpat id tellus sed, venenatis sollicitudin felis. Maecenas at ipsum gravida ante egestas hendrerit. Sed ultricies sagittis ante, at facilisis nisl rutrum at."}/>
              <ButtonPanel colors={colors}>
                <Link to="/cv">
                <Button text={translate("button_cv")} colors={colors}/>
                </Link>
                <Button text={translate("button_projects")} colors={colors}/>
              </ButtonPanel>
            </Content>
        </Route>
        <Route exact path={"/cv"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            </Content>
        </Route>
        <Route exact path={"/projects"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            </Content>
        </Route>
        <Route exact path={"/legal"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            <ContentText textSize={50} text={translate("home_legal")}/>
            <ContentText textSize={20} text={translate("legal_text")}/>
            </Content>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;