import React, { useState } from 'react';
import './LandingFirst.scss';
import logo from 'static/1-1/1_1_logo.png';
import phrase1 from 'static/1-1/1_1_text.png';
import next_icon from 'static/1_common/1_common_next_icon.png';

const LandingFirst = (props) => {

  const fadeOut = props.fadeOut;

  return (
    <div className={fadeOut !== 1 ? "main-container active" : "main-container"}>
      <img id="main_logo" src={logo} alt=""/>
      <div id="main_phrase">
        <img className="phrase1" src={phrase1} alt=""/>
        {/*<img className="next_icon" src={next_icon} alt="" onClick={toggle}/>*/}
      </div>
    </div>
  )
};

export default LandingFirst;