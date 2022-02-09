import React from 'react';
import "./project.scss"
import { Link } from 'react-router-dom';

function Project(props) {



  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <Link to={props.link}>
        <img src={props.img} alt="" className="p-img" />
      </Link>
    </div>
  );

}

export default Project;
