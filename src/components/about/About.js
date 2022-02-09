import React from 'react';
import "./about.scss"
import me from "../../img/me.jpg"

function About() {

  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ me } alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          dasasfiajsif asidfjasifjsa aigsjasijg agsijgasi
        </p>
        <p className="a-desc">
          asfijai asgji aisgjais asifjiasjf asifjasi asifji
          asasfagagkgjaij asidjaifja asijfasigjas
          agihgiasjg asidjasifjasn fauhhfasiaf afsijsaf
          asfasfasgfasgjkgkogakgaigji iasjdiasjdiasj
          askjiajghe gkuiovhia asjdiasjfiasjf
          asfasgagagoask 
          sagiasjigjasg asigjasijgisa
        </p>
      </div>
    </div>
  )

}

export default About;
