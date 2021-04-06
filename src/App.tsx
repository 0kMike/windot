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
import { loadLanguage } from './provider/languageProvider';

const App: React.FunctionComponent = () => {

  document.title = "windot";

  const [colors, setColors] = useState<IColors>(colorPalettes[0]);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  useEffect(() => {
    loadLanguage();
  }, [])

  const appBackgroundStyle: CSSProperties = {
    backgroundColor: colors.background,
    color: colors.text,
  }
//TODO texts for ContentText component need to be stored in language files under assets/i18n
  return (
    <div className="App" style={appBackgroundStyle}>
      <BrowserRouter>
        <Route exact path={"/"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            <ContentText textSize={50} text={"Hello there and welcome!"}/>
            <ContentText textSize={20} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis odio eu massa commodo, vel aliquam mauris bibendum. Proin vitae quam purus. Suspendisse sollicitudin sapien vitae molestie convallis. Etiam lectus leo, pulvinar eget eros sed, cursus iaculis metus. Donec augue diam, volutpat id tellus sed, venenatis sollicitudin felis. Maecenas at ipsum gravida ante egestas hendrerit. Sed ultricies sagittis ante, at facilisis nisl rutrum at."}/>
              <ButtonPanel colors={colors}>
                <Link to="/cv">
                <Button text="view cv" colors={colors}/>
                </Link>
                <Button text="my projects" colors={colors}/>
              </ButtonPanel>
            </Content>
            <AnimationCircle colors={colors} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle colors={colors} diameter={500} duration={100} opacity={100}/>
        </Route>
        <Route exact path={"/cv"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            </Content>
            <AnimationCircle colors={colors} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle colors={colors} diameter={500} duration={100} opacity={100}/>
        </Route>
        <Route exact path={"/legal"}>
            <NavBar colors={colors} setColors={setColors} showSettings={showSettings} setShowSettings={setShowSettings}/>
            <Content marginTop={100} colors={colors}>
            <ContentText textSize={50} text={"Legal Notice"}/>
            <ContentText textSize={20} text={"This website is used for private purposes only. Therefore, according to § 5 TMG (German Teleservices Act), this website is not required to have any contact data available."}/>
            </Content>
            <AnimationCircle colors={colors} diameter={800} duration={80} opacity={50}/>
            <AnimationCircle colors={colors} diameter={500} duration={100} opacity={100}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;