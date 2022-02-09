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
        <h1 className="a-title">늘 발전하는 사람이 되고 싶습니다.</h1>
        <p className="a-sub">
          스스로 모르는 부분을 발견하고, 배우려 노력합니다.
        </p>
        <p className="a-desc">
          저는 약 3년동안 다른 분야에서 일을 한 후, 남들보다 비교적 늦은 나이에 IT 공부를 시작하였습니다.
          그만큼 모자란 부분을 채우기 위해 배로 노력하려했고, 유튜브, 온라인강의, 국비지원 수업 등 활용할 수 있는
          모든 것을 활용하며 공부해왔습니다.
          <br />
          앞으로 저는 다양한 경험을 쌓으며  
          배우고 익힌 기술을 토대로 사람을 향하는 서비스를 개발해 나가고 싶습니다.
          
        </p>
      </div>
    </div>
  )

}

export default About;
