import React, { useEffect } from 'react';
import './style.css'
import App from './app.js'


function StarBall() {

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
      <div className="score">
        <span>Score: </span>
        <span id ="scoreEl">0</span>
      </div>

      <div className="box" id="box">
          <div className="board">
              <h1 className="scoretext" id="yourscore">0</h1>
              <p className="point">Point</p>
              <div>
                  <button className="button" id="start">Start Game</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default StarBall;
