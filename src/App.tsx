import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import AnimationCircle from "./components/AnimationCircle/AnimationCircle";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <AnimationCircle diameter={800} duration={80} opacity={50}/>
      <AnimationCircle diameter={500} duration={100} opacity={100}/>
    </div>
  );
}

export default App;
