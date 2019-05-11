import React from 'react';
import './LandingFirst.scss';
import logo from 'static/1-1/1_1_logo.png';
import phrase1 from 'static/1-1/1_1_text.png';

const LandingFirst = (props) => {

  const fadeOut = props.step;

  return (
    <div className={fadeOut !== 1 ? "main-container nonactive" : "main-container"}>
      <img id="main_logo" src={logo} alt=""/>
      <div id="main_phrase">
        <img className="phrase1" src={phrase1} alt=""/>
      </div>
    </div>
  )
};

export default LandingFirst;