import React, { useState } from 'react';
import './LandingSecond.scss';
import logo from 'static/1-2/1_2_img.png';
import phrase1 from 'static/1-2/1_2_text.png';
import next_icon from 'static/1_common/1_common_next_icon.png';

const LandingSecond = (props) => {

  const [fadeOut, setFadeOut] = useState(false);

  const toggle = () => {
    setFadeOut(!fadeOut);
  };

  return (
    <div className={fadeOut ? "main-container active" : "main-container"}>
      <img id="main_logo" src={logo} alt=""/>
      <div id="main_phrase">
        <img className="phrase1" src={phrase1} alt=""/>
        <img className="next_icon" src={next_icon} alt="" onClick={toggle}/>
      </div>
    </div>
  )
};

export default LandingSecond;