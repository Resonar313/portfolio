import React, { useContext, useEffect } from 'react';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import { Route, Switch } from 'react-router-dom';
import Collision from './components/project/collision/Collision';
import GalacticLight from './components/project/galacticLight/GalacticLight';
import MouseDrawing from './components/project/mouseDrawing/MouseDrawing';
import Rotate from './components/project/rotate/Rotate';
import StarBall from './components/project/starBall/StarBall';
import TextAnimation from './components/project/textAnimation/TextAnimation';
import Contact from './components/contact/Contact';
import Dark from './components/dark/Dark';
import { ThemeContext } from './context';


function App() {

  useEffect(()=> {

    document.getElementById('canvas').style.display="none";
    
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ 
      backgroundColor:darkMode ? "#222" : "white",
      color: darkMode && "white",
      }}>
      <Switch>
        <Route exact path="/">
          <Dark />
          <Intro />
          <About />
          <ProjectList />
          <Contact />
        </Route>
        <Route path="/collision">
          <Collision />
        </Route>
        <Route path="/galacticLight">
          <GalacticLight></GalacticLight>
        </Route>
        <Route path="/mouseDrawing">
          <MouseDrawing></MouseDrawing>
        </Route>
        <Route path="/rotate">
          <Rotate></Rotate>
        </Route>
        <Route path="/starBall">
          <StarBall></StarBall>
        </Route>
        <Route path="/textAnimation">
          <TextAnimation></TextAnimation>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
