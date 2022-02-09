import React, { useContext } from 'react'
import "./dark.scss"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import { ThemeContext } from '../../context'

function Dark() {

  const theme = useContext(ThemeContext);

  const actionClick = ()=> {
    theme.dispatch({ type:"TOGGLE" })
  }

  return (
    <div className='dark'>
      <img src={sun} alt="" className="dark-icon" />
      <img src={moon} alt="" className="dark-icon" />
      <div className="dark-button" onClick={actionClick} 
      style={{ left: theme.state.darkMode ? 0 : 35 }}></div>
    </div>
  )
}

export default Dark