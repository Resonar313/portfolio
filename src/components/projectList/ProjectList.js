import React from 'react';
import Project from '../project/Project';
import "./projectList.scss"
import {products} from "../../data.js"

function ProjectList() {
  return (
    <div className='pj'>
      <div className="pj-texts">
        <h1 className="pj-title">Canvas & JS</h1>
        <p className="pj-desc">
          자바스크립트를 공부하던 도중, 유튜브를 통해 흥미로운 영상을 접하였습니다.
          바로 HTML Canvas 기능과 자바스크립트를 활용하여 다양한 그래픽이나 게임을 만들어보는 영상이었습니다.
          저는 영상을 보고 나도 한 번 만들어보고 싶단 생각과 함께, 좀 더 즐겁게 코딩 공부를 할 수 있으리라 생각하였습니다.
          그래서 직접 여러가지를 만들어보았고, 이는 제 코딩 실력 향상에 많은 도움이 되었습니다.
          아래에서 만들어 본 것 중에서 몇 가지를 소개하고자 합니다. 즐겁게 봐 주셨으면 좋겠습니다.
        </p>
      </div>
      <div className="pj-list">
        {
          products.map((a)=> {
            return (
              <Project key={a.id} img={a.img} link={a.link} />
            )
          })
        }
        
      </div>
    </div>
  );
}

export default ProjectList;
