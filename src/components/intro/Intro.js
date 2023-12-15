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
              <div className="i-title-item">Java</div>
              <div className="i-title-item">Spring</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">OracleDB</div>
              <div className="i-title-item">MySQL</div>
            </div>
          </div>
          <p className="i-desc">
            늘 책임감을 가지고 업무에 임하는 개발자입니다.
            현대카드 신판기획팀 CMS 개발에 참여하여, 고객 대상 캠페인 및 마케팅 관련 프로젝트에 기여한 경험이 있습니다.
            꼼꼼하고 체계적인 업무 태도로 개발에 임하였으며, 완료 후에는 내부 문서로 일목요연하게 정리하여 팀원들에게 필요 내용을 인수인계 하였습니다.<br/>
            
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
