import React from 'react';
import "./intro.scss"
import back from "../../img/back.jpg"

function Intro() {


  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2>안녕하세요, 이태호입니다.</h2>
          <h1>방문해주셔서 감사합니다.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML & CSS</div>
              <div className="i-title-item">Javascript</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">Java, SQL</div>
              <div className="i-title-item">SpringBoot</div>
            </div>
          </div>
          <p className="i-desc">
            저는 현재 프런트엔드 개발자를 목표로 준비하고 있습니다.
            다양한 기술을 공부하고 실력을 쌓아 누구나 편리하게 사용할 수 있는 서비스를 만들어 제공하는 것이 제 꿈입니다.<br/>
            
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={back} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;
