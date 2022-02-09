import React, { useEffect } from 'react';
import './style.css'
import App from './app.js'

function Collision() {

  useEffect(()=> {

    document.getElementById('canvas').style.display="";
    new App();

    return ()=>{
      document.getElementById('canvas').style.display="none";
      window.location.reload();
    }
  }, []);



  return (
    <div>
    </div>
  );
}

export default Collision;
