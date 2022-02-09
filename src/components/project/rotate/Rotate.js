import React, { useEffect } from 'react';
import './style.css'
import App from './app.js'

function Rotate() {

  useEffect(()=> {

    document.getElementById('canvas').style.display="";
    
    new App();

    return ()=>{
      document.getElementById('body').style.background="white";

      document.getElementById('canvas').style.display="none";
      
      window.location.reload();
    }
  }, []);

  
  return (
    <div>

    </div>
  );
}

export default Rotate;
