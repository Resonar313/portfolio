import React, { useEffect} from 'react';
import './style.css'
import App from './app.js'

function GalacticLight() {

  useEffect(()=> {

    document.getElementById('canvas').style.display="";
    new App();

    return ()=>{
      document.getElementById('canvas').style.display="none";
    }
  }, []);

  return (
    <div>

    </div>
  );
}

export default GalacticLight;
