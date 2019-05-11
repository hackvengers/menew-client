import React from 'react';
import './LandingSecond.scss';
import camImg from 'static/1/1-2/1_2_img.png';
import phrase2 from 'static/1/1-2/1_2_text.png';

const LandingSecond = (props) => {

  const fadeOut = props.step;

  return (
    <div className={fadeOut !== 2 ? "main-container nonactive" : "main-container active"}>
      <img id="cam_img" src={camImg} alt=""/>
      <div id="main_phrase">
        <img className="phrase2" src={phrase2} alt=""/>
      </div>
    </div>
  )
};

export default LandingSecond;